/** @format */
import Image from 'next/image';

const AboutDetails = () => {
	return (
		<div className='container pb-5'>
			<div className='row justify-content-md-center'>
				<div className='col-md-9 cm-p5 border-radius'>
					<h3>Our Story</h3>
					<p>
						In the dawn of 2018, the foundation for Chanmax Technologies was
						laid by Prashankhan Chandrapalan. A curious and passionate
						individual who was very inquisitive about the power of technology in
						the digital world. On his adventure of exploring the multiple
						corners in the software industry, he positioned himself in creative
						designing and frontend development. Soon, he launched his Facebook
						Page and immediately kicked off working on graphic designing and
						WordPress development projects. In 2021, he registered Chanmax
						Technologies as a full-fledged software development company
						committed to providing lightning-fast development services without
						compromising quality. He found a pool of remarkably talented and
						passionate innovators and set out on a game-changing journey
						building the best in class software solutions. Today we are working
						on numerous projects and have also partnered up with clients from
						more than 5 countries.
					</p>

					<h3>Our Works</h3>
					<p>
						We are a zealous and dedicated team striving for the speedy
						development of UX-optimized applications. Passion in our work puts
						perfection into our deliverables. We empower innovative solutions
						yielding the power of modern technologies and high-end tools for
						impactful results.
					</p>

					<div className='row text-center'>
						<div className='col-lg-3'>
							<Image src='/images/6.jpg' width='400' height='400' />
							<h4>Prashankhan Chandrapalan</h4>
							<p>
								<b>UX Designer</b>
							</p>
						</div>
						<div className='col-lg-3'>
							<Image src='/images/6.jpg' width='400' height='400' />
						</div>
						<div className='col-lg-3'>
							<Image src='/images/6.jpg' width='400' height='400' />
						</div>
						<div className='col-lg-3'>
							<Image src='/images/6.jpg' width='400' height='400' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutDetails;
