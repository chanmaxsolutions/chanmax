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
								src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634970093/services-icon/address_wwp1dk.svg'
								className=''
								width={70.5}
								height={72}
								alt='...'
							/>
							<p className='card-title'>Address</p>
							<p className='card-text'>
								Grand Bazaar, Mannar <br />
								Sri Lanka.
							</p>
						</div>
					</div>
				</div>

				<div className='col-sm-3 text-center mt-4 '>
					<div className='card '>
						<div className='card-body text-center testimonial-card'>
							<Image
								src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634970333/services-icon/phone-icon_rkqlto.svg'
								className=''
								width={70.5}
								height={72}
								alt='...'
							/>
							<p className='card-title'>Phone</p>
							<p className='card-text'>
								075 6042 602 <br />
								076 6042 602
							</p>
						</div>
					</div>
				</div>

				<div className='col-sm-3 text-center mt-4 '>
					<div className='card '>
						<div className='card-body text-center testimonial-card'>
							<Image
								src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634971600/services-icon/Mail-icon_nox34u.svg'
								className=''
								width={70.5}
								height={72}
								alt='...'
							/>
							<p className='card-title'>E-Mail</p>
							<p className='card-text'>
								hello@chanmax.io <br />
								career@chanmax.io
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
