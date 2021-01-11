import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { SHOW_DISPLAY } from '../../constants/action.types'

const UserCard = (props) => {
    const dispatch = useDispatch()
    return (
    <div className="user-card">
        <div className="user-wrap">
            <div className="user-img">
                <img src={props.details.picture.medium} alt=""/>
            </div>
            <div className="user-details">
                <h3>{`${props.details.name.first} ${props.details.name.last}`}</h3>
                <p>{`${props.details.location.street.number} ${props.details.location.street.name} ${props.details.location.city} ${props.details.location.state}`}</p>
                <div className="email">
                    <p>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        &nbsp; {props.details.email} &nbsp;
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        &nbsp; {props.details.phone}
                    </p>
                    <Link onClick={() => dispatch({ type: SHOW_DISPLAY, payload: props.details })} to="#">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserCard;