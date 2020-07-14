import React from 'react';

import '../styles/Input.scss';

const Input = ({ message, setMessage, sendMessage }) => {
	const handleScroll = () => {
		const messages = document.querySelectorAll('.messageContainer');
		const lastMessage = messages[messages.length - 1];
		lastMessage.scrollIntoView();
	};

	const handleClick = (evt) => {
		sendMessage(evt, handleScroll);
	};

	const handleKeyPress = (evt) => {
		if (evt.key === 'Enter') {
			sendMessage(evt, handleScroll);
		}
	};

	return (
		<form className='ng-pristine ng-valid'>
			<input
				className='ng-pristine ng-untouched ng-valid'
				type='text'
				placeholder={'Type a message...'}
				value={message}
				onChange={(evt) => setMessage(evt.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<button className='sendButton' onClick={handleClick}>
				Send
			</button>
		</form>
	);
};

export default Input;
