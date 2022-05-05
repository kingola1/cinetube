import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        {/* <img  alt="" /> */}
                        <Link to="/">CineTube</Link>
                    </div><br />
                </div>
                    <p>coding_way</p>
            </div>
        </div>
    );
}

export default Footer;