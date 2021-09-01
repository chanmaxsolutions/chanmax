/** @format */

import Head from 'next/head';

const SEO = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initialScale=1.0' />
			<meta name='google' content='notranslate' />
			<meta name='description' content='We are building lightning fast applications for Startups to Corporate' />
			<link rel='icon' href='/images/favicon.png' />
		</Head>
	);
};

export default SEO;
