/** @format */

import Head from 'next/head';

const SEO = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initialScale=1.0' />
			<meta name='google' content='notranslate' />
			<meta
				name='description'
				content='We are Building lightning-fast Applications from Startups to Corporates.'
			/>
			<link
				rel='icon'
				href='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636590585/Home/favicon_gbzjjm.png'
			/>
		</Head>
	);
};

export default SEO;
