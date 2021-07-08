import Image from 'next/image'
import Link from 'next/link'


const ServiceRow = () => {
    return(
        <div>
            <div className='container service-row-container mb-5'>
            <div className='row'>
                <div className='col-md-4 service-row-col-small-1' style={{backgroundImage:'url(/images/11.jpg)'}}>
                    {/* <Image src='/images/10.jpg' width={200} height={200} /> */}
                </div>

                <div className='col-md-8 d-flex align-items-center p-5'>
                    <div>
                    <h1>Mobile App Development</h1>
                    <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Link href='/services'><a className='button large' >Learn More</a></Link>
                    </div>
                </div>

            </div>
        </div>

        <div className='container service-row-container-2 mb-5'>
            <div className='row'>
                
            <div className='col-md-8 d-flex align-items-center p-5'>
                    <div>
                    <h1 className='text-white' >Wep App Development</h1>
                    <p className='text-white' > simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Link href='/services'><a className='button fourth large' >Learn More</a></Link>
                    </div>
                </div>

                <div className='col-md-4 service-row-col-small-2' style={{backgroundImage:'url(/images/11.jpg)'}}>
                    {/* <Image src='/images/10.jpg' width={200} height={200} /> */}
                </div>

                

            </div>
        </div>

        <div className='container service-row-container mb-5'>
            <div className='row'>
                <div className='col-md-4 service-row-col-small-1' style={{backgroundImage:'url(/images/11.jpg)'}}>
                    {/* <Image src='/images/10.jpg' width={200} height={200} /> */}
                </div>

                <div className='col-md-8 d-flex align-items-center p-5'>
                    <div>
                    <h1>Mobile App Development</h1>
                    <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Link href='/services'><a className='button large' >Learn More</a></Link>
                    </div>
                </div>

            </div>
        </div>

        <div className='container service-row-container-2 mb-5'>
            <div className='row'>
                
            <div className='col-md-8 d-flex align-items-center p-5'>
                    <div>
                    <h1 className='text-white' >Wep App Development</h1>
                    <p className='text-white' > simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Link href='/services'><a className='button fourth large' >Learn More</a></Link>
                    </div>
                </div>

                <div className='col-md-4 service-row-col-small-2' style={{backgroundImage:'url(/images/11.jpg)'}}>
                    {/* <Image src='/images/10.jpg' width={200} height={200} /> */}
                </div>

                

            </div>
        </div>
        </div>
    )
}

export default ServiceRow 