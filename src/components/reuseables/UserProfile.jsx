import React from 'react'
import { Link } from 'react-router-dom';
import UserImg from '../../assets/img/profile.jpg'



const UserProfile = () => {
    return (
    <div className="view-user">
        <Link to="#"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;RESULTS</Link>
        <div className="view-user-container">
            <div className="view-user-img">
                <img src={UserImg} alt=""/>
            </div>
            <div className="view-user-info">
                <h1>Mrs Shalom Chioma</h1>&nbsp;&nbsp;<span>25</span>
                <p>9278 new road, kilcoole, waterford</p>
                <p className="address">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    &nbsp;brad.gibson@example.com
                </p>
                <p className="address test">
                    Joined: 2002-05-21
                </p>
                <p className="tel"><i className="fa fa-volume-control-phone" aria-hidden="true"></i>&nbsp; 011-926-7516</p>
                <p className="tel"><i className="fa fa-mobile" aria-hidden="true"></i>&nbsp; 011-926-7516</p>
            </div>
        </div>
    </div>
    );
}

export default UserProfile;