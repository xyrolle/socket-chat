import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from './InfoBar.jsx';
import Input from './Input.jsx';
import Messages from './Messages.jsx';
import UsersList from './UserList.jsx';

import '../styles/Chat.scss';

let socket;

const Chat = ({ location }) => {
	// change to context
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');
	const [ users, setUsers ] = useState([]);
	const [ message, setMessage ] = useState('');
	const [ messages, setMessages ] = useState([]);
	const ENDPOINT = 'localhost:5000';

	const sendMessage = (evt, callback) => {
		evt.preventDefault();
		if (message) {
			socket.emit('sendMessage', message, () => {
				setMessage('');
				callback();
			});
		}
	};

	useEffect(
		() => {
			const { name, room } = queryString.parse(location.search);

			socket = io(ENDPOINT);

			setName(name);
			setRoom(room);

			socket.emit('join', { name, room }, (error) => {
				if (error) {
					alert(error);
				}
			});
		},
		[ ENDPOINT, location.search ]
	);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages((messages) => [ ...messages, message ]);
		});

		socket.on('roomData', ({ users }) => {
			setUsers(users);
		});
	}, []);

	return (
		<div className='container'>
			<div className='inbox'>
				<UsersList users={users} />
				<main>
					<InfoBar room={room} />
					<Messages messages={messages} name={name} />
					<footer>
						<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
					</footer>
				</main>
			</div>
		</div>
	);
};

export default Chat;
