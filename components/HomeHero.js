import Link from 'next/link'

const HomeHero = () =>{
    return (
        <div>
          <div className='container-fluid text-center hero-container'>
                <div className='row justify-content-md-center hero-container-row'>
                <div className='col-lg-7 d-flex align-items-center'>
                <div className='text-center'>
                <h1 className='hero-header'> Building <span style={{fontFamily:'Godofthunder', color:'#108F64', letterSpacing:'2.5px'}} >lightning fast</span> Applications for Startups to Corporate</h1>
                <p className='hero-description'>We are an agency located in New York. We think strategy, craft design, develop digital 
                  and create motion. To forward your brand and business.</p>
                  <Link href='/pricing' ><a className="button large" style={{marginRight:'5px', marginTop:'10px'}}>Learn More</a></Link>
                  <Link href='/pricing' ><a className="button large secondary" style={{marginLeft:'5px', marginTop:'10px'}}>Learn More</a></Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero