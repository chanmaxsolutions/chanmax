/** @format */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import WorkData from './../data/WorkData';

export default function Header(props) {
	const [HeaderChange, SetHeaderChange] = useState(false);
	const [ScreenWidth, SetScreenWidth] = useState(window.innerWidth > 801);

	const { asPath } = useRouter();

	const menuOpenRef = React.createRef();

	const handleMenuOpen = (event) => {
		event.preventDefault();
		document.body.classList.add('menu--opened');
	};

	const handleMenuClose = (event) => {
		event.preventDefault();
		document.body.classList.remove('menu--opened');
	};

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				if (window.innerWidth > 901) {
					SetScreenWidth(true);
				} else {
					SetScreenWidth(false);
				}
			},
			false,
		);
	}, []);

	useEffect(() => {
		document.body.classList.remove('menu--opened');
	}, [asPath]);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				SetHeaderChange(true);
			} else {
				SetHeaderChange(false);
			}
		});
	}, []);

	return (
		<>
			{HeaderChange || !ScreenWidth ? (
				<div id='page' className='site '>
					<header id='masthead' className='site-header-two outer'>
						<div className='inner'>
							<div className='site-header-inside'>
								<div className='site-branding'>
									<p className='site-logo'>
										<Link href='/'>
											<a>
												{' '}
												<img
													src='/images/svg/logo.svg'
													alt='CHANMAX TECHNOLOGIES'
												/>{' '}
											</a>
										</Link>
									</p>
								</div>

								<nav
									id='main-navigation'
									className='site-navigation'
									aria-label='Main Navigation'>
									<div className='site-nav-inside'>
										<button
											id='menu-close'
											className='menu-toggle'
											onClick={handleMenuClose}>
											<span className='screen-reader-text'>Open Menu</span>
											<span className='icon-close' aria-hidden='true' />
										</button>

										<ul className='menu'>
											<li
												className={`menu-item  ${
													asPath === '/' ? 'current-menu-item' : ''
												}`}>
												<Link href='/'>
													<a>
														{' '}
														<span>Home</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/services' ? 'current-menu-item' : ''
												}`}>
												<Link href='/services'>
													<a>
														{' '}
														<span>Services</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/references' ? 'current-menu-item' : ''
												}`}>
												<Link href='/references'>
													<a>
														{' '}
														<span>References</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/about' ? 'current-menu-item' : ''
												}`}>
												<Link href='/about'>
													<a>
														{' '}
														<span>About us</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/contact' ? 'current-menu-item' : ''
												}`}>
												<Link href='/contact'>
													<a>
														{' '}
														<span>Contact us</span>{' '}
													</a>
												</Link>
											</li>

											{/* <li
												className={`menu-item ${
													asPath === '/blog' ? 'current-menu-item' : ''
												}`}>
												<Link href='/blog'>
													<a>
														{' '}
														<span>Blog</span>{' '}
													</a>
												</Link>
											</li> */}

											<li
												className={`menu-item menu-button ${
													asPath === '/get-quote' ? 'current-menu-item' : ''
												}`}>
												<Link href='/get-quote'>
													<a className='button'>
														{' '}
														<span>Get a Quote</span>{' '}
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</nav>

								<button
									id='menu-open'
									className='menu-toggle'
									ref={menuOpenRef}
									onClick={handleMenuOpen}>
									<span className='screen-reader-text'>Close Menu</span>
									<span className='icon-menu' aria-hidden='true' />
								</button>
							</div>
						</div>
					</header>
				</div>
			) : (
				<div id='page' className='site'>
					<header id='masthead-2' className='site-header outer'>
						<div className='inner'>
							<div className='site-header-inside'>
								<div className='site-branding'>
									<p className='site-logo'>
										<Link href='/'>
											<a>
												{' '}
												<img
													src='/images/svg/logo-white.svg'
													alt='CHANMAX TECHNOLOGIES'
												/>{' '}
											</a>
										</Link>
									</p>
								</div>

								<nav
									id='main-navigation'
									className='site-navigation'
									aria-label='Main Navigation'>
									<div className='site-nav-inside'>
										<button
											id='menu-close'
											className='menu-toggle'
											onClick={handleMenuClose}>
											<span className='screen-reader-text'>Open Menu</span>
											<span className='icon-close' aria-hidden='true' />
										</button>

										<ul className='menu'>
											<li
												className={`menu-item  ${
													asPath === '/' ? 'current-menu-item' : ''
												}`}>
												<Link href='/'>
													<a>
														{' '}
														<span>Home</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/services' ? 'current-menu-item' : ''
												}`}>
												<Link href='/services'>
													<a>
														{' '}
														<span>Services</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/references' ? 'current-menu-item' : ''
												}`}>
												<Link href='/references'>
													<a>
														{' '}
														<span>References</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/about' ? 'current-menu-item' : ''
												}`}>
												<Link href='/about'>
													<a>
														{' '}
														<span>About us</span>{' '}
													</a>
												</Link>
											</li>

											<li
												className={`menu-item ${
													asPath === '/contact' ? 'current-menu-item' : ''
												}`}>
												<Link href='/contact'>
													<a>
														{' '}
														<span>Contact us</span>{' '}
													</a>
												</Link>
											</li>

											{/* <li
												className={`menu-item ${
													asPath === '/blog' ? 'current-menu-item' : ''
												}`}>
												<Link href='/blog'>
													<a>
														{' '}
														<span>Blog</span>{' '}
													</a>
												</Link>
											</li> */}

											<li
												className={`menu-item menu-button ${
													asPath === '/get-quote' ? 'current-menu-item' : ''
												}`}>
												<Link href='/get-quote'>
													<a className='button fourth'>
														{' '}
														<span>Get a Quote</span>{' '}
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</nav>

								<button
									id='menu-open'
									className='menu-toggle'
									ref={menuOpenRef}
									onClick={handleMenuOpen}>
									<span className='screen-reader-text'>Close Menu</span>
									<span className='icon-menu' aria-hidden='true' />
								</button>
							</div>
						</div>
					</header>
				</div>
			)}
		</>
	);
}
