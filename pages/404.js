/** @format */
import Link from 'next/link';

export default function Custom404() {
	return (
		<div className='container-fluid bg-white error-page-height'>
			<div className='row align-items-center h-100'>
				<div className='col-lg-3 mx-auto '>
					<div className='text-center'>
						<h1 className='cm-404'>Oops!</h1>
						<h4 className='text-uppercase'>404 - Page not found</h4>
						<p className='small'>
							The page you are looking for might have been removed had its name
							changed or temporarily unavailable.
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
