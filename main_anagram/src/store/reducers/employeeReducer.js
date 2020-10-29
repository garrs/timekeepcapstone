const initState = {
    createStatus: null,
    updateStatus: null,
    updateFail: null,
    deleteStatus: null,
    employeeStatus: null
}


const employeeReducer = (state = initState, action, payload) => {
    switch (action.type) {
        case 'SHOW_EMPLOYEE':
            console.log('show employee ' + action.employee);
            return {
                ...state,
                employeeStatus: action.employee
            }
        case 'CREATE_EMPLOYEE':
            console.log('created employee', action.employee);
            return {
                ...state,
                createStatus: 'Registered an employee'
            }
        case 'CREATE_EMPLOYEE_ERROR':
            console.log('created employee error', action.err);
            return {
                ...state,
                createStatus: 'Failed to register an employee'
            }
        case 'DELETE_EMPLOYEE_SUCCESS':
            console.log('delete employee success', action.employee);
            return {
                ...state,
                deleteStatus: 'Deleted employee'
            }
        case 'DELETE_EMPLOYEE_ERROR':
            console.log('delete employee error', action.err);
            return {
                ...state,
                deleteStatus: 'Failed to delete inputted employee'
            }
        case  'UPDATE_EMPLOYEE_FORGOT_SCAN_REASON':
                console.log('updated employee', action.employee);
                return {
                    ...state,
                     updateStatus: 'You forgot to pick a scan reason!'
                }
        case 'UPDATE_EMPLOYEE_INCOMPATIBLE_SELECTION':            
            console.log('updated employee', action.employee);           
                 return {
                     ...state,               
                     updateStatus: 'You have incompatible scan status and scan reason.'    
                }  
        case 'UPDATE_EMPLOYEE_ALREADY_TIMED_IN':            
        console.log('updated employee', action.employee);           
             return {
                 ...state,               
                 updateStatus: 'You are still timed-in! No status changes recorded.'    
            }        
        case 'UPDATE_EMPLOYEE_ALREADY_TIMED_OUT':           
        console.log('updated employee', action.employee);        
            return {         
                 ...state,               
                 updateStatus: 'You are still timed-out! No status changes recorded.'
            }
        case 'UPDATE_EMPLOYEE_TIME_IN':
            console.log('updated employee', action.employee);
            return {
                ...state,
                updateStatus: 'You are now timed-in.'
            }
        case 'UPDATE_EMPLOYEE_TIME_OUT':
            console.log('updated employee', action.employee);
            return {
                ...state,
                updateStatus: 'You are now timed-out.'
            }
        case 'UPDATE_EMPLOYEE_NOT_FOUND':
            console.log('employee not found', action.employee);
            return {
                ...state,
                updateStatus: 'No match found from provided information'
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