import React, { Component } from 'react'
import EmployeeList from '../attendance/EmployeeList'
import {connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
// import {CSVLink} from "react-csv"
import Notifications from './Notifications'
// import moment from 'moment'

class Dashboard extends Component {

    render() {
        // console.log(this.props);
        const {employees, auth, notifications} = this.props;
        // var exportEmployee = notifications ? notifications : [];

        // var customExportEmployee = exportEmployee ? exportEmployee : [];
        // console.log('customExportEmployee ' + JSON.stringify(customExportEmployee));
        // console.log('exportEmployee ' + exportEmployee);

        // iterate thru the JSON
          
        // Object.keys(customExportEmployee.recentScan).forEach(function(e) 
        //   {
        //     // {moment(customExportEmployee.recentScan.toDate().toString()).calendar()}
        //     customExportEmployee.recentScan = new Date ();
        //   })
        
        // for (var k in customExportEmployee.recentScan) {
        //     customExportEmployee.recentScan[k] = 'beef';
        //     customExportEmployee.recentScan[k].toDate()
        // }

        // https://stackoverflow.com/questions/16496090/moment-js-parse-whole-json-array-and-format-multiple-date-instances
        // const formatted = JSON.parse(customExportEmployee).map((rec) => {
        //     // var requiredPattern = "dddd, MMMM Do YYYY, h:mm:ss a";

        //     rec.recentScan = moment(rec.recentScan.toDate().toString()).calendar();
        //     return rec;
        // });
        // JSON.stringify({
        //     // customExportEmployee.recentScan : moment()
        // });
        // console.log('after the for customExportEmployee ' + JSON.stringify(customExportEmployee));

        const headers = [
            { label: "First Name", key: "firstName" },
            { label: "Last Name", key: "lastName" },
            { label: "Scanned at ", key: "recentScan" },
            { label: "Time IN/OUT", key: "scanStatus" }
          ];
        
        // auth for test@gmail.com
        if(auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') return <Redirect to= '/signin' />
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className= "col s12 m6">
                        <EmployeeList employees = {employees} />
                    </div>
                    {/* <div className ="right">
                        <CSVLink
                        data={exportEmployee}
                        headers={headers}
                        filename={"my-file.csv"}
                        className="btn grey"
                        target="_blank">
                        Download me
                        </CSVLink>
                    </div> */}
                    <div className ="col s12 m5 offset-m1">
                        <Notifications notifications = {notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        employees: state.firestore.ordered.employees,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'employees', orderBy:['firstName', 'asc']},
        {collection: 'notifications', limit: 20, orderBy: ['recentScan', 'desc']}
    ])
)(Dashboard)