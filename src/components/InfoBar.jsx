import React from 'react';

import '../styles/InfoBar.scss';

const InfoBar = ({ room }) => {
	return (
		<div className='infoBar'>
			<h3 className='room'>Room {room}</h3>
		</div>
	);
};

export default InfoBar;
