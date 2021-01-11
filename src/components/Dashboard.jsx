import React, { useEffect, useState } from 'react'
import Footer from './reuseables/Footer';
import UserCard from './reuseables/Usercard';
import UserProfile from './reuseables/UserProfile';
import { connect } from "react-redux"
import { getAllUsers, retryCurrentRequest } from '../actions/user.actions';
import Loader from './reuseables/loader/Loader';
import { CLEAR_ERRORS } from '../constants/action.types';
import Button404 from './reuseables/404-button/404Button';
import { css } from "../utils/miscellaneous"
import Intro from './Intro';



const Dashboard = (props) => {
    const { dispatch, users, error, loading, api_url, header_title, display, no_results } = props
    const [search, setSearch] = useState("")
    const [introSearchField, setIntroSearchField] = useState("")
    useEffect(() => {
        dispatch(getAllUsers())
    },[])
    const recallAPI = () => {
        dispatch(retryCurrentRequest(api_url))
        dispatch({ type: CLEAR_ERRORS })
    };
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleIntroSearch = (e) => {
        setIntroSearchField(e.target.value)
    }
    const handleSearch = () => {
        return users.filter(user =>
            user ? user.name.first
                .toLowerCase()
                .includes(search.toLowerCase() || introSearchField.toLowerCase()) 
                || 
            user.name.last
                .toLowerCase()
                .includes(search.toLowerCase() || introSearchField.toLowerCase()) : alert("No results")
        );
    };
    return (
<div className="container">
    <Intro search={handleIntroSearch} searchField={introSearchField}/>
    <div className="box2">
        <div className="box2-container">
            <h1>{header_title}</h1>
            <p>Filter by</p>
            <div className="filter-container">
                <div className="filter-find find-country">
                    <input type="text" onChange={e => handleChange(e)} name="search" value={search} placeholder="&nbsp;&nbsp;&nbsp;&#x1F50D;Find in list" className="filter"/>
                </div>
                <div className="filter-find">
                    <select disabled name="" className="country filter" id="">
                        <option disabled defaultValue>&nbsp;&nbsp;&nbsp;Country</option>
                        <option value="United Kingdom">UK</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>
                <div className="filter-find">
                    {/* placeholder for toggle */}
                </div>
            </div>
            <div className="users-container">
            { no_results ? (<h1>No result</h1>) : error ? (<Button404 eventHandler={recallAPI}/>) : loading ? (<Loader/>) : (
                    <>
                    <div style={display ? css : { transition: "opacity 1s ease-out", opacity: 1}} className="inner">
                        {handleSearch().map((user,index) => (
                            <UserCard key={index} details={user}/>
                        ))}
                    </div>
                    <UserProfile/>
                    </>
                )
            }
            </div>
            <Footer/>
        </div>
    </div>
</div>
    );
}

const mapStateToProps = state => ({
    users: state.users.users,
    error: state.users.error,
    loading: state.users.loading,
    api_url: state.users.api_url,
    header_title: state.users.header_title,
    display: state.users.display,
    no_results: state.users.no_results
})

export default connect(mapStateToProps)(Dashboard);