import React from 'react'
import './style.scss'


const Footer = () => {
  return (
    <div className="footer">
      <img id='footer-img' src={'/imgs/footer.png'} alt="footerimg" style={{ width: 100 + '%' }} />
      <img id='footer-img-dark' src={'/imgs/footer_dark.png'} alt="footerimg" style={{ width: 100 + '%', display: 'none' }} />
    </div>
  )
}

export default Footer
