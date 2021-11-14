/** @format */
import Image from 'next/image';

const Team = () => {
	return (
		<div className='text-center mt-5'>
			<p className='sub-head'>Meet the team</p>
			<h3 className=''>
				Diverse talents united under one roof to fast forward you into the
				Digital Arena
			</h3>
			<div className='row mt-5'>
				<div className='col-lg-7 order-lg-1 order-2 d-flex'>
					<div className='justify-content-center align-self-center'>
						<h3>Raghuraj Balasubramaniam</h3>
						<h5 className='team-position'>Full Stack Developer</h5>
						<p>
							A self-taught coder with a strong understanding of MERN and JAM
							Stack technologies. His aptitude to handle complicated challenges
							propelled him into the software development industry.
						</p>
					</div>
				</div>
				<div className='col-lg-5 order-lg-1 order-1'>
					<Image
						width={1000}
						height={1219}
						src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636660933/team/raghu_ldgjr6.png'></Image>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-5'>
					<Image
						width={1000}
						height={1219}
						src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636660742/team/tharsha_dxonvx.png'></Image>
				</div>
				<div className='col-lg-7 d-flex'>
					<div className='justify-content-center align-self-center'>
						<h3>Tharsha Loganathan</h3>
						<h5 className='team-position'>Quality Analyst</h5>
						<p>
							A critical thinker by nature, which makes her fit for this
							position. The way she collaborates with the team and tests the
							product makes the work follow easy and helps for a better outcome.
						</p>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-7 col-lg-7 order-lg-1 order-2 d-flex'>
					<div className='justify-content-center align-self-center'>
						<h3>Vithuzan Ravichandran</h3>
						<h5 className='team-position'>Graphic Designer / Web Developer</h5>
						<p>
							A design enthusiast with a keen eye for good design, as well as a
							great team player. His design vision allows him to play dual roles
							and excel at both.
						</p>
					</div>
				</div>
				<div className='col-lg-5 col-lg-5 order-lg-1 order-1'>
					<Image
						width={1000}
						height={1219}
						src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636661080/team/Vithu_zxu3wi.png'></Image>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-lg-5'>
					<Image
						width={1000}
						height={1219}
						src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636660504/team/prashan_ouafya.png'></Image>
				</div>
				<div className='col-lg-7 d-flex'>
					<div className='justify-content-center align-self-center'>
						<h3>Prashankhan Chandrapalan</h3>
						<h5 className='team-position'>Founder / UX Designer</h5>
						<p>
							He's a self-taught designer with a lot of practical experience.
							His desire to form personal connections allows him to empathize
							with others' needs and have a positive impact on the outcome.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
