import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux' 
// refresh icon source: https://icons8.com/icons/set/refresh

const Navbar = (props) => {
    const {auth, profile} = props;
    // this means that only "8QMg2SwapHWHP5IlbXZuCrtGjeI2" will have access to SignedInLinks
    const links = (auth.uid == "8QMg2SwapHWHP5IlbXZuCrtGjeI2") ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Fudatrack</Link>
                {/* <div className={"center"}> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="javascript:window.location.reload(true)"> 
                <img src="/img/refresh.png" width={52} height={52} /></a>
                {links}
                {/* </div> */}
            </div>  
        </nav>     
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)