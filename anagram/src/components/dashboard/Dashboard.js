import React, { Component } from 'react'
import EmployeeList from '../attendance/EmployeeList'
import {connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import {CSVLink} from "react-csv";

class Dashboard extends Component {
    
    render() {
        console.log(this.props);
        const {employees, auth} = this.props;
        var exportEmployee = employees !== null ? [] : employees;
        // dummy data
        const csvData = [
            ["firstname", "lastname", "email"],
            ["Ahmed", "Tomi", "ah@smthing.co.com"],
            ["Raed", "Labes", "rl@smthing.co.com"],
            ["Yezzi", "Min l3b", "ymin@cocococo.com"]
          ];
        //
        if(!auth.uid) return <Redirect to= '/signin' />
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className= "col s12 m6">
                        <EmployeeList employees = {employees} />
                    </div>
                    <div className ="right">
                        <CSVLink
                        data={exportEmployee}
                        filename={"my-file.csv"}
                        className="btn btn-primary"
                        target="_blank">
                        Download me
                        </CSVLink>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        employees: state.firestore.ordered.employees,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'employees'}
    ])
)(Dashboard)