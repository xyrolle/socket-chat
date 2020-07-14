import React from 'react';

import '../styles/Input.scss';

const Input = ({ message, setMessage, sendMessage }) => {
	const handleScroll = () => {
		const messages = document.querySelectorAll('.message');
		const lastMessage = messages[messages.length - 1];
		lastMessage.scrollIntoView({ behavior: 'smooth' });
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
		<form>
			<input
				className='input'
				type='text'
				placeholder='Enter a message...'
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
