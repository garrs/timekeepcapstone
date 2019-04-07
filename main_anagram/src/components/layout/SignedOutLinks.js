import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import { NavLink} from 'react-router-dom'

const SignedOutLinks = (props) => {
    return (
        <ul className="right">
            {/* <li><NavLink to='/signup'> Signup</NavLink> </li> */}
            {/* <li><NavLink to='/signin'> Wah Hey!</NavLink></li> */}
            <li><a onClick={props.signOut}> Log Out</a> </li>
            {/* <li><NavLink to='/update'> Update Employee</NavLink> </li> */}
        </ul>
    )
}

// export default SignedOutLinks
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedOutLinks)