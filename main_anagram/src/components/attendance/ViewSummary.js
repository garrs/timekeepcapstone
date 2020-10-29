import React, { Component }  from "react";
import {connect} from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import moment from 'moment'
import {Redirect} from 'react-router-dom'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'

// https://stackoverflow.com/questions/39939662/es6-import-from-underscore
import _ from 'underscore'
import ExportToExcelSummary from "./ExportToExcelSummary"
import Select from "react-select";
import '../../App.css';

// Import React Table
import ReactTable from "react-table";

class ViewSummary extends Component {
  constructor() {
    super();
    this.state = {
      alerter:true,
      filtered:[],
      select2: [],
      select1: []
    };
  }

  onFilteredChangeCustom = (value, accessor) => {
    let filtered = this.state.filtered;
    let insertNewFilter = 1;

    if (filtered.length) {
      filtered.forEach((filter, i) => {
        if (filter["id"] === accessor) {
          if (value === "" || !value.length) filtered.splice(i, 1);
          else filter["value"] = value;

          insertNewFilter = 0;
        }
      });
    }

    if (insertNewFilter) {
      filtered.push({ id: accessor, value: value });
    }

    this.setState({ filtered: filtered });
  };

  

  calculateSummary(scansList) {
    let employeeMap = {}
    for (let i = 0; i< scansList.length; i++) {
        let x = scansList[i];
        if (employeeMap[x.fullName ] ) {
            employeeMap[x.fullName].push(x)
        }
        else {
            employeeMap[x.fullName] = []
            employeeMap[x.fullName].push(x)
        }
    }
    console.log("calculating")
    var result =  [];
    let timeDiff = ""
    let timeDate = ""

    for (let name in employeeMap) {
        var value = employeeMap[name]

        
        for (let y in value) {
            
            timeDiff = moment(value[y].recentScan.toDate()).local().format("LT")
            timeDate = moment(value[y].recentScan.toDate()).local().format("ll")
            result.push({"idNum": (value[y].idNum),
            "fullName": name,
            "reason": value[y].goingToOrFro,
            "date": timeDate,
            "time": timeDiff,
            "shift": (value[y].goingToOrFro === "Start shift") ? timeDiff : "",
            "break": (value[y].goingToOrFro === "Lunch break") ? timeDiff : "",
            "return": (value[y].goingToOrFro === "Back from lunch") ? timeDiff : "",
            "end": (value[y].goingToOrFro === "Shift end") ? timeDiff : ""
            })
        }
    }

    // reprocess processed array
    var newArray = result.filter(e => {
         if(e.shift === "" &&
            e.break === "" &&
            e.return === "" &&
            e.end === "")
            { 
                return false
            }
        return true
 
    }); 

    for(let z in newArray)  {
        var value2 = newArray[z]
        for (let x in value2) {

            if (value2[x] ==="")
                delete value2[x]
            
        }
    }
    
    console.log(newArray)
    return newArray
}

  render() {
    const dates = ' {"dates": [' + 
    '{ "dateShort": "Jun"},' +
    '{ "dateShort": "Jul"},' +
    '{ "dateShort": "Aug"},' +
    '{ "dateShort": "Sep"},' +
    '{ "dateShort": "Oct"},' +
    '{ "dateShort": "Nov"},' +
    '{ "dateShort": "Dec"},' +
    '{ "dateShort": "Jan"},' +
    '{ "dateShort": "Feb"},' +
    '{ "dateShort": "Mar"},' +
    '{ "dateShort": "Apr"},' +
    '{ "dateShort": "May"} ]}'
    var parsedDates = JSON.parse(dates);
    const { notifications, auth } = this.props;
    var filteredNotifications = []
    var calculatedNotifications = []
    var notificationsCheck = notifications ? notifications : [];
    // remove duplicates
    filteredNotifications = _.uniq(notificationsCheck, function(x){
      return x.fullName;
    });
    calculatedNotifications = this.calculateSummary(notificationsCheck)
    if(auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') return <Redirect to= '/signin' />
    return (
      <div>
      <SweetAlert
                        show={this.state.alerter}
                        title="Warning"
                        text={"Be sure to filter out one employee and a date from the two selection input-fields before exporting an Excel file."}
                        onConfirm={() => this.setState({ alerter: false })}
      />
        <Select
          style={{ width: "50%", marginBottom: "20px" }}
          placeholder={"Select Employee .."}
          onChange={(...entry) => {
            this.setState({ select1: entry });
            this.onFilteredChangeCustom(
              entry.map((o) => {
                return o.value;
              }),
              "fullName"
            );
          }}
          value={this.state.select1}
          options={filteredNotifications.map((o, i) => {
            return { id: i, value: o.fullName, label: o.fullName };
          })}
        />
        <Select
          style={{ width: "50%", marginBottom: "20px" }}
          placeholder={"Select Date .."}
          onChange={(...entry) => {
            this.setState({ select2: entry });
            this.onFilteredChangeCustom(
              entry.map((o) => {
                return o.value;
              }),
              "date"
            );
          }}
          value={this.state.select2}
          options={parsedDates.dates.map((o, i) => {
            return { id: i, value: o.dateShort, label: o.dateShort };
          })}
        />
        <ReactTable
          data={calculatedNotifications}
          filterable
          filtered={this.state.filtered}
          onFilteredChange={(filtered, column, value) => {
            this.onFilteredChangeCustom(value, column.id || column.accessor);
          }}
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id;
            if (typeof filter.value === "object") {
              return row[id] !== undefined
                ? filter.value.indexOf(row[id]) > -1
                : true;
            } 
            else {
              return row[id] !== undefined
                ? String(row[id]).indexOf(filter.value) > -1
                : true;
            }
          }}
          columns={[
            {
              Header: "Employee Timekeeping Summary",
              columns: [
                {
                  Header: "ID Number",
                  accessor: "idNum"
                },
                {
                  Header: "Full Name",
                  accessor: "fullName",

                  
                },
                {
                  Header: "Scan Date",
                  accessor: "date",
                  filterMethod: (filter, row) =>
                    row[filter.id].includes(filter.value.slice(0,3))

                },
                {
                  Header: "Scan Time",
                  accessor: "time"
                },
                {
                  Header: "Scan Reason",
                  accessor: "reason"
               }
              ]
            }
          ]}
          defaultPageSize={44}
          className="-striped reactfonts"
        >
          {(state, filtredData, instance) => {
               this.reactTable=state.pageRows.map(post => { return post});
               return (
                    <div>
                        {filtredData()}
                        <ExportToExcelSummary posts= {this.reactTable} />
                    </div>
               )
            }}
        </ReactTable>
        <br />
      </div>
    );
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
        {collection: 'notifications', orderBy: ['recentScan', 'asc']}
    ])
)(ViewSummary)