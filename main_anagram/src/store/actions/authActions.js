export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }

  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      var pas = prompt("Please enter the password to log-out: ")
      // if (pas == "holyavenger") {
      if (pas === "*******") {
        firebase.auth().signOut().then(() => {
          dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
      }
      else {
        window.alert("You failed to log-out!")
      }
    }
  }