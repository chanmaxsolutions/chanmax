import Link from 'next/link'
import Image from 'next/image'

const HomeBlogs = () => {
    return(
        <div className='container home-blog-container mt-5 mb-5'>
            <p className="card-title text-center">Logo & Branding</p>
            <h3 className='text-center mb-5'>Our Blogs</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <Link href='/pricing'>
    <div className="card  blog-card-div">
      <Image src='/images/11_thumb.jpg' width={200} height={100} layout='responsive'  objectFit='cover' className="card-img-top" alt="..."/>
      <div className="card-body blog-card">
        <h5 className="card-title">Simply dummy text of the printing and typesetting industry.</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...</p>
      </div>
    </div>
    
    </Link>
    <div className='d-flex align-items-center'>
      <Image src="/images/testimonial.jpg" width={60} height={60} className="img-thumbnail home-blog-author-image" alt="..."/>
      <div className='ms-2 mt-2'>
      <span className='home-blog-author-name'>Prashankhan Chandrapalan</span>
      <p className='home-blog-author-position'>Fonder & CEO</p>
      </div>
      </div>
  </div>

  <div className="col">
    <Link href='/pricing'>
    <div className="card  blog-card-div">
      <Image src='/images/11_thumb.jpg' width={200} height={100} layout='responsive'  objectFit='cover' className="card-img-top" alt="..."/>
      <div className="card-body blog-card">
        <h5 className="card-title">Simply dummy text of the printing and typesetting industry.</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...</p>
      </div>
    </div>
    
    </Link>
    <div className='d-flex align-items-center'>
      <Image src="/images/testimonial.jpg" width={60} height={60} className="img-thumbnail home-blog-author-image" alt="..."/>
      <div className='ms-2 mt-2'>
      <span className='home-blog-author-name'>Prashankhan Chandrapalan</span>
      <p className='home-blog-author-position'>Fonder & CEO</p>
      </div>
      </div>
  </div>

  <div className="col">
    <Link href='/pricing'>
    <div className="card  blog-card-div">
      <Image src='/images/11_thumb.jpg' width={200} height={100} layout='responsive'  objectFit='cover' className="card-img-top" alt="..."/>
      <div className="card-body blog-card">
        <h5 className="card-title">Simply dummy text of the printing and typesetting industry.</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer...</p>
      </div>
    </div>
    
    </Link>
    <div className='d-flex align-items-center'>
      <Image src="/images/testimonial.jpg" width={60} height={60} className="img-thumbnail home-blog-author-image" alt="..."/>
      <div className='ms-2 mt-2'>
      <span className='home-blog-author-name'>Prashankhan Chandrapalan</span>
      <p className='home-blog-author-position'>Fonder & CEO</p>
      </div>
      </div>
  </div>
  
  
</div>
        </div>
    )
}

export default HomeBlogs