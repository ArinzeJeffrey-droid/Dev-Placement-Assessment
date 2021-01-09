import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import json2csv from "json2csv"

const Footer = (props) => {
    const { api_url } = props
    //Download the results as CSV
    const downloadResults = async () => {
        //url method responseType 'blob
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
    <div className="footer">
        <button className="download" onClick={() => downloadResults()}>
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
</>
    );
}

const mapStateToProps = state => ({
    api_url: state.users.api_url
})

export default connect(mapStateToProps)(Footer);