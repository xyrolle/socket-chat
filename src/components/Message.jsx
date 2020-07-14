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
				isSentByCurrentUser ? <div className='message justifyEnd'>
					<div className='messageBox backgroundBlue'>
						<p className='pb'>{trimedName}</p>
						<p>{ReactEmoji.emojify(text)}</p>
					</div>
				</div> :
				<div className='message mg'>
					<div className='messageBox backgroundLight'>
						<p className='pb'>{user}</p>
						<p>{ReactEmoji.emojify(text)}</p>
					</div>
				</div>}
		</Fragment>
	);
};

export default Message;
