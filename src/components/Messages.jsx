import React from 'react';
import { v4 as uuid } from 'uuid';

import Message from './Message.jsx';

import '../styles/Message.scss';

const Messages = ({ messages, name }) => {
	return <div className='message-wrap'>{messages.map((message) => <Message message={message} name={name} />)}</div>;
};

export default Messages;
