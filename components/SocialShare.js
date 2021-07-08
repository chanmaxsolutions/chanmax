import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";

  const SocialShare = ({title}) => {
      return(
          <div className='row justify-content-md-center'>
            <div className='col-md-3'>
                <div className='row'>
                <div className='col'>
            <WhatsappShareButton title={title} separator="::" url='/'>
            <WhatsappIcon size={"2rem"} round />
          </WhatsappShareButton>
            </div>

          <div className='col'>
          <FacebookShareButton title={title} separator="::" url='https://www.npmjs.com/search?q=react%20social'>
              <FacebookIcon size={"2rem"} round />
          </FacebookShareButton>
          </div>

          <div className='col'>
          <FacebookShareButton title={title} separator="::" url='https://www.npmjs.com/search?q=react%20social'>
              <FacebookIcon size={"2rem"} round />
          </FacebookShareButton>
          </div>

          <div className='col'>
          <FacebookShareButton title={title} separator="::" url='https://www.npmjs.com/search?q=react%20social'>
              <FacebookIcon size={"2rem"} round />
          </FacebookShareButton>
          </div>

          <div className='col'>
          <FacebookShareButton title={title} separator="::" url='https://www.npmjs.com/search?q=react%20social'>
              <FacebookIcon size={"2rem"} round />
          </FacebookShareButton>
          </div>
                </div>
            </div>
          </div>
      )
  }

  export default SocialShare