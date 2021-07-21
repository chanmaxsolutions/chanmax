import WorkData from "../data/WorkData";
import Link from "next/link";
import Image from 'next/image'

const WorkGrid = () => {
    return(
        <div>
            <div className='container'>
                <div className='row'>
                    {WorkData.map((workContent, i) => {
                       return(
                        <div key={i} className='col-md-6 mb-5'>
                        <Image className='work-image' src={workContent.image} width={620} height={400} />
                        <h3 className='mt-2'>{workContent.title}</h3>
                        <p>{workContent.excerpt}</p>
                        <Link href={`/works/${workContent.id}`}><a className='button' >Learn More</a></Link>
                    </div>
                       )
                    })}
                </div>

            </div>
        </div>
    )
}

export default WorkGrid