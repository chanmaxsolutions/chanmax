/** @format */

import Link from 'next/link';
import NewsLetter from './NewsLetter';
import Image from 'next/image';
import MenuOneData from './../data/FooterMenuData/MenuOneData';
import MenuTwoData from './../data/FooterMenuData/MenuTwoData';
import MenuThreeData from './../data/FooterMenuData/MenuThreeData';

const Footer = () => {
	return (
		<div className='container-fluid footer'>
			<div className='container  footer-in-container'>
				<div className='row'>
					<div className='col-md-3 col-6'>
						<p className='mb-4 footer-heading'>Company</p>

						{MenuOneData.map((content, i) => {
							return (
								<div key={i}>
									<Link href={content.url}>
										<a>
											<p className='footer-menu'>{content.title}</p>
										</a>
									</Link>
								</div>
							);
						})}
					</div>

					<div className='col-md-3 col-6'>
						<p className='mb-4 footer-heading'>Services</p>

						{MenuThreeData.map((content, i) => {
							return (
								<div key={i}>
									<Link href={content.url}>
										<a>
											<p className='footer-menu'>{content.title}</p>
										</a>
									</Link>
								</div>
							);
						})}
					</div>

					<div className='col-md-3 footer-third-menu'>
						<p className='mb-4 footer-heading'>Case Studies</p>

						{MenuTwoData.map((content, i) => {
							return (
								<div key={i}>
									<Link href={content.url}>
										<a>
											<p className='footer-menu'>{content.title}</p>
										</a>
									</Link>
								</div>
							);
						})}
					</div>

					<div className='col-md-3'>
						<p className='mb-4 footer-heading'>Be in Touch</p>
						<NewsLetter />

						<div className='footer-social-icons'>
							<Link href='#'>
								<a>
									<Image
										className='footer-social-icons-inner'
										src='/images/svg/linkedin.svg'
										width={40}
										height={40}
									/>
								</a>
							</Link>

							<Link href='#'>
								<a>
									<Image
										className='footer-social-icons-inner'
										src='/images/svg/facebook.svg'
										width={40}
										height={40}
									/>
								</a>
							</Link>

							<Link href='#'>
								<a>
									<Image
										className='footer-social-icons-inner'
										src='/images/svg/youtube.svg'
										width={40}
										height={40}
									/>
								</a>
							</Link>

							<Link href='#'>
								<a>
									<Image
										className='footer-social-icons-inner'
										src='/images/svg/instagram.svg'
										width={40}
										height={40}
									/>
								</a>
							</Link>
						</div>
					</div>
					<hr className='mt-4' style={{ borderTop: '1px solid #d1d1d1' }} />
					<div className='text-center '>
						<Image src='/images/svg/logo.svg' width={120} height={50} />
						<p className='footer-copyrights'>
							© 2018 - 2021 All Rights Reserved to CHANMAX TECHNOLOGIES (PVT)
							LTD.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
