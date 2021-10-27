/** @format */
import Image from 'next/image';
const Loader = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				position: 'absolute',
				width: '100%',
				height: '100vh',
				zIndex: 999,
				backgroundColor: '#1a1c1f',
			}}>
			<Image src='/images/svg/logo-white.svg' width='400' height='50' />
		</div>
	);
};

export default Loader;
