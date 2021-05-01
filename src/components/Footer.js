import '../css/App.css'
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';


function Footer(){
    return (
        <>
        <div className="footer-fix">
        <footer>
            
            <div className="footer-img">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <br />Copyrights@2021
            </div>
        </footer>
        <div className="footer-bottom">
            <b>PETS ARE MY FAVORITE PEOPLE ❤</b>
        </div>
        </div>
        </>
    );
}

export default Footer;