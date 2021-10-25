/** @format */

import Image from 'next/image';

const ContactDetails = () => {
	return (
		<div className='container contact-details-container'>
			<div className='row justify-content-md-center'>
				<div className='col-sm-3 text-center mt-4 contact-details-box-margin'>
					<div className='card '>
						<div className='card-body  contact-details-card'>
							<Image
								src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634970093/services-icon/address_wwp1dk.svg'
								className=''
								width={52.875}
								height={54}
								alt='...'
							/>
							<p className='card-title'>Address</p>
							<p className='card-text'>
								<a
									href='https://www.google.com/maps/place/Chanmax+Technologies/@8.9767736,79.9081283,17z/data=!3m1!4b1!4m5!3m4!1s0x3afdd903d15ff645:0xc8a2a02c27765d25!8m2!3d8.9767736!4d79.910317'
									target='_blank'>
									Grand Bazaar, Mannar <br />
									Sri Lanka.
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className='col-sm-3 text-center mt-4 '>
					<div className='card '>
						<div className='card-body text-center contact-details-card'>
							<Image
								src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634970333/services-icon/phone-icon_rkqlto.svg'
								className=''
								width={52.875}
								height={54}
								alt='...'
							/>
							<p className='card-title'>Phone</p>
							<p className='card-text'>
								<a href='tel:+94756042601'>+94 75 6042 601</a> <br />
								<a href='tel:+94756042601'>+94 75 6042 601</a>
							</p>
						</div>
					</div>
				</div>

				<div className='col-sm-3 text-center mt-4 '>
					<div className='card '>
						<div className='card-body text-center contact-details-card'>
							<Image
								src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634971600/services-icon/Mail-icon_nox34u.svg'
								className=''
								width={52.875}
								height={54}
								alt='...'
							/>
							<p className='card-title'>E-Mail</p>
							<p className='card-text'>
								<a href='mailto:hello@chanmax.io'>hello@chanmax.io</a> <br />
								<a href='mailto:career@chanmax.io'>career@chanmax.io</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
