import React from 'react'
import { NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            {/* <li><NavLink to='/signup'> Signup</NavLink> </li> */}
            <li><NavLink to='/signin'> Log In</NavLink></li>
            <li><NavLink to='/update'> Update Employee</NavLink> </li>
        </ul>
    )
}

export default SignedOutLinks