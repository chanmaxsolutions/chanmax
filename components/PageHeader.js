const PageHeader = ({ subHead, mainHead, des, bgImg }) => {
    return(
        <div className='container mt-4 mb-5 text-center page-header-container' style={{backgroundImage: `url(${bgImg})` }}>
            <p className='text-white text-uppercase page-header-subhead'>{subHead}</p>
            <h2 className='text-white' >{mainHead}</h2>
            <hr/>
            <p className='small page-header-des'>{des}</p>

        </div>
    )
}

export default PageHeader