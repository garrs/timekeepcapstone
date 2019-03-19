import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEmployee} from '../../store/actions/employeeActions'
import {Redirect} from 'react-router-dom'

class CreateEmployee extends Component {

     
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value   
        
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createEmployee(this.state)
        this.props.history.push('/');
    }

    render() {
        const {auth, createSuccess} = this.props;
        if(!auth.uid) return <Redirect to= '/signin' />
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className= "white">
                    <h5 className = "grey-text text-darken-3">Register employee</h5>
                    <div className = "input-field">
                        <label htmlFor ="firstName">First Name </label>
                        <input type="text" id = "firstName" onChange={this.handleChange} />
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="lastName">Last Name </label>
                        <input type="text" id = "lastName" onChange={this.handleChange} />
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="pass">Your Password </label>
                        <input type="password" id = "pass" onChange={this.handleChange} />
                    </div>
                    <div className= "input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                        <div className="red-text center">
                            {/* {createSuccess ? <p>{createSuccess} </p>: null} */}
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
        createSuccess: state.employee.createSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: (employee) => dispatch(createEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee)