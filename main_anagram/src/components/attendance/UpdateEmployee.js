import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateEmployee} from '../../store/actions/updateEmployee'
import {showEmployee} from '../../store/actions/showEmployee'
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
            hashF: "",
            employeeInfo: ""
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

    handleTest= (e) => {
        this.setState({
            employeeInfo: this.props.showEmployee(this.state)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateEmployee(this.state)
        // setTimeout( function(){
        //     document.location.reload(true)
        //     // this.setState({ goingToOrFro: 'None'})
        //     ;}, 20000 );
        // put a delayed close window here
    }

    render() {
        // const employeeStat = this.props.showEmployee(this.state)
        const {updateFail, updateStatus, employeeStatus, auth} = this.props;
        const hashFTemp = this.state.hashF
        var hashFTempSub =''
        if (hashFTemp.length === 65)
         {hashFTempSub = '000' + hashFTemp.substring(0,1)}
        else if (hashFTemp.length === 66)
         {hashFTempSub = '00' + hashFTemp.substring(0,2)}
        else if (hashFTemp.length === 67)
         {hashFTempSub = '0' + hashFTemp.substring(0,3)}
        else if (hashFTemp.length === 68)
         {hashFTempSub = hashFTemp.substring(0,4)}
        // console.log("hashF value: " + this.state.hashF);
        // console.log(this.state.goingToOrFro);
        // auth for user@gmail.com
        if(auth.uid !== 'YACs5Ol1lzcoSmZd1PToi4vdg6q2' && auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') 
        return <Redirect to= '/signin' />
        console.log("first : " + this.state.firstName);

        return (
            <div className = "container">
                <div>
                        <button style = {{backgroundColor:'#AEB6BF', color:'#800080'}} onClick={this.handleTest}> More info .. </button>  <h7 className = "grey-text text-darken-3"> {employeeStatus} </h7>
                </div>
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
                    {/* <div className = "input-field">
                        <label htmlFor ="idNum">ID number </label>
                        <input type="text" id = "idNum" onChange={this.handleChange} required />
                    </div> */}
                    <h6 className = "grey-text text-darken-3">ID of the current fingerprint read by the scanner: {hashFTempSub}</h6>
                    {/* <div className = "input-field">
                        <label htmlFor ="idNum">Please write your ID number </label>
                        <input type="text" id = "idNum" onChange={this.handleChange} required />
                    </div> */}
                    {/* <div className = "input-field">
                        <input type="hidden" id = "idNum" value={hashFTempSub} readonly/>
                    </div> */}
                    <div className = "input-field">
                        <input type="hidden" id = "hashF" value={this.state.hashF} readonly/>
                    </div>
                     {/* <div className = "input-field">
                        <label htmlFor ="pass">Password</label>
                        <input type="password" id = "pass" onChange={this.handleChange} required />
                    </div> */}
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
                        onColor="#38648c"
                        offHandleColor="#D7722C"
                        onHandleColor="#609cd1"
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
                              color: "white",
                              paddingRight: 2
                            }}>
                            IN
                            </div>
                        } 
                        /> &nbsp; for ... </h5>
                        <div className = "input-field">
                        <RadioGroup onChange={this.handleRadioToggle} horizontal required>
                        <RadioButton value="Start shift" rootColor="#A9A9A9" pointColor="#38648c"disabled={!this.state.checked}>
                        Start shift
                        </RadioButton>
                        <RadioButton value="Lunch break" rootColor="#A9A9A9" pointColor="#883000" disabled={this.state.checked}>
                        Lunch break
                        </RadioButton>
                        <RadioButton value="Back from lunch" rootColor="#A9A9A9" pointColor="#38648c" disabled={!this.state.checked}>
                        Back from lunch
                        </RadioButton>
                        <RadioButton value="Shift end" rootColor="#A9A9A9" pointColor="#883000" disabled={this.state.checked}>
                        Shift end
                        </RadioButton>
                        <RadioButton value="Returning from the errand" rootColor="#A9A9A9" pointColor="#38648c" disabled={!this.state.checked}>
                        Returning from the errand
                        </RadioButton>
                        <RadioButton value="Running an errand" rootColor="#A9A9A9" pointColor="#883000" disabled={this.state.checked}>
                        Running an errand
                        </RadioButton>
                        <RadioButton value="Returning from infirmary" rootColor="#A9A9A9" pointColor="#38648c" disabled={!this.state.checked}>
                        Returning from infirmary
                        </RadioButton>
                        <RadioButton value="Medical attention" rootColor="#A9A9A9" pointColor="#883000" disabled={this.state.checked}>
                        Medical attention
                        </RadioButton>
                        <RadioButton value="Other reasons" rootColor="#A9A9A9" pointColor={this.state.checked ? "#38648c" : "#883000"}>
                        Other reasons
                        </RadioButton>
                        </RadioGroup>
                        </div>
                    </div>
                    <div className = "center">
                        <p> <i> (Important Note: Match the ID of the current fingerprint read to yours. If it's not updated to your ID, please press the <img src="/img/refresh.png" width={20} height={20} /> button!) </i> </p>
                        <p> <i> As a courtesy to the next user, please close this window after you finish your business. </i> </p>
                    </div>
                    <div className= "input-field">
                        <button className="buttonSubmit">Submit</button>
                        <div className="red-text center"> 
                        
                        {updateStatus ? <p>{updateStatus}</p> : <p>{updateFail}</p>}
                        </div> 
                    </div> 
                </form>
                {/* <button className="buttonRefresh" onClick={this.handleRefresh}>Refresh</button> */}
                  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.firestore.ordered.employees,
        auth: state.firebase.auth,
        updateStatus: state.employee.updateStatus,
        updateFail: state.employee.updateFail,
        employeeStatus: state.employee.employeeStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createEmployee: (employee) => dispatch(createEmployee(employee))
        updateEmployee: (employee) => dispatch(updateEmployee(employee)),
        showEmployee: (employee) => dispatch(showEmployee(employee)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee)