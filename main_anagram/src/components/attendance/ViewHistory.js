import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import ReactTable from "react-table"
import "react-table/react-table.css"
import '../../App.css';
import Moment from 'moment'
// import moment from 'moment'
import ExportToExcel from "./ExportToExcel"
// import matchSorter from 'match-sorter'

class ViewHistory extends Component {

    // componentDidMount(){
    //     const url = "https://jsonplaceholder.typicode.com/posts";
    //     fetch(url, {
    //         method: "GET"
    //     }).then(response => response.json()).then(posts => {
    //         this.setState({ posts:posts})
    //     })
    // }

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    render() {
        //const {employees, auth, employeeCSV} = this.props;
        const {auth, notifications} = this.props;
        var notificationsCheck = notifications ? notifications : [];
        // console.log(this.calculateSummary(notificationsCheck));


        if(auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') return <Redirect to= '/signin' />
        // if(!auth.uid) return <Redirect to= '/signin' />

        //console.log(notificationsCheck)
        const columns =[
            {
                Header: "ID Number",
                accessor: "idNum"
            },
            // {
            //     Header: "Last Name",
            //     accessor: "lastName"
            // },
            // {
            //     Header: "First Name",
            //     accessor: "firstName"
            // },
            {
                Header: "Full Name",
                accessor: "fullName"
            },
            {
                // got lazy changing the id name to 'scanTime' not 'recent scan' as used below for scanStatus
                id: "recentScan",
                Header: "Scan Date",
                accessor: notifications => { 
                    return Moment(notifications.recentScan.toDate())
                    .local()
                    .format("ll")
                    }
            },
            {
                // got lazy changing the id name to 'scanTime' not 'recent scan' as used below for scanStatus
                id: "recentScanDouble",
                Header: "Scan Time",
                accessor: notifications => { 
                    return Moment(notifications.recentScan.toDate())
                    .local()
                    .format("LT")
                    }
                
            },
            // {
            //     id: "timeBefore",
            //     Header: "Past Scan",
            //     accessor: notifications => { 
            //         if (notifications.timeBefore !== null){
            //         return Moment(notifications.timeBefore.toDate())
            //         .local()
            //         .format("lll")
            //         }
            //         else {
            //             return null
            //         } 
            //     }
            // },
            {
                Header: "Scan Reason",
                accessor: "goingToOrFro"
                
            }
        ]
        return (
           <div className ="center">
           <ReactTable 
           className="-striped reactfonts"
           columns={columns}
           data={notificationsCheck}
           sortable
           filterable
           defaultPageSize={notificationsCheck.length}
           >
               {(state, filtredData, instance) => {
               this.reactTable=state.pageRows.map(post => { return post});
               return (
                    <div>
                        {filtredData()}
                        <ExportToExcel posts= {this.reactTable} />
                    </div>
               )
            }}
            </ReactTable>
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
            {collection: 'employees'},
            {collection: 'notifications', orderBy: ['recentScan', 'desc']}
        ])
    )(ViewHistory)