export const updateEmployee = (employee) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('employees')
        // .where("idNum", "==", employee.idNum)
        // .where("pass", "==", employee.pass)
        .where("hashF", "==", employee.hashF)
        .get()
        .then((querySnapshot) => {
            //https://stackoverflow.com/questions/49621820/querysnapshot-foreach-is-not-a-function-in-firestore
            if (querySnapshot.docs.length === 0)
            {
                console.log("inside if")
                console.log(querySnapshot)
                dispatch({type: 'UPDATE_EMPLOYEE_NOT_FOUND', employee});
            }
            else {

                querySnapshot.forEach((doc) => {
                    console.log("inside forEach")
                    console.log(querySnapshot)
                    var employeeRef = firestore.collection("employees").doc(doc.id)
                    employeeRef.get().then(function(doc) {
                        if (doc.exists) {
                            console.log("Document data:", doc.data().presence);
                            // deals with already timed in
                            if(employee.checked === true && doc.data().presence === true) {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: true})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ALREADY_TIMED_IN', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                            }
                            // deals with already timed out
                            else if(employee.checked === false && doc.data().presence === false) {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: false})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ALREADY_TIMED_OUT', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                            }
                            // deals with problem of checkbox not defaulting upon switch turn
                            else if((employee.checked === true && employee.goingToOrFro === "Lunch break") 
                            || (employee.checked === true && employee.goingToOrFro === "Shift end") 
                            || (employee.checked === true && employee.goingToOrFro === "Running an errand")
                            || (employee.checked === true && employee.goingToOrFro === "Medical attention")
                            ) {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: false})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_INCOMPATIBLE_SELECTION', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                            }
                            // deals with problem of checkbox not defaulting upon switch turn
                            else if((employee.checked === false && employee.goingToOrFro === "Start shift") 
                            || (employee.checked === false && employee.goingToOrFro === "Back from lunch") 
                            || (employee.checked === false && employee.goingToOrFro === "Returning from the errand")
                            || (employee.checked === false && employee.goingToOrFro === "Returning from infirmary")
                            ) {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: true})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_INCOMPATIBLE_SELECTION', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                            }
                            else if(employee.checked === true && employee.goingToOrFro !== "") {
                                    return employeeRef.update({
                                        presence: employee.checked,
                                        goingToOrFro: employee.goingToOrFro
                                       })
                                       .then(() => {
                                       console.log("inside then of time in")
                                       dispatch({type: 'UPDATE_EMPLOYEE_TIME_IN', employee});
                                       })
                                       .catch((error) => {
                                       dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                       })
                                   }
                            else if (employee.checked === false && employee.goingToOrFro !== "") {
                                    return employeeRef.update({
                                        presence: employee.checked, 
                                        goingToOrFro: employee.goingToOrFro})
                                       .then(() => {
                                       console.log("inside then of time out")
                                       dispatch({type: 'UPDATE_EMPLOYEE_TIME_OUT', employee});
                                       })
                                       .catch((error) => {
                                       dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                       })
                                   }
                            // if employee forgot to select a scan reason
                            else if(employee.checked === true && doc.data().presence === true && employee.goingToOrFro === "") {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: true})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_FORGOT_SCAN_REASON', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                                
                            }
                            else if(employee.checked === false && doc.data().presence === false && employee.goingToOrFro === "") {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: false})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_FORGOT_SCAN_REASON', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                            }
                            else if(employee.checked === true && doc.data().presence === false && employee.goingToOrFro === "") {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: false})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_FORGOT_SCAN_REASON', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                                
                            }
                            else if(employee.checked === false && doc.data().presence === true && employee.goingToOrFro === "") {
                                console.log("No employee status change!")
                                return employeeRef.update({presence: true})
                                .then(() => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_FORGOT_SCAN_REASON', employee});
                                })
                                .catch((error) => {
                                    dispatch({type: 'UPDATE_EMPLOYEE_ERROR', error});
                                })
                            }

                        }
                        else {                            
                            // doc.data() will be undefined in this case  
                            console.log("No such document!");  
                        }
                  })
                })
            }
        }) 
    }
};