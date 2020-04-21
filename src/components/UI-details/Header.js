import React, {Component} from 'react';
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faThLarge } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo/logo.png';
import {Link} from 'react-router-dom';

function MenuRender(){
    return(
        <div className="active-menu">
            <FontAwesomeIcon icon={faThLarge} />
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/collections">Collections</Link></li>
                <li><Link to="/inspirations">Inspirations</Link></li>
            </ul>
        </div>
    )
}

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            menuIsOpen: false
        };
    }

    MenuHandler = () => {
        this.setState((state) => {
            return {menuIsOpen: !state.menuIsOpen};
        });
    }


    render() {
        return(
            <nav>
                <Link to='/home' className="logo">
                    <img src={logo} alt="Workplace" />
                </Link>
    
                <div className="nav">
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="menu" onClick={this.MenuHandler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="user" onClick={this.props.signIn}>
                        <span className="text-underline">Sign in</span>
                    </div>
                </div>
    
                {this.state.menuIsOpen ?
                     <MenuRender />
                    :null
                }
            </nav>
        );
    
    }
}

export default Header;