import CallToAction from "../../components/CallToAction"
import WorkData from './../../data/WorkData';
import Image from "next/image";

const ServiceDetails = ({WorkDatas}) => {
    return(
        <div>
            
            <div className='container-fluid service-details-container-feature-image ' style={{backgroundImage:`url(${WorkDatas.image})`}}>
            <div className='row justify-content-md-center blog-details-row'>
            <div className='col-md-2 d-flex align-items-center'>
            <div className='text-center'>
            <span className='text-white text-uppercase '>Our Works</span>
            <h1 className='text-white text-center'>{WorkDatas.title}</h1>
            </div>
            </div>
            
            </div>
            </div>

            <div className='container-fluid bg-white pt-5 pb-5'>

            <div className='row justify-content-md-center'>
                    <div className='col-md-7'>
                        
            {WorkDatas.body && WorkDatas.body.map((value, i) => {
                    return(
                        <div key={i} className="desc" dangerouslySetInnerHTML={{__html: value}} />
                    )
                })}
                    </div>
            </div>
            
        </div>

        <CallToAction/>
        </div>
    )
}


ServiceDetails.getInitialProps = async function ({ query }) {
    const { id } = query;
    const workId = parseInt(id)
    const WorkDatas = WorkData.filter(work => work.id === workId);
    return { WorkDatas: WorkDatas[0] };
  };

export default ServiceDetails