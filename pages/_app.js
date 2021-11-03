/** @format */

import Layout from '../components/Layout';
import '../styles/sass/main.scss';
import '../styles/globals.css';
import { motion } from 'framer-motion';

// Import Carousel css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-phone-input-2/lib/style.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
	return (
		<motion.div
			initial={{ opacity: 0.9 }}
			animate={{ opacity: 1 }}
			key={router.route}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</motion.div>
	);
}
