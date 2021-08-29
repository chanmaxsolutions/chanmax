import Link from 'next/link'
import Image from 'next/image'

const ServiceSection = () =>{
    return (
        <div className='container service-container  mt-5 mb-5'>
            <h3 className='text-center'>Services</h3>
                <div className='row'>
                    <div className="card col-lg-3 mt-3 mb-2" >
                        <Image src="/images/icon-1.svg" className="text-left" width={70.5} height={72} alt="..."/>
                            <div className="card-body text-center">
                                <p className="card-title">Logo & Branding</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link  href="#">
                                    <a className="button large third">More Details</a>
                                    </Link>
                             </div>
                    </div>

                    <div className="card col-lg-3 mt-3 mb-2" >
                        <Image src="/images/icon-1.svg" className="text-left" width={70.5} height={72} alt="..."/>
                            <div className="card-body text-center">
                                <p className="card-title">Logo & Branding</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link  href="#">
                                    <a className="button large third">More Details</a>
                                    </Link>
                             </div>
                    </div>

                    <div className="card col-lg-3 mt-3 mb-2" >
                        <Image src="/images/icon-1.svg" className="text-left" width={70.5} height={72} alt="..."/>
                            <div className="card-body text-center">
                                <p className="card-title">Logo & Branding</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link  href="#">
                                    <a className="button large third">More Details</a>
                                    </Link>
                             </div>
                    </div>

                    <div className="card col-lg-3 mt-3 mb-2" >
                        <Image src="/images/icon-1.svg" className="text-left" width={70.5} height={72} alt="..."/>
                            <div className="card-body text-center">
                                <p className="card-title">Logo & Branding</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link  href="#">
                                    <a className="button large third">More Details</a>
                                    </Link>
                             </div>
                    </div>

                    

                 
                </div>

                
        </div>
    )
}

export default ServiceSection