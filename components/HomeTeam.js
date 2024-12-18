/** @format */

import Link from 'next/link';
import HomeTeamData from './../data/HomTeamData';

const HomeTeam = () => {
	return (
		<div className='container border-radius home-team-container text-center mb-5'>
			<div className='row justify-content-md-center border-radius home-team-container-row'>
				{HomeTeamData.map((content, i) => {
					return (
						<div key={i} className='col-lg-7 align-items-center'>
							<h3 className='text-white '>{content.title}</h3>
							<p className='text-white hero-description'>{content.excerpt}</p>
							<Link href={content.ButtonLink}>
								<a
									className='button large fourth'
									style={{ marginLeft: '5px', marginTop: '10px' }}>
									{content.buttonText}
								</a>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomeTeam;
