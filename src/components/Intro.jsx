import React from 'react';
import { connect } from 'react-redux'
import { getAllUsers, getAllUsersFemale, getAllUsersMale } from '../actions/user.actions';


const Intro = (props) => {
    const { getAllUsersFemale, getAllUsersMale, getAllUsers, search, searchField } = props
    return (
    <div className="box1">
        <div className="center-box">
            <div className="text-header">
                <h1>Hello,</h1>
                <h3>&nbsp;Emerald</h3>
                <p>Welcome to your dashboard, kindly sort through the user base</p>
            </div>
            <div className="search-bar-box">
                <input name="search" onChange={e => search(e)} value={searchField} className="search-bar" type="text" placeholder="&nbsp;&nbsp;&nbsp;&#x1F50D; Find a user"/>
            </div>
            <div className="action-box">
                <p>Show Users</p>
                <div className="action-wrapper">
                    <div className="ac-wrap">
                        <div className="actions a" onClick={() => getAllUsers()}>
                            <i className="fa fa-users fa-lg" aria-hidden="true"></i>
                        </div>
                        <p>All users</p>
                    </div>
                    <div className="ac-wrap">
                        <div className="actions b" onClick={() => getAllUsersMale()}>
                            <i className="fa fa-male fa-lg" aria-hidden="true"></i>
                        </div>
                        <p>Male users</p>
                    </div>
                    <div className="ac-wrap">
                        <div className="actions c" onClick={() => getAllUsersFemale()}>
                            <i className="fa fa-female fa-lg" aria-hidden="true"></i>
                        </div>
                        <p>Female users</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}



const mapDispatchToProps = (dispatch) => ({
    getAllUsersFemale: () => dispatch(getAllUsersFemale()),
    getAllUsersMale: () => dispatch(getAllUsersMale()),
    getAllUsers: () => dispatch(getAllUsers())
})

export default connect(null, mapDispatchToProps)(Intro)