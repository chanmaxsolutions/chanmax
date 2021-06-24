import Link from 'next/link'

const HomeTeam = () =>{
    return(
        <div className='container-fluid home-team-container text-center text-white mb-5' >
                <div className='col-lg-6 offset-md-0 offset-lg-3 '>
                <div>
                <h2 className='text-white home-team-heading'>Building lightning-fast websites for Startups to Corporates</h2>
                <p className='small'>We are an agency located in New York. We think strategy, craft design, develop digital 
                  and create motion. To forward your brand and business.</p>
                  <Link href='/pricing' ><a className="button large fourth" style={{marginLeft:'5px', marginTop:'10px'}}>Learn More</a></Link>
                </div>
                </div>
        </div>
    )
}

export default HomeTeam