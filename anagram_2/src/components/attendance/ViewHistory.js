import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import ReactTable from "react-table"
import "react-table/react-table.css"
import '../../App.css';
import Moment from 'moment'
import ExportToExcel from "./ExportToExcel"

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
        if(!auth.uid) return <Redirect to= '/signin' />

        const columns =[
            {
                Header: "Last Name",
                accessor: "lastName"
            },
            {
                Header: "First Name",
                accessor: "firstName"
            },
            {
                id: "recentScan",
                Header: "Recent Scan",
                accessor: notifications => { 
                    return Moment(notifications.recentScan.toDate())
                    .local()
                    .format("lll")
                    }
                
            },
            {
                Header: "Type of Recent Scan",
                accessor: "scanStatus"
                
            }
        ]
        return (
           <div className ="center">
           <ReactTable 
           className="reactfonts"
           columns={columns}
           data={notifications}
           // filterable
           >
               {/* {(state, filtredData, instance) => {
               this.reactTable=state.pageRows.map(post => { return post._original});
               return (
                    <div>
                        {filtredData()}
                        <ExportToExcel posts= {this.reactTable} />
                    </div>
               )
            }} */}
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