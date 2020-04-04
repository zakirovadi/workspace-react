import React from 'react';
import './Footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGooglePlusG, faTumblr, faPinterestP, faLinkedinIn } from  '@fortawesome/free-brands-svg-icons';
import logo from '../../logo/logo.png';

function Footer(props) {
    return(
        <>
            <div className="subscribe">
                <span>Subscribe and get every week new inspirations for your workspace</span>
                <input className="email" type="email" placeholder="Your email" />
            </div>

            <footer>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <ul className="footer-menu">
                    <li>LEARN MORE</li>
                    <li>ABOUT US</li>
                    <li>SUPPORT</li>
                </ul>

                <div className="footer-contacts">
                    <ul>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faGooglePlusG} /></li>
                        <li><FontAwesomeIcon icon={faTumblr} /></li>
                        <li><FontAwesomeIcon icon={faPinterestP} /></li>
                        <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                    </ul>

                    <span>Workspace @2019. Created by Diana</span>
                </div>
            </footer>
        </>
    );
}

export default Footer;