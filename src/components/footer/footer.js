import React from "react"
import logo from "../../assets/logoFooter.png"
import "./footer.css"
import instagram from "../../assets/instagram.png"
import linkedIn from "../../assets/linkedIn.png"
const Footer=()=>{
 return( 
    <div className="footer">
        <img className="footer-logo" src={logo} alt="NeoNada"/>
        <p className="info-mobile">E-Mail: neonada.info@gmail.com</p>
        
        <div>
            <div className="social-media-buttons-footer">
                <a href="https://instagram.com/neonada.apps?igshid=2apw7y1d56xe" rel="noreferrer" target="_blank"><img src={instagram} alt="Instagram"></img></a>
                <a href="https://www.linkedin.com/company/neonada/mycompany/" rel="noreferrer" target="_blank"><img src={linkedIn} alt="LinkedIn"></img></a>
            </div>
            <p className="copyright">Copyright © 2020 NeoNada All Rights Reserved.</p>
        </div>
        <div className="go-up-button-wrapper">
            <a className="go-up-button" href="#">Go Back Up</a>
        </div>
    </div>
 )
}
export default Footer