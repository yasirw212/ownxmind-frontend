import React from 'react'
import { Link } from 'react-router-dom'
import './thankyou.css'

const Thankyou = () => {
  return (
    <div style={{/*background: `rgba(0, 0, 0, .5)`,*/ height: '100vh', position: 'relative', top: '-3vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '-20vh'}}>
        <div className='thankyou-modal' style={{width: '75%', borderRadius: '8px', boxShadow: '0px 0px 40px #131313', background: "#fff", padding: '2rem', maxWidth: '750px', position: 'relative', top: '10%'}}>
            <p style={{fontFamily: 'darkpix'}}>Thank you,
            <br />
            <br />
            for choosing OWN X MIND! Your order is now in our hands, and we're excited to begin the process of preparing and packaging your selected pieces with the utmost care and attention to detail. Your support means everything to us, and we can't wait for you to experience the style and quality that define OWN X MIND. Keep an eye on your inbox for a receipt and shipping updates, and in the meantime, 
            <br />
            <br />
            feel free to reach out to us at: <span >ownxmindtm@icloud.com</span>
            <br />
            <br />
            We appreciate your trust in us and look forward to becoming a part of your wardrobe. Happy styling!</p>
            <Link style={{color: '#131313', fontFamily: 'darkpix'}} to={'/'}>Return to home ></Link>
        </div>
    </div>
  )
}

export default Thankyou