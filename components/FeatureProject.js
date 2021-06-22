import Image from "next/image"
import Link from "next/link"


const FeatureProject = () =>{
    return(
        <section className='container-fluid feature-project-container'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-6 p-4'>
                    <Image src='/images/1.jpg' width={1000} height={1000} />
                </div>
                <div className='col-lg-6 d-flex align-items-center p-4'>
                <div>
                <p className="card-title">Logo & Branding</p>
                <h3>Hello heading</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link  href="#">
                  <a className="button large">More Details</a>
                </Link>
                </div>
                                    
                </div>

            </div>
            </div>
        </section>
    )
}

export default FeatureProject