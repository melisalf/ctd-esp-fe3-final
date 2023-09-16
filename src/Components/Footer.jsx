import logoclinica from "../assets/DH.png"
import icofacebook from "../assets/ico-facebook.png"
import icoinsta from "../assets/ico-instagram.png"
import icotiktok from "../assets/ico-tiktok.png"
import icowhatsapp from "../assets/ico-whatsapp.png"

const Footer = () => {
  return (
    <footer style={{backgroundColor: "blue" } }>
      <div style={{display: "flex"} }>
      <img src= {logoclinica} alt='DH-logo' style={{ width:200 }}/>
        <div style={ {display: "flex", justifyContent: "flex-end", justifyItems: "baseline"} }>
          <img src= {icofacebook} alt="" />
          <img src= {icoinsta} alt="" />
          <img src= {icotiktok} alt="" />
          <img src= {icowhatsapp} alt="" />
        </div> 
      </div>
      
      
    </footer>
  )
}

export default Footer
