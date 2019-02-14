const initState = {
    // dummy data here
    // content is irrevelant here
    employees: [
        {id: '1', title: 'Chiaki', content: 'blah'},
        {id: '2', title: 'Hiyoko', content: 'blah'},
        {id: '3', title: 'Akane', content: 'blah'},
        {id: '4', title: 'Nekomaru', content: 'blah'},
        {id: '5', title: 'Hinata', content: 'blah'},
        {id: '6', title: 'Monokuma', content: 'blah'},
        {id: '7', title: 'Sonia', content: 'blah'},
        {id: '8', title: 'Junko', content: 'blah'},
        {id: '9', title: 'Peko', content: 'blah'}

    ]
}

const employeeReducer = (state = initState, action) => {
    return state
}

export default employeeReducer