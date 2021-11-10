/** @format */

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
						rel='stylesheet'
						integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x'
						crossOrigin='anonymous'
					/>
					<meta
						name='google-site-verification'
						content='dGPVadI0WUwqLP9at6eIk1H08I50BlwB6sFNcrGVnCA'
					/>

					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />

					<NextScript />
				</body>
				<script src={'/js/plugins.js'} />
			</Html>
		);
	}
}

export default MyDocument;
