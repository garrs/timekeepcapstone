import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateEmployee} from '../../store/actions/updateEmployee'
import {Redirect} from 'react-router-dom'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Switch from "react-switch";
import axios from 'axios';

class UpdateEmployee extends Component {
    constructor() {
        super();
        this.state = { 
            checked: false, 
            goingToOrFro: '',
            hashF: ""
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleRadioToggle = this.handleRadioToggle.bind(this);
      }
    
    componentDidMount(){
        // this.fetchData();
        axios
        .get('https://script.googleusercontent.com/macros/echo?user_content_key=ijZrEFnvRCB48p7Y5C6KiHajyuGVRCqiaJKuIGFxnkzs36vlXFTg9otMd9d2Me0GmsoMiBJRza9ybtYWy2feEbmELXOa_Qshm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHQXXBa8R7nD341kLg82uvLPtJYaWU9XCMl8pD2w0EIR49ja5rQBN8X8Bo6hbvv2ICD8xhZ4Q9WE&lib=MB_haIsFwkqnx5Kzk636T6Se5vJX7QEql')
        .then(({ data })=> {
            this.setState({ 
                hashF: data.user[0].name
          });
        })
        .catch((err)=> {})
    }

    handleRadioToggle (value){
        console.log(value);
        
        this.setState({ goingToOrFro: value});
        //going: e.target.value
        // var val = value ? value : [];
        // this.state.going = val;
        //this.setState({ going: val});
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
        setTimeout( function(){
            document.location.reload(true)
            // this.setState({ goingToOrFro: 'None'})
            ;}, 5000 );
    }

    render() {
        const {updateFail, updateStatus, auth} = this.props;
        console.log("hashF value: " + this.state.hashF);
        console.log(this.state.goingToOrFro);
        // auth for user@gmail.com
        if(auth.uid !== 'YACs5Ol1lzcoSmZd1PToi4vdg6q2' && auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') 
        return <Redirect to= '/signin' />

        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className= "white">
                    <h5 className = "grey-text text-darken-3">Employee Attendance Tracker</h5>
                    {/* <div className = "input-field">
                        <label htmlFor ="firstName">First Name </label>
                        <input type="text" id = "firstName" onChange={this.handleChange} />
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="lastName">Last Name </label>
                        <input type="text" id = "lastName" onChange={this.handleChange} />
                    </div> */}
                    {/* <div className = "input-field">
                    <input type="hidden" id="hashF" value={this.state.hashF} />
                    </div> */}
                    <div className = "input-field">
                        <label htmlFor ="idNum">ID Number </label>
                        <input type="text" id = "idNum" onChange={this.handleChange} required />
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="pass">Password </label>
                        <input type="password" id = "pass" onChange={this.handleChange} required />
                    </div>
                    <div className = "input-field">
                        <input type="hidden" id = "hashF" value={this.state.hashF}/>
                    </div>
                    {/* <div className = "input-field">
                        <label htmlFor ="hashF">Fingerprint Information </label>
                        <input type="password" id = "hashF" onChange={this.handleChange} required/>
                    </div> */}
                    {/* <div className = "input-field center"> */}
                    <div className = "input-field">
                        <h5 className = "grey-text text-darken-3">Will you scan &nbsp; 
                        <Switch 
                        onChange={this.handleToggle} 
                        checked={this.state.checked}
                        offColor="#883000"
                        onColor="#0ff"
                        offHandleColor="#D7722C"
                        onHandleColor="#B2FFFF"
                        uncheckedIcon={
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 12,
                                color: "white",
                                paddingRight: 2
                                }}>
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
                            }}>
                            IN
                            </div>
                        } 
                        /> &nbsp; for ... </h5>
                        <div className = "input-field">
                        <RadioGroup onChange={this.handleRadioToggle} horizontal>
                        <RadioButton value="First arrival" rootColor="#A9A9A9" pointColor="#0ff"disabled={!this.state.checked}>
                        First arrival
                        </RadioButton>
                        <RadioButton value="Lunch break" rootColor="#A9A9A9" pointColor="#883000" disabled={this.state.checked}>
                        Lunch break
                        </RadioButton>
                        <RadioButton value="Back from lunch" rootColor="#A9A9A9" pointColor="#0ff" disabled={!this.state.checked}>
                        Back from lunch
                        </RadioButton>
                        <RadioButton value="Shift end" rootColor="#A9A9A9" pointColor="#883000" disabled={this.state.checked}>
                        Shift end
                        </RadioButton>
                        {/* <RadioButton value="Go to infirmary" rootColor="#A9A9A9">
                        Go to infirmary
                        </RadioButton>
                        <RadioButton value="Back from infirmary" rootColor="#A9A9A9">
                        Back from infirmary
                        </RadioButton> */}
                        <RadioButton value="Others" rootColor="#A9A9A9" pointColor={this.state.checked ? "#0ff" : "#883000"}>
                        Others
                        </RadioButton>
                        </RadioGroup>
                        </div>
                    </div>
                    <div className = "center">
                        <p> <i> (Important Note: Please refresh this page by clicking Fudafari AFTER doing your fingerprint scan!) </i> </p>
                        <p> <i> (Sidenote: Before submitting, IN/OUT switch and reason color should match!) </i></p>
                    </div>
                    <div className= "input-field">
                        <button className="buttonSubmit">Submit</button>
                        <div className="red-text center"> 
                        {updateStatus ? <p>{updateStatus}</p> : <p>{updateFail}</p>}
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
        updateStatus: state.employee.updateStatus,
        updateFail: state.employee.updateFail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createEmployee: (employee) => dispatch(createEmployee(employee))
        updateEmployee: (employee) => dispatch(updateEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee)