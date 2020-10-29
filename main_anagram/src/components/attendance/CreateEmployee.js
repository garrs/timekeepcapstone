import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEmployee} from '../../store/actions/createEmployee'
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'

class CreateEmployee extends Component {
    constructor() {
        super();
        this.state = { 
            hashF: "",
            idNum: "",
            status:"",
            alerter:true
        };
      }

    componentDidMount(){
        // this.fetchData();
        axios
        .get('https://script.googleusercontent.com/macros/echo?user_content_key=ijZrEFnvRCB48p7Y5C6KiHajyuGVRCqiaJKuIGFxnkzs36vlXFTg9otMd9d2Me0GmsoMiBJRza9ybtYWy2feEbmELXOa_Qshm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHQXXBa8R7nD341kLg82uvLPtJYaWU9XCMl8pD2w0EIR49ja5rQBN8X8Bo6hbvv2ICD8xhZ4Q9WE&lib=MB_haIsFwkqnx5Kzk636T6Se5vJX7QEql')
        .then(({ data })=> {
            this.setState({ 
                hashF: data.user[0].id
          });
        })
        .catch((err)=> {})
    }

    handleRefresh= (e) => {
        document.location.reload(true)
    }

    // https://stackoverflow.com/questions/39844472/how-to-submit-a-form-as-soon-as-all-inputs-are-filled-in-react 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value   
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.idNum === ('000'+ this.state.hashF.substring(0,1)) ||
        this.state.idNum=== ('00'+ this.state.hashF.substring(0,2)) ||
        this.state.idNum=== ('0'+ this.state.hashF.substring(0,3)) ||
        this.state.idNum === (this.state.hashF.substring(0,4))
        )
        {
            this.props.createEmployee(this.state)
            this.props.history.push('/');
        }
        else {
        // setState here attempts to mimic what redux does in its reducers
        this.setState({
            status: "Employee registration failed"
        })
        setTimeout( function(){
            document.location.reload(true)
            // this.setState({ goingToOrFro: 'None'})
            ;}, 5000 );
        }
    }

    render() {
        const {auth} = this.props;
        // if(!auth.uid) return <Redirect to= '/signin' />
        const hashFTemp = this.state.hashF
        var hashFTempSub = ''
        if (hashFTemp.length === 65)
         {hashFTempSub = '000' + hashFTemp.substring(0,1)}
        else if (hashFTemp.length === 66)
         {hashFTempSub = '00' + hashFTemp.substring(0,2)}
        else if (hashFTemp.length === 67)
         {hashFTempSub = '0' + hashFTemp.substring(0,3)}
        else if (hashFTemp.length === 68)
         {hashFTempSub = hashFTemp.substring(0,4)}
        if(auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') return <Redirect to= '/signin' />
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className= "white">
                    <div>
                        <SweetAlert
                        show={this.state.alerter}
                        title="Warning"
                        text={"Be sure to enroll the employee through the fingerprint scanner first before registering the employee here! Assigned ID to the employee should be the same on the current fingerprint read."}
                        onConfirm={() => this.setState({ alerter: false })}
                        />
                    </div>
                    <h5 className = "grey-text text-darken-3">Register Employee</h5>
                    <div className = "input-field">
                        <label htmlFor ="firstName">First name </label>
                        <input type="text" id = "firstName" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="lastName">Last name </label>
                        <input type="text" id = "lastName" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="jobPosition">Job position </label>
                        <input type="text" id = "jobPosition" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="image">Image link</label>
                        <input type="text" id = "image" onChange={this.handleChange}/>
                    </div>
                    {/* <div className = "input-field">
                        <label htmlFor ="pass">Employee's password </label>
                        <input type="password" id = "pass" onChange={this.handleChange} required/>
                    </div> */}
                    
                    <h6 className = "grey-text text-darken-3">ID of the current fingerprint read by the scanner: {hashFTempSub}</h6>
                    <div className = "input-field">
                        <label htmlFor ="idNum">Please match the ID number of the above </label>
                        <input type="text" id = "idNum" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <input type="hidden" id = "hashF" value={this.state.hashF}/>
                    </div>
                    <div className = "center">
                        <p> <i> (Advisory: Please double-check that the recently enrolled employee's ID number is the one displayed in the 'ID of the current fingerprint read by the scanner'! 
                            If unsure, just press the <img src="/img/refresh.png" width={20} height={20} /> button to update the most recent fingerprint ID scanned.) </i> </p>
                    </div>
                    <div className= "input-field">
                        <button className="buttonSubmit">Submit</button>
                        <div className="red-text center">
                            {/* fix this overhead getting submitted to FireStore */}
                            {this.state.status}
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
        auth: state.firebase.auth,
        //createStatus: state.employee.createStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: (employee) => dispatch(createEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee)