import React from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/delete'> Dismiss Employee</NavLink> </li>
            <li><NavLink to='/create'> Register Employee</NavLink> </li>
            <li><NavLink to='/view'> View History</NavLink> </li>
            <li><NavLink to='/summary'> View Summary</NavLink> </li>
            <li><a onClick={props.signOut}> Log Out</a> </li>
            {/* <li><NavLink to='/' className='btn btn-floating pink lighten-1'> JTG </NavLink> </li> */}
            <li><NavLink to='/bonus' className='btn btn-floating pink lighten-1'> JTG </NavLink> </li>
        </ul>
            

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)