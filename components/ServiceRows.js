import Link from 'next/link'
import ServiceData from './../data/ServiceData';


const ServiceRow = () => {
    return(
        <div>
            <div className='container service-row-container  mb-md-5 mb-sm-0'>
              <div className='row'>
                <div className='col-md-4 service-row-col-small-1' style={{backgroundImage:`url(${ServiceData[0].image})`}}>
                </div>
                <div className='col-md-8 d-flex align-items-center p-4'>
                    <div>
                        <h2>{ServiceData[0].title}</h2>
                        <p className='small'>{ServiceData[0].excerpt} </p>
                        <Link href={`/services/${ServiceData[0].id}`}><a className='button' >Learn More</a></Link>
                    </div>
                </div>
            </div>
         </div>

         <div className='container service-row-container-2 mb-5'>
            <div className='row flex-sm-row-reverse'>
               <div className='col-md-4 service-row-col-small-2' style={{backgroundImage:`url(${ServiceData[1].image})`}}>
                </div>
                    <div className='col-md-8 d-flex align-items-center p-4'>
                    <div>
                    <h2 className='text-white' >{ServiceData[1].title}</h2>
                    <p className='text-white small' > {ServiceData[1].excerpt} </p>
                        <Link href={`/services/${ServiceData[1].id}`}><a className='button fourth ' >Learn More</a></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ServiceRow 