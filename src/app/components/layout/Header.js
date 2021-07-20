import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <div className="top-header">
                <div className="link-wrapper">
                    <Link to="/auth/register">REGISTER</Link>
                    <span>&nbsp;|&nbsp;</span>
                    <Link to="/auth/login">LOG IN</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
