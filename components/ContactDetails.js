import Image from "next/image"

const ContactDetails = () =>{
    return(
        <div className='container contact-details-container'>
            <p className="card-title text-center">Logo & Branding</p>
            <h3 className='text-center'>Testimonials</h3>

            <div className='row justify-content-md-center'>
            <div className='text-center col-md-4'>
            <p className='small'>Some quick example text to build on the card title and make up</p>
            </div>
            </div>
            <div className='row justify-content-md-center'>

                <div className='col-sm-3 text-center mt-4 '>
                    <div className="card ">
                    <div className="card-body text-center testimonial-card">
                        <Image src="/images/icon-1.svg" className="" width={70.5} height={72} alt="..."/>
                                <p className="card-title">Address</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                             </div>
                    </div>
                </div>

                <div className='col-sm-3 text-center mt-4 '>
                    <div className="card ">
                    <div className="card-body text-center testimonial-card">
                        <Image src="/images/icon-1.svg" className="" width={70.5} height={72} alt="..."/>
                                <p className="card-title">Address</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                             </div>
                    </div>
                </div>

                <div className='col-sm-3 text-center mt-4 '>
                    <div className="card ">
                    <div className="card-body text-center testimonial-card">
                        <Image src="/images/icon-1.svg" className="" width={70.5} height={72} alt="..."/>
                                <p className="card-title">Address</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                             </div>
                    </div>
                </div>

                


        
                    
            </div>
        </div>
    )
}

export default ContactDetails