import Link from 'next/link'
import Image from 'next/image'
import data from '../data/data'


const BlogComponent = () => {


    return(
      <div className='container home-blog-container mt-5 mb-5'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.slice(-3).reverse().map((content, i) => {
        return(
          <div className="col" key={i} >
<Link href={`/blog/${content.id}`} >
  <a>
    
<div className="card  blog-card-div">
<Image src={content.image} width={200} height={100} layout='responsive'  objectFit='cover' className="card-img-top" alt="..."/>
<div className="card-body blog-card">
<h5 className="card-title"> {content.title} </h5>
{console.log(data)}
<p className="card-text">{content.excerpt}</p>

</div>
</div>


  </a>
</Link>
<div className='d-flex align-items-center'>
<Image src={content.authorImage} width={60} height={60} className="img-thumbnail home-blog-author-image" alt="..."/>
<div className='ms-2 mt-2'>
<span className='home-blog-author-name'>{content.author} </span>
<p className='home-blog-author-position'>{content.authorPosition}</p>
</div>
</div>
</div>
        )
      })}



</div>
</div>
    )
}

export default BlogComponent

