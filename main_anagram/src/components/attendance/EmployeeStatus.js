import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const EmployeeStatus = (props) => {
    const {employee} = props;
    if (employee) {
        return(
        <div className ="container section" >
            <div className = "card z-depth-5" align={"middle"}>
            <img src={employee.image} width={170} height={170}/>
               <div className = "card z-depth-0">
                   <div className = "card-title">ID#{employee.idNum} <br /> {employee.firstName} {employee.lastName} </div>
                   <div className = "card-action grey lighten-4 text-dark" align={"left"}><p>You are currently logged {employee.presence ?
                    <i className='fa fa-circle' aria-hidden='true' style={{color: '#92f5ff', fontSize: '25px'}}></i>
                    : <i className='fa fa-circle' aria-hidden='true' style={{color: '#ff63ca', fontSize: '25px'}}></i> 
                    } </p>
                    <div className = "grey-text"> Task at hand: {employee.goingToOrFro}</div>
                    </div> 
                </div>
            </div>
        </div>
        )
    }
    else{
        return(
        <div className="container center">
            <p> Loading employee ..</p>
        </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const employees = state.firestore.data.employees;
    const employee = employees ? employees[id] : null;
    return {
        employee: employee 
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'employees'}
    ])
)(EmployeeStatus)