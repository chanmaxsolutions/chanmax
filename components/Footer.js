import Link from "next/link";
import NewsLetter from './NewsLetter'
import Image from 'next/image'

const Footer = () => {
    return(
        <div className='container-fluid footer'>
            <div className='container w-75 footer-in-container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <p className='mb-4 footer-heading'>Company</p>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>About</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>Contact</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>FAQ</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>Pricing</p>
                        </a>
                        </Link>
                        
                    </div>

                    <div className='col-md-3'>
                        <p className='mb-4 footer-heading'>Company</p>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>About</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>Contact</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>FAQ</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>Pricing</p>
                        </a>
                        </Link>
                        
                    </div>

                    <div className='col-md-3'>
                        <p className='mb-4 footer-heading'>Company</p>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>About</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>Contact</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>FAQ</p>
                        </a>
                        </Link>
                        <Link href='#'>
                        <a className='footer-menu'>
                            <p>Pricing</p>
                        </a>
                        </Link>
                        
                    </div>

                    <div className='col-md-3'>
                        <p className='mb-4 footer-heading'>Be in Touch</p>
                        <NewsLetter/>

                        <div className='footer-social-icons'>
                        <Link  href='#'>
                           <Image className='footer-social-icons-inner' src='/images/linkedin.svg' width={40} height={40} />
                        </Link>

                        <Link  href='#'>
                           <Image className='footer-social-icons-inner' src='/images/facebook.svg' width={40} height={40} />
                        </Link>

                        <Link  href='#'>
                           <Image className='footer-social-icons-inner' src='/images/youtube.svg' width={40} height={40} />
                        </Link>

                        <Link  href='#'>
                           <Image className='footer-social-icons-inner' src='/images/instagram.svg' width={40} height={40} />
                        </Link>
                        </div>
                    </div>
                        <hr className='mt-4' style={{borderTop:'1px solid #d1d1d1'}} />
                    <div className='text-center footer-copyrights p-4'>
                    <Image src='/images/logo.svg' width={120} height={30} />
                    <p>© 2021 All Rights Reserved to CHANMAX TECHNOLOGIES.</p>
                </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer