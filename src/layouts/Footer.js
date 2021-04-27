import React from 'react';

import  '../style/Footer.css';

import facebook from '../icons/facebook.png'
import instagram from '../icons/instagram.png'
import twitter from '../icons/twitter.png'

const facebookIcon = <img src={facebook} alt="facebook" />
const instagramIcon = <img src={instagram} alt="instagram" />
const twitterIcon = <img src={twitter} alt="twitter" />

const Footer = () => {
    return ( 
        <footer>
            <div className="social">
                <a href="#">{facebookIcon}</a>
                <a href="#">{instagramIcon}</a>
                <a href="#">{twitterIcon}</a>
            </div>
            <div className="logo-footer">
                <h5>VAIAN</h5>
            </div>
            <p>© 2021 LUXX C.</p>
        </footer>
     );
}
 
export default Footer;