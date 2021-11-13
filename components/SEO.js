/** @format */

import Head from 'next/head';

const SEO = ({ title, desc, img }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initialScale=1.0' />
			<meta name='google' content='notranslate' />
			<meta
				name='description'
				content='We are a vigilant team of digital experts ever ready to validate 
				your vision towards groundbreaking success, developing purposeful novel 
				solutions with high-end technologies. We architect future proof applications 
				to create game-changing experiences that make you unique and the first choice in the market.'
			/>
			<link
				rel='icon'
				href='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636590585/Home/favicon_gbzjjm.png'
			/>
			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			<meta property="og:description" content={desc || "We are Building lightning-fast Applications from Startups to Corporates."} />
			<meta property="og:image" content={img || "https://res.cloudinary.com/dem8lqxhj/image/upload/v1636590585/Home/favicon_gbzjjm.png"} />
			<meta property="og:url" content="https://www.chanmax.io" />
			<meta property="og:site_name" content="Chanmax Technologies" />

			<meta property="twitter:card" content="summary" />
			<meta property="twitter:site" content="Chanmax Technologies" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={desc || "We are Building lightning-fast Applications from Startups to Corporates."} />
			<meta property="twitter:image" content={img || "https://res.cloudinary.com/dem8lqxhj/image/upload/v1636590585/Home/favicon_gbzjjm.png"} />
			<meta
				property='og:image'
				content={
					img ||
					'https://res.cloudinary.com/dem8lqxhj/image/upload/v1636620911/Home/logo_6_jxem7d.jpg'
				}
			/>
		</Head>
	);
};

export default SEO;
