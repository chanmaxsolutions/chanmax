import data from "../../data/data"
import Image from "next/image"
import CallToAction from "../../components/CallToAction"

const BlogDetails = ({blogData}) => {
    return(
        <div>
            <div className='container-fluid blog-details-container-feature-image ' style={{backgroundImage:`url(${blogData.image})`}} >
            <div className='row justify-content-md-center blog-details-row'>
            <div className='col-lg-9 d-flex align-items-center'>
            <div className='text-center'>
            <h1 className='text-white text-center'>{blogData.title}</h1>
            <Image src={blogData.authorImage} width={60} height={60} className="img-thumbnail home-blog-author-image" alt="..."/>
            <div className='ms-2 mt-2'>
            <span className='home-blog-author-name text-white'>{blogData.author} </span>
        <p className='home-blog-author-position text-white'>{blogData.authorPosition}</p>
        </div>
            </div>
            </div>
            
            </div>
        </div>


        <div className='container-fluid bg-white pt-5 pb-5'>

            <div className='row justify-content-md-center'>
                    <div className='col-md-7'>
                        
            {blogData.body && blogData.body.map((value, i) => {
                    return(
                        <div key={i} className="desc" dangerouslySetInnerHTML={{__html: value}} />
                    )
                })}
                    </div>
            </div>
            
        </div>

        {
  console.log(blogData)}
        <CallToAction/>
        </div>
    )
}


BlogDetails.getInitialProps = async function ({ query }) {
    const { id } = query;
    const blogId = parseInt(id)
    const blogData = data.filter(blog => blog.id === blogId);
    return { blogData: blogData[0] };
  };

export default BlogDetails