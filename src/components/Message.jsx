import React, { Fragment } from 'react';
import ReactEmoji from 'react-emoji';

import '../styles/Message.scss';

const Message = ({ message: { user, text }, name }) => {
	let isSentByCurrentUser = false;
	let isSentByAdmin = false;

	const trimedName = name.trim().toLowerCase();

	if (user === trimedName) {
		isSentByCurrentUser = true;
	}

	if (user === 'admin') {
		isSentByAdmin = true;
	}

	return (
		<Fragment>
			{
				<div
					className={
						'message ' +
						(
							isSentByAdmin ? 'sent-by-admin' :
							!isSentByCurrentUser ? 'mg' :
							null)
					}
				>
					{
						!isSentByAdmin ? <p className='pb'>
							{
								isSentByCurrentUser ? trimedName :
								user}
						</p> :
						null}
					<p className='message-text'>{ReactEmoji.emojify(text)}</p>
				</div>
			}
		</Fragment>
	);
};

export default Message;
