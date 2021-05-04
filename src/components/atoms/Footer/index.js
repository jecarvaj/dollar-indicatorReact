import React from 'react'
import FooterImg from './footer.png'
import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterImg} alt="Logo" style={{ width: 100 + '%' }} />
    </div>
  )
}

export default Footer
