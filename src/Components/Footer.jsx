import logoclinica from "../assets/DH.png"
import icofacebook from "../assets/ico-facebook.png"
import icoinsta from "../assets/ico-instagram.png"
import icotiktok from "../assets/ico-tiktok.png"
import icowhatsapp from "../assets/ico-whatsapp.png"

const Footer = () => {
  return (
    <div className="">
      <footer>
        <img src= {logoclinica} alt='DH-logo'/>
        <img className="socialIcon" src= {icofacebook} alt="" />
        <img className="socialIcon" src= {icoinsta} alt="" />
        <img className="socialIcon" src= {icotiktok} alt="" />
        <img className="socialIcon" src= {icowhatsapp} alt="" />
      </footer>
    </div>
  )
}

export default Footer
