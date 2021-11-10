/** @format */

import Footer from './Footer';

import dynamic from 'next/dynamic';
import OpeningCeremony from './openingCeremony';

const Header = dynamic(() => import('./Header'), { ssr: false });

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			{children}
			<script
				type='text/javascript'
				id='hs-script-loader'
				async
				defer
				src='//js-na1.hs-scripts.com/20769226.js'></script>
			<Footer />
		</div>
	);
}
