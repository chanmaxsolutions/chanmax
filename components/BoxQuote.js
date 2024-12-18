/** @format */

import React from 'react';

function BoxQuote({ title, icon, handleClick, isSelected }) {
	return (
		<>
			<div
				className='col-lg-3 col-8 text-center'
				style={{
					border: `2px solid ${isSelected ? '#06b67b' : 'white'}`,
					backgroundColor: ` ${isSelected ? '#fff' : 'white'}`,
					color: `${isSelected ? '#1a1c1f' : '#565656'}`,
					margin: 10,
					height: 150,
					boxShadow: `${
						isSelected ? '0px 0px 0px' : 'rgb(0 0 0 / 1%) 0px 3px 20px '
					}`,
					cursor: 'pointer',
				}}
				onClick={handleClick}>
				<div className='card '>
					<div className='card-body '>
						<div
							className='fs-1'
							style={{
								color: `${isSelected ? '#06b67b' : '#565656'}`,
							}}>
							{icon}
						</div>
						<p className='get-quote-title-text'>{title}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default BoxQuote;
