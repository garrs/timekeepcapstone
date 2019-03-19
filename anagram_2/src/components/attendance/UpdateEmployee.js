import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateEmployee} from '../../store/actions/updateEmployee'
import Switch from "react-switch";

class UpdateEmployee extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleToggle = this.handleToggle.bind(this);
      }
     
    handleToggle(checked) {
        this.setState({ checked });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value   
        
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateEmployee(this.state)
        // this.props.history.push('/signIn');
    }

    render() {
        const {updateSuccess,updateStatus} = this.props;
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className= "white">
                    <h5 className = "grey-text text-darken-3">Update employee</h5>
                    <div className = "input-field">
                        <label htmlFor ="firstName">First Name </label>
                        <input type="text" id = "firstName" onChange={this.handleChange} />
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="lastName">Last Name </label>
                        <input type="text" id = "lastName" onChange={this.handleChange} />
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="pass">password </label>
                        <input type="password" id = "pass" onChange={this.handleChange} />
                    </div>
                    <div className = "input-field">
                        Will you scan &nbsp; 
                        <Switch 
                        onChange={this.handleToggle} 
                        checked={this.state.checked}
                        offColor="#08f"
                        onColor="#0ff"
                        offHandleColor="#0ff"
                        onHandleColor="#08f"
                        uncheckedIcon={
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 12,
                                color: "orange",
                                paddingRight: 2
                              }}
                            >
                              OUT
                            </div>
                          }
                          checkedIcon={
                            <div
                              style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              fontSize: 12,
                              color: "green",
                              paddingRight: 2
                            }}
                            >
                            IN
                            </div>
                          } 
                        /> &nbsp; ?
                        
                    </div>
                    <div className= "input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                        <div className="red-text center"> 
                        {updateStatus ? <p>{updateStatus}</p> : <p>{updateSuccess}</p>}
                        </div> 
                    </div> 
                </form>
                  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        updateStatus: state.employee.updateStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createEmployee: (employee) => dispatch(createEmployee(employee))
        updateEmployee: (employee) => dispatch(updateEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee)