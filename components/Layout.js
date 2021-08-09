import Footer from './Footer'

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), { ssr: false });


export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
            </div>
            
    )
  }

  