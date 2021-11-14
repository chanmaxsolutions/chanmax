/** @format */
import Image from 'next/image';

const ApproachDetails = () => {
	return (
		<div className='container pb-5 text-center'>
			<div className='row justify-content-md-center'>
				<div className='col-lg-8 col-12 border-radius'>
					<div className='text-center mt-5'>
						<p className='sub-head'>Meet the team</p>
						<h3 className='mb-5'>
							We adopt a streamlined agile software development methodology to
							entertain the growing needs of our clients and deliver results to
							the utmost satisfaction.
						</h3>
						<Image
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636912683/approach/corporate-office-3_iqzkzf.jpg'
							width='960'
							height='540'
						/>
						<div className='row mt-5'>
							<div className='col-lg-7 order-lg-1 order-2 d-flex'>
								<div className='justify-content-center align-self-center'>
									<h3>User and Market Research</h3>
									<p>
										We deeply dive into understanding your stakeholders and
										analyse your stand in the market to craft impactful
										solutions.
									</p>
								</div>
							</div>
							<div className='col-lg-5 order-lg-1 order-1'>
								<Image
									width={1000}
									height={1219}
									src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636907654/approach/User_and_Market_Research_uzu04q.svg'></Image>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-5'>
								<Image
									width={1000}
									height={1219}
									src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636908296/approach/Strategy_and_Planning_mmeyb6.svg'></Image>
							</div>
							<div className='col-lg-7 d-flex'>
								<div className='justify-content-center align-self-center'>
									<h3>Strategy and Planning</h3>
									<p>
										We think out of the box to deliver the best results and
										strategize to imprint your brand value with best
										technological fusion.
									</p>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-7 col-lg-7 order-lg-1 order-2 d-flex'>
								<div className='justify-content-center align-self-center'>
									<h3>Design and Prototyping </h3>
									<p>
										We present a flavour of ideas with mood boards, interactive
										clickable prototypes and aesthetic visuals to validate your
										idea.
									</p>
								</div>
							</div>
							<div className='col-lg-5 col-lg-5 order-lg-1 order-1'>
								<Image
									width={1000}
									height={1219}
									src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636911200/approach/Design_and_Prototyping_vqmfvs.svg'></Image>
							</div>
						</div>
						<div className='row mb-5'>
							<div className='col-lg-5'>
								<Image
									width={1000}
									height={1219}
									src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636909015/approach/Code_and_Develop_tba5ep.svg'></Image>
							</div>
							<div className='col-lg-7 d-flex'>
								<div className='justify-content-center align-self-center'>
									<h3>Code and Develop</h3>
									<p>
										On approval of the design assets we kickstart into test
										driven coding and development, giving life to your products.
									</p>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-7 col-lg-7 order-lg-1 order-2 d-flex'>
								<div className='justify-content-center align-self-center'>
									<h3>Test and Launch </h3>
									<p>
										We thoroughly test the final outputs for a swift and
										streamlined performance while deploying quality solutions on
										time.
									</p>
								</div>
							</div>
							<div className='col-lg-5 col-lg-5 order-lg-1 order-1'>
								<Image
									width={1000}
									height={1219}
									src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636910016/approach/Test_and_Launch_hvwalc.svg'></Image>
							</div>
						</div>
						<div className='row mb-5'>
							<div className='col-lg-5'>
								<Image
									width={1000}
									height={1219}
									src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636910500/approach/Maintenance_virvq0.svg'></Image>
							</div>
							<div className='col-lg-7 d-flex'>
								<div className='justify-content-center align-self-center'>
									<h3>Maintenance</h3>
									<p>
										We are ever ready to walk with you and ensure the
										consistent, smooth flow of operations of our solutions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApproachDetails;
