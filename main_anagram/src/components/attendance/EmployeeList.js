import React from 'react'
import Employee from './Employee'
import {Link} from 'react-router-dom'

const EmployeeList = ({employees}) => {
    return (
        <div className = 'employee-list section'>
            { employees && employees.map(employee => {
                return (
                //  <Link to={'/statuscheck/' + employee.id}>   
                    <Employee employee={employee} key={employee.id} />
                // </Link>
                )
            })}
        </div>
    )
}

export default EmployeeList;