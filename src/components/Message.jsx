import React, { Fragment } from 'react';
import ReactEmoji from 'react-emoji';

import '../styles/Message.scss';

const Message = ({ message: { user, text }, name }) => {
	let isSentByCurrentUser = false;

	const trimedName = name.trim().toLowerCase();

	if (user === trimedName) {
		isSentByCurrentUser = true;
	}

	return (
		<Fragment>
			{
				isSentByCurrentUser ? <div className='message ng-scope messageContainer justifyEnd'>
					<div className='messageBox backgroundBlue'>
						<p className='sentText pb'>{trimedName}</p>
						<p className='ng-binding messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
					</div>
				</div> :
				<div className='message ng-scope messageContainer justifyStart mg'>
					<div className='messageBox backgroundLight'>
						<p className='sentText pb'>{user}</p>
						<p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
					</div>
				</div>}
		</Fragment>
	);
};

export default Message;
