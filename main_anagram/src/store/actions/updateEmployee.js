export const updateEmployee = (employee) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('employees')
        .where("idNum", "==", employee.idNum)
        .where("pass", "==", employee.pass)
        .where("hashF", "==", employee.hashF)
        .get()
        .then((querySnapshot) => {
            //https://stackoverflow.com/questions/49621820/querysnapshot-foreach-is-not-a-function-in-firestore
            if (querySnapshot.docs.length == 0)
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
                    if(employee.checked == true) {
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
                    else if (employee.checked == false) {
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
                  })
            }
        })
        
    }
};

