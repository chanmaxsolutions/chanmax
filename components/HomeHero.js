import Link from 'next/link'

const HomeHero = () =>{
    return (
        <div>
          <div className='container-fluid text-center hero-container'>
                <div className='row justify-content-md-center hero-container-row'>
                <div className='col-lg-7 d-flex align-items-center'>
                <div className='text-center'>
                {/* <h1 className='hero-header'> Building <span style={{fontFamily:'fighting-spirit', color:'#108F64', letterSpacing:'2.5px'}} >lightning fast</span> Applications for Startups to Corporate</h1> */}
                <h1 className='hero-header text-white'> Building lightning fast Applications for Startups to Corporate</h1>
                <p className='hero-description text-white'>We are an agency located in New York. We think strategy, craft design, develop digital 
                  and create motion. To forward your brand and business.</p>
                  <Link href='/pricing' ><a className="button large fifth home-hero-button" >Learn More</a></Link>
                  <Link href='/pricing' ><a className="button large fourth home-hero-button-two" >Learn More</a></Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero