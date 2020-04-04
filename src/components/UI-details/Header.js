import React from 'react';
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo/logo.png';

function Header(props) {
    return(
        <nav>
            <div className="logo">
                <img src={logo} alt="Workplace" />
            </div>

            <div className="nav">
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="user">
                    <span className="text-underline">Sign in</span>
                </div>
            </div>
        </nav>
    );
}

export default Header;