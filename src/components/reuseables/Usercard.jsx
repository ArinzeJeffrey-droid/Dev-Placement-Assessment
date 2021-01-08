import React from 'react'
import UserImg from "../../assets/img/profile.jpg"
import { Link } from "react-router-dom"

const UserCard = () => {
    return (
    <div className="user-card">
        <div className="user-wrap">
            <div className="user-img">
                <img src={UserImg} alt=""/>
            </div>
            <div className="user-details">
                <h3>Shalom Chioma</h3>
                <p>9278 new road, kilcoole, waterford</p>
                <div className="email">
                    <p>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        &nbsp; brad.gibson@example.com &nbsp;
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        &nbsp; 011-926-7516
                    </p>
                    <Link to="#">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserCard;