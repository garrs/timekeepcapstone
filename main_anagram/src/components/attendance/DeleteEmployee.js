import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteEmployee} from '../../store/actions/deleteEmployee'
import {Redirect} from 'react-router-dom'

class DeleteEmployee extends Component {

    // delete collections at your own risk! https://firebase.google.com/docs/firestore/manage-data/delete-data
    // https://stackoverflow.com/questions/39844472/how-to-submit-a-form-as-soon-as-all-inputs-are-filled-in-react 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value   
        } 
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.deleteEmployee(this.state)
        setTimeout( function(){
            document.location.reload(true)
            ;}, 3000 );
        

    }

    render() {
        const {auth, deleteStatus} = this.props;
        // if(!auth.uid) return <Redirect to= '/signin' />
        if(auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') return <Redirect to= '/signin' />
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className= "white">
                    <h5 className = "grey-text text-darken-3">Dismiss Employee</h5>
                    <div className = "input-field">
                        <label htmlFor ="idNum">Employee's ID Number </label>
                        <input type="text" id = "idNum" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="firstName">First Name </label>
                        <input type="text" id = "firstName" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="lastName">Last Name </label>
                        <input type="text" id = "lastName" onChange={this.handleChange} required/>
                    </div>
                    <div className= "input-field">
                        <button className="buttonSubmit">Submit</button>
                        <div className="red-text center">
                        {deleteStatus}
                        </div> 
                    </div> 
                  
                </form>
                  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        deleteStatus: state.employee.deleteStatus,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       deleteEmployee: (employee) => dispatch(deleteEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteEmployee)