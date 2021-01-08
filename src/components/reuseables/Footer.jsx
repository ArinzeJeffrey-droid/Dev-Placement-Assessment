import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className="footer">
        <button className="download">
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            &nbsp;&nbsp;Download results
        </button>
        <div className="pagination">
            <Link to="#">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <Link to="#">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
        </div>
    </div>
    );
}

export default Footer;