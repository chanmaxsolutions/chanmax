const PageHeader = ({ subHead, mainHead, des, bgImg }) => {
    return(
        <div className='container-fluid mb-5 page-header-container ' style={{backgroundImage: `url(${bgImg})` }}>
            <div className='row page-header-row'>
            <div className='col-md-4 cm-mt-page-header align-items-center offset-md-4'>
            <div className='text-center mt-5'>
            <span className='text-white text-uppercase '>{subHead}</span>
            <h2 className='text-white' >{mainHead}</h2>
            <p className='' style={{color:'#fafafa', fontWeight:'300'}}>{des}</p>
            </div>
            </div>
            </div>

        </div>
    )
}

export default PageHeader