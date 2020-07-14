import React from 'react';
import { v4 as uuid } from 'uuid';

import '../styles/UserList.scss';

const UserList = ({ users }) => {
	return (
		<aside>
			<h2 className='users-heading'>Users</h2>
			<ul>
				{users.map((user) => (
					<li className='user' key={uuid()}>
						{user.name}
					</li>
				))}
			</ul>
		</aside>
	);
};

export default UserList;
