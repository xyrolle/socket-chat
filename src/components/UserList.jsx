import React from 'react';
import { v4 as uuid } from 'uuid';

import '../styles/UserList.scss';

import defaultImg from '../icons/default.jpg';

const UserList = ({ users }) => {
	console.log('users are', users);
	return (
		<aside>
			<h2 className='users-heading'>Users</h2>
			<ul>
				{users.map((user) => (
					<li className='user' key={uuid()}>
						{user.name}
						<img
							className='profile-img'
							src={

									user.image ? user.image :
									defaultImg
							}
							alt='profile'
						/>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default UserList;
