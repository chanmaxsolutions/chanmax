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

					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<script src={'/js/plugins.js'} />
					<script
						src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
						integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4'
						crossOrigin='anonymous'></script>

					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
