import Link from "next/link";


const HomeCallToAction = () => {
    return(
        <div className='container home-call-to-action-container p-5 mb-5'>
            <div className='row'>
                <div className='col-md-10'>
                <h1 className='text-white mt-4'>Have an idea to build a digital product?</h1>
                <p className='text-white '>build a digital product an idea to build a digital product an idea to
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...
                </p>
                </div>
                <div className='col-md-2 d-grid align-items-center'>
                <Link href='/pricing' ><a className="button  large fourth " style={{marginLeft:'5px', marginTop:'10px'}}>Get a Quote</a></Link>
            
                </div>
                </div>
        </div>
    )
}

export default HomeCallToAction