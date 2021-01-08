import React from 'react'
import Footer from './reuseables/Footer';
import UserCard from './reuseables/Usercard';
import UserProfile from './reuseables/UserProfile';


const Dashboard = () => {
    return (
    <div className="box2">
        <div className="box2-container">
            <h1>All Users</h1>
            <p>Filter by</p>
            <div className="filter-container">
                <div className="filter-find find-country">
                    <input type="text" placeholder="&nbsp;&nbsp;&nbsp;&#x1F50D;Find in list" className="filter"/>
                </div>
                <div className="filter-find">
                    <select name="" className="country filter" id="">
                        <option disabled defaultValue>&nbsp;&nbsp;&nbsp;Country</option>
                        <option>USA</option>
                        <option>Africa</option>
                    </select>
                </div>
                <div className="filter-find">
                    {/* placeholder for toggle */}
                </div>
            </div>
            <div className="users-container">
                <div className="inner">
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
                <UserProfile/>
            </div>
            <Footer/>
        </div>
    </div>
    );
}

export default Dashboard;