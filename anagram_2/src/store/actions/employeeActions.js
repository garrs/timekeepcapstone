export const createEmployee = (employee) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{

        const firestore = getFirestore();
        const employeeFirstName = getState().firebase.employee;
        firestore.collection('employees').add({
            ...employee,
            presence: false,
            updatedAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_EMPLOYEE', employee});
        }).catch((err) => {
            dispatch({type: 'CREATE_EMPLOYEE_ERROR', err})
        })

    }
};