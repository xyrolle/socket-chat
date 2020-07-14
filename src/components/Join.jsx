import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Join.scss';

export const Join = () => {
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');
	const [ image, setImage ] = useState('');

	return (
		<div className='joinOuterContainer'>
			<div className='joinInnerContainer'>
				<h1 className='heading'>Join</h1>
				<div>
					<input
						placeholder='Name'
						className='joinInput'
						type='text'
						onChange={(evt) => setName(evt.target.value)}
					/>
					<div>
						<input
							placeholder='Room'
							className='joinInput mt-20'
							type='text'
							onChange={(evt) => setRoom(evt.target.value)}
						/>
						<input
							placeholder='Image'
							className='joinInput mt-20'
							type='text'
							onChange={(evt) => setImage(evt.target.value)}
						/>
						<Link
							onClick={(evt) =>

									!name || !room ? evt.preventDefault() :
									null}
							to={`/chat?name=${name}&room=${room}&image=${image}`}
						>
							<button className='btn mt-20' type='submit'>
								Sign In
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Join;
