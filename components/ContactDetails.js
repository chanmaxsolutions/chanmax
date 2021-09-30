/** @format */

import Image from 'next/image';

const ContactDetails = () => {
	return (
		<div className='container contact-details-container'>
			<div className='row justify-content-md-center'>
				<div className='col-sm-3 text-center mt-4 contact-details-box-margin'>
					<div className='card '>
						<div className='card-body  testimonial-card'>
							<Image
								src='/images/svg/icon-1.svg'
								className=''
								width={70.5}
								height={72}
								alt='...'
							/>
							<p className='card-title'>Address</p>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>

				<div className='col-sm-3 text-center mt-4 '>
					<div className='card '>
						<div className='card-body text-center testimonial-card'>
							<Image
								src='/images/svg/icon-1.svg'
								className=''
								width={70.5}
								height={72}
								alt='...'
							/>
							<p className='card-title'>Address</p>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>

				<div className='col-sm-3 text-center mt-4 '>
					<div className='card '>
						<div className='card-body text-center testimonial-card'>
							<Image
								src='/images/svg/icon-1.svg'
								className=''
								width={70.5}
								height={72}
								alt='...'
							/>
							<p className='card-title'>Address</p>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
