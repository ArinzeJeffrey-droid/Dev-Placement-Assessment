import React from 'react'
import { Link } from 'react-router-dom';
import { connect, useDispatch } from "react-redux"
import { HIDE_DISPLAY } from '../../constants/action.types';
import { css } from "../../utils/miscellaneous"



const UserProfile = (props) => {
    const dispatch = useDispatch()
    const { display, user_profile } = props
    return (
    <div style={display ? { opacity: 1, height: "400px"} : css} className="view-user">
        <Link onClick={() => dispatch({ type: HIDE_DISPLAY })} to="#"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;RESULTS</Link>
        <div className="view-user-container">
            <div className="view-user-img">
                <img src={user_profile.picture ? user_profile.picture.large : ""} alt=""/>
            </div>
            <div className="view-user-info">
                <h1>{user_profile.name ? `${user_profile.name.first} ${user_profile.name.title} ${user_profile.name.last}` : ""}</h1>&nbsp;&nbsp;<span>25</span>
                <p>{user_profile.location ? `${user_profile.location.street.number} ${user_profile.location.street.name} ${user_profile.location.city} ${user_profile.location.state}` : ""}</p>
                <p className="address">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    &nbsp;{user_profile.email ? user_profile.email : ""}
                </p>
                <p className="address test">
                    Joined: {user_profile.registered ? new Date(user_profile.registered.date).toDateString() : ""}
                </p>
                <p className="tel"><i className="fa fa-volume-control-phone" aria-hidden="true"></i>&nbsp; {user_profile.phone ? user_profile.phone : ""}</p>
                <p className="tel"><i className="fa fa-mobile" aria-hidden="true"></i>&nbsp; {user_profile.cell ? user_profile.cell : ""}</p>
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = state => ({
    display: state.users.display,
    user_profile: state.users.user_profile
})

export default connect(mapStateToProps)(UserProfile);