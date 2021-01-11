import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getAllUsers, getAllUsersFemale, getAllUsersMale } from '../../actions/user.actions';

const Footer = (props) => {
    const [page_num, setPageNum] = useState(1)
    const { api_url, display, dispatch, header_title } = props
    const paginate = (direction) => {
        if(direction === "next"){
            setPageNum(page_num+1)
            if(page_num > 10){
                setPageNum(1)
            }
            let query = header_title.toLowerCase()
            if(query.includes("male")){
                dispatch(getAllUsersMale(page_num))
            }else if(query.includes("female")){
                dispatch(getAllUsersFemale(page_num))
            }else{
                dispatch(getAllUsers(page_num))
            }
        }else{
            setPageNum(page_num-1)
            if(page_num < 1){
                setPageNum(10)
            }
            let query = header_title.toLowerCase()
            if(query.includes("male")){
                dispatch(getAllUsersMale(page_num))
            }else if(query.includes("female")){
                dispatch(getAllUsersFemale(page_num))
            }else{
                dispatch(getAllUsers(page_num))
            }
        }
    }
    //Download the results as CSV
    const downloadResults = async () => {
        axios({url: `${api_url}&format=csv&dl`, method: 'GET', responseType: 'blob'})
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.csv');
                document.body.appendChild(link);
                link.click();
                toast.success("Downloaded Successfully")
            }).catch(err => toast.error("Something Went Wrong, Try Again"))
    }
    return (
<>
<ToastContainer/>
    <div style={display ? {display:"none"}:null} className="footer">
        <button  className="download" onClick={() => downloadResults()}>
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            &nbsp;&nbsp;Download results
        </button>
        <div className="pagination">
            <Link onClick={() => paginate("prev")} to="#">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <Link to="#" onClick={() => paginate("next")}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
        </div>
    </div>
</>
    );
}

const mapStateToProps = state => ({
    api_url: state.users.api_url,
    display: state.users.display,
    header_title: state.users.header_title
})

export default connect(mapStateToProps)(Footer);