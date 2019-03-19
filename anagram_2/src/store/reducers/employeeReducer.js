const initState = {
    createSuccess: null,
    createFail: null,
    updateStatus: null,
    updateFail: null
}


const employeeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            console.log('created employee', action.employee);
            return {
                ...state,
                createSuccess: 'Registered an employee'
            }
        case 'CREATE_EMPLOYEE_ERROR':
            console.log('created employee error', action.err);
            return {
                ...state,
                createFail: 'Failed to register an employee'
            }
        case 'UPDATE_EMPLOYEE_TIME_IN':
            console.log('updated employee', action.employee);
            return {
                ...state,
                updateStatus: 'Employee timed in'
            }
        case 'UPDATE_EMPLOYEE_TIME_OUT':
            console.log('updated employee', action.employee);
            return {
                ...state,
                updateStatus: 'Employee timed out'
            }
        case 'UPDATE_EMPLOYEE_NOT_FOUND':
            console.log('updated employee not found', action.employee);
            return {
                ...state,
                updateStatus: 'Inputted employee not registered'
            }

            case 'UPDATE_EMPLOYEE_ERROR':
            console.log('updated employee error', action.err);
            return {
                ...state,
                updateFail: 'Inputted employee error'
            }

        default:
            return state = initState;
    }
}

export default employeeReducer