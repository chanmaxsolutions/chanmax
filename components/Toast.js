/** @format */

import React from 'react';

export default function Toast({ message, handleClose }) {
	return (
		<div
			className='toast align-items-center text-white get-quote-toast border-0'
			style={{
				top: 'calc(100vh - 70px)',
				position: 'fixed',
				left: 10,
				opacity: 1,
			}}
			role='alert'
			aria-live='assertive'
			aria-atomic='true'>
			<div className='d-flex'>
				<div className='toast-body'>{message}</div>
				<button
					type='button'
					className='btn-close btn-close-white me-2 m-auto'
					data-bs-dismiss='toast'
					aria-label='Close'
					onClick={handleClose}></button>
			</div>
		</div>
	);
}
