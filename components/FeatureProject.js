import Image from "next/image"
import Link from "next/link"


const FeatureProject = () =>{
    return(
        <section className='container-fluid feature-project-container'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-6' >
                    <Image className='feature-project-bg-image' src='/images/5.jpg' width={1000} height={1000} />
                </div>
                <div className='col-lg-6 d-flex align-items-center p-4'>
                <div>
                <p className="card-title">Logo & Branding</p>
                <h3>Hello heading</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere? Aliter enim explicari, quod quaeritur, non potest. Quonam, inquit, modo? Duo Reges: constructio interrete. At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus. Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. 

</p>
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