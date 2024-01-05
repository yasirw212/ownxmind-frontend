import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container mt-3 p-3 " >
        <p className="" >© Own Mind Clothing 2023. All Rights Reserved</p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <a href="https://www.instagram.com/ownmind.1/" rel='noreferrer'  target={"_blank"}><i className="bi bi-instagram"></i></a>
            <div style={{marginLeft: '.75em'}} >
              <a href="mailto:ownmindtm@icloud.com?Subject=Customer Support" rel='noreferrer'  target={"_top"}><i className="bi bi-envelope" ></i></a>
            </div>
        </div> 
    </div>
  )
}

export default Footer