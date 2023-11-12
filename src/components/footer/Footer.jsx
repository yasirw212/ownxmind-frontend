import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container mt-3 p-3 " style={{fontSize: '.85rem'}}>
        <p className="" >© Own Mind Clothing 2023. All Rights Reserved</p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <a href="https://www.instagram.com/ownmind.1/"  target={"_blank"}><i className="bi bi-instagram"></i></a>
            <div style={{marginLeft: '.75em', fontSize: '1rem'}} >
                <i data-bs-toggle="modal" data-bs-target='#contactModal' className="bi bi-envelope" ></i>
            </div>
        </div> 
    </div>
  )
}

export default Footer