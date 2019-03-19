const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
}


exports.employeeCreated = functions.firestore
.document('employees/{employeeId}')
.onCreate(doc => {
    const employee = doc.data()
    const notification = {
        content: 'Added a new employee ' + `${employee.firstName} ${employee.lastName}`,
        recentScan: admin.firestore.FieldValue.serverTimestamp(),
        firstName: `${employee.firstName}`,
        lastName: `${employee.lastName}`,
        scanStatus: `${employee.presence ? "In" : "Out"}`,
        // presence: `${employee.presence}`
    }
    return createNotification(notification);
})

exports.employeeTimed = functions.firestore
.document('employees/{employeeId}')
.onUpdate((change, context) => {
    const employeeb = change.before.data()
    const employee = change.after.data()
    const notification = {
        content: 'Employee ' + `${employee.firstName} ${employee.lastName}` + ' timed ' + `${employee.presence ? "in" : "out"}`,
        recentScan: admin.firestore.FieldValue.serverTimestamp(),
        firstName: `${employee.firstName}`,
        lastName: `${employee.lastName}`,
        scanStatus: `${employee.presence ? "In" : "Out"}`,
        presence: `${employee.presence}`
        // lastScan: `${employee.recentScan}`,
        // scanIn: `${employee.presence ? admin.firestore.FieldValue.serverTimestamp() : ""}`,
        // scanOut: `${employee.presence ? "" : admin.firestore.FieldValue.serverTimestamp()}`'
    }
    return createNotification(notification);
})

