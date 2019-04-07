export const deleteEmployee = (employee) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('employees')
        .where("idNum", "==", employee.idNum)
        .where("firstName", "==", employee.firstName)
        .where("lastName", "==", employee.lastName)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.docs.length == 0)
            {
                console.log("inside if")
                console.log(querySnapshot)
                dispatch({type: 'DELETE_EMPLOYEE_ERROR', employee});
            }
            else {
            querySnapshot.forEach((doc) => {
                var employeeRef = firestore.collection("employees").doc(doc.id)
                return employeeRef.delete()
                .then(() => {
                    console.log("inside then of time in")
                    dispatch({type: 'DELETE_EMPLOYEE_SUCCESS', employee});
                })
              })
            }
        })
    }
};

