import React from 'react'
import moment from 'moment'

const Employee = ({employee}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <img src={employee.image} width={100} height={100} align={"left"}/>
                    <span className="card-title" align={"middle"}> {employee.firstName} {employee.presence ?
                    <i className='fa fa-circle' aria-hidden='true' style={{color: '#92f5ff', fontSize: '25px'}}></i>
                    : <i className='fa fa-circle' aria-hidden='true' style={{color: '#ff63ca', fontSize: '25px'}}></i> 
                    } </span>
                    <p align={"middle"}>ID#{employee.idNum}</p>
                    <p align={"middle"}>{employee.jobPosition}</p>        
                    <p className="grey-text" align={"middle"}>Date of Registration {moment(employee.updatedAt.toDate().toString()).calendar()} 
                    </p>
                </div>
        </div>
    )
}

export default Employee