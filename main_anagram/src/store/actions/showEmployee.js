import React from 'react'

export const showEmployee = (employee) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('employees')
        .where("hashF", "==", employee.hashF)
        .get()
        .then((querySnapshot) => {
            //https://stackoverflow.com/questions/49621820/querysnapshot-foreach-is-not-a-function-in-firestore
            if (querySnapshot.docs.length === 0)
            {
                console.log("No shown")
            }
            else {

                querySnapshot.forEach((doc) => {
                    console.log("inside forEach")
                    console.log(querySnapshot)
                    var employeeRef = firestore.collection("employees").doc(doc.id)
                    employeeRef.get().then(function(doc) {
                        if (doc.exists) {
                            console.log("Document exists!" + doc.data().firstName);
                            return dispatch({type: 'SHOW_EMPLOYEE', employee: "Hello, " + doc.data().firstName + " " + doc.data().lastName +
                            ". You're current task is: " + doc.data().goingToOrFro
                        });
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