import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEmployee} from '../../store/actions/createEmployee'
import {Redirect} from 'react-router-dom'

class CreateEmployee extends Component {

    // https://stackoverflow.com/questions/39844472/how-to-submit-a-form-as-soon-as-all-inputs-are-filled-in-react 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value   
        } 
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createEmployee(this.state)
        this.props.history.push('/');
    }

    render() {
        const {auth, createSuccess} = this.props;
        // if(!auth.uid) return <Redirect to= '/signin' />
        if(auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') return <Redirect to= '/signin' />
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className= "white">
                    <h5 className = "grey-text text-darken-3">Register Employee</h5>
                    <div className = "input-field">
                        <label htmlFor ="firstName">First Name </label>
                        <input type="text" id = "firstName" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="lastName">Last Name </label>
                        <input type="text" id = "lastName" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="idNum">Your ID Number </label>
                        <input type="text" id = "idNum" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="pass">Your Password </label>
                        <input type="password" id = "pass" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="hashF">Your Fingerprint Info </label>
                        <input type="password" id = "hashF" onChange={this.handleChange} required/>
                    </div>
                    <div className= "input-field">
                        <button className="buttonSubmit">Submit</button>
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