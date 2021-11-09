/** @format */

import Link from 'next/link';

export default function ContactThanks() {
	return (
		<div className='container-fluid bg-white error-page-height'>
			<div className='row align-items-center h-100'>
				<div className='col-lg-5 mx-auto '>
					<div className='text-center'>
						<h1 className='cm-thank'>Thank you!</h1>
						<h4 className='text-uppercase'>FOR CONTACTING US</h4>
						<p className='small'>
							We will give you a reply with exact solutions as soon as possible.
						</p>
						<Link href='/'>
							<a className='button'>Visit to Home Page</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
