/** @format */
import Image from 'next/image';
import HomeWhySectionData from './../data/HomeWhySectionData';
import Link from 'next/link';

const HomeWhySection = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-6 cm-p5'>
					{HomeWhySectionData.map((content, i) => {
						return (
							<div key={i}>
								<p className='home-why-section-sub-title'>{content.subTitle}</p>
								<h4>{content.title}</h4>
								<p className='home-why-section-desc'>{content.desc}</p>
								<Link href={content.ButtonLink}>
									<a className='home-why-section-button'>
										{content.ButtonText}
									</a>
								</Link>
							</div>
						);
					})}
				</div>
				<div className='col-lg-6'>
					<Image
						src='/images/gif-homepage-getfeedback-graphic.gif'
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeWhySection;
