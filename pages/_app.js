/** @format */

import Layout from '../components/Layout';
import '../styles/sass/main.scss';
import '../styles/globals.css';
import { motion } from 'framer-motion';
import Script from 'next/script';

// Import Carousel css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-phone-input-2/lib/style.css';
import { useEffect } from 'react';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
	useEffect(() => {
		// google
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-212809488-1');

		setTimeout(function () {
			// load the chat script
			const headerEl = document.getElementsByTagName('head')[0];
			const scriptEl = document.createElement('script');
			scriptEl.type = 'text/javascript';
			scriptEl.src = '//js-na1.hs-scripts.com/20769226.js';
			headerEl.appendChild(scriptEl);

			// load the hotjar script
			(function (h, o, t, j, a, r) {
				h.hj =
					h.hj ||
					function () {
						(h.hj.q = h.hj.q || []).push(arguments);
					};
				h._hjSettings = { hjid: 2695311, hjsv: 6 };
				a = o.getElementsByTagName('head')[0];
				r = o.createElement('script');
				r.async = 1;
				r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
				a.appendChild(r);
			})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
		}, 10000);
	}, []);

	return (
		<>
			{/* <Script
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
					(function (h, o, t, j, a, r) {
						h.hj =
							h.hj ||
							function () {
								(h.hj.q = h.hj.q || []).push(arguments);
							};
						h._hjSettings = { hjid: 2695311, hjsv: 6 };
						a = o.getElementsByTagName('head')[0];
						r = o.createElement('script');
						r.async = 1;
						r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
						a.appendChild(r);
					})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`,
				}}
			/> */}

			<Script
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
					(function (w, d, s, l, i) {
						w[l] = w[l] || [];
						w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
						var f = d.getElementsByTagName(s)[0],
							j = d.createElement(s),
							dl = l != 'dataLayer' ? '&l=' + l : '';
						j.async = true;
						j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
						f.parentNode.insertBefore(j, f);
					})(window, document, 'script', 'dataLayer', 'GTM-5WXLS6H'); `,
				}}
			/>

			{/* <Script
				strategy='lazyOnload'
				type='text/javascript'
				id='hs-script-loader'
				async
				defer
				src='//js-na1.hs-scripts.com/20769226.js'></Script> */}
			<Script
				type='text/javascript'
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-XWZRRN81S5'></Script>

			<motion.div
				initial={{ opacity: 0.9 }}
				animate={{ opacity: 1 }}
				key={router.route}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</motion.div>
		</>
	);
}
