import React from 'react';


const Intro = () => {
    return (
    <div className="box1">
        <div className="center-box">
            <div className="text-header">
                <h1>Hello,</h1>
                <h3>&nbsp;Emerald</h3>
                <p>Welcome to your dashboard, kindly sort through the user base</p>
            </div>
            <div className="search-bar-box">
                <input className="search-bar" type="text" placeholder="&nbsp;&nbsp;&nbsp;&#x1F50D; Find a user"/>
            </div>
            <div className="action-box">
                <p>Show Users</p>
                <div className="action-wrapper">
                    <div className="ac-wrap">
                        <div className="actions a">
                            <i className="fa fa-users fa-lg" aria-hidden="true"></i>
                        </div>
                        <p>All users</p>
                    </div>
                    <div className="ac-wrap">
                        <div className="actions b">
                            <i className="fa fa-male fa-lg" aria-hidden="true"></i>
                        </div>
                        <p>Male users</p>
                    </div>
                    <div className="ac-wrap">
                        <div className="actions c">
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

export default Intro