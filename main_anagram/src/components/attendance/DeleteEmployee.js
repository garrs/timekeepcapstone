import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteEmployee} from '../../store/actions/deleteEmployee'
import {Redirect} from 'react-router-dom'
// import SweetAlert from 'sweetalert-react'
// import 'sweetalert/dist/sweetalert.css'
import axios from 'axios';

class DeleteEmployee extends Component {

    // delete collections at your own risk! https://firebase.google.com/docs/firestore/manage-data/delete-data
    // https://stackoverflow.com/questions/39844472/how-to-submit-a-form-as-soon-as-all-inputs-are-filled-in-react 
    constructor() {
        super();
        this.state = { 
            alerter:false,
            hashF:''
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
            ;}, 8000 );
        

    }

    render() {
        const {auth, deleteStatus} = this.props;
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
        // if(!auth.uid) return <Redirect to= '/signin' />
        if(auth.uid !== '8QMg2SwapHWHP5IlbXZuCrtGjeI2') return <Redirect to= '/signin' />
        return (
            <div className = "container">
                <form onSubmit={this.handleSubmit} className= "white">
                    <h5 className = "grey-text text-darken-3">Dismiss Employee</h5>
                    <div className = "input-field">
                    <h6 className = "grey-text text-darken-3">ID of the current fingerprint read by the scanner: {hashFTempSub}</h6>
                        <input type="hidden" id = "hashF" value={this.state.hashF} readonly/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="firstName">First name </label>
                        <input type="text" id = "firstName" onChange={this.handleChange} required/>
                    </div>
                    <div className = "input-field">
                        <label htmlFor ="lastName">Last name </label>
                        <input type="text" id = "lastName" onChange={this.handleChange} required/>
                    </div>
                    <div className = "center">
                        <p> <i> (Reminder: Be sure to delete the fingerprint template (ID number itself is the position to delete) of the recently fired to make space on its storage!) </i> </p>
                    </div>
                    <div className= "input-field">
                        <button className="buttonSubmit" onClick={() => this.setState({ alerter: true })}>Submit</button>
                        {/* <div>
                             <SweetAlert
                            show={this.state.alerter}
                            title="Warning"
                            text={"Upon deleting the employee in your online database, be sure to delete the employee's data in the fingerprint scanner now!"}
                            onConfirm={() => this.setState({ alerter: false })}
                            />
                        </div> */}
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