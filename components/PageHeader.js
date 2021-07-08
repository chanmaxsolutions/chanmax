const PageHeader = ({ subHead, mainHead, des, bgImg }) => {
    return(
        <div className='container-fluid mb-5 page-header-container ' style={{backgroundImage: `url(${bgImg})` }}>
            <div className='row justify-content-md-center page-header-row'>
            <div className='col-md-4 d-flex align-items-center'>
            <div className='text-center'>
            <span className='text-white text-uppercase '>{subHead}</span>
            <h2 className='text-white' >{mainHead}</h2>
            <p className='small' style={{color:'#fafafa'}}>{des}</p>
            </div>
            </div>
            </div>

        </div>
    )
}

export default PageHeader