import Link from 'next/link'

const HomeHero = () =>{
    return (
        <div className='container-fluid text-center hero-container'>
                <div className='col-lg-6 offset-md-3'>
                <h1 className='hero-header'>Building lightning-fast websites for Startups to Corporates</h1>
                <p className='hero-describtion'>We are an agency located in New York. We think strategy, craft design, develop digital 
                  and create motion. To forward your brand and business.</p>
                  <Link href='/pricing' ><a className="button large" style={{marginRight:'5px', marginTop:'10px'}}>Learn More</a></Link>
                  <Link href='/pricing' ><a className="button large secondary" style={{marginLeft:'5px', marginTop:'10px'}}>Learn More</a></Link>
                </div>
            </div>
    )
}

export default HomeHero