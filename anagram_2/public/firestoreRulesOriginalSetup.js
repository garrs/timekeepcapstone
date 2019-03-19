// service cloud.firestore {
//     match /databases/{database}/documents {
//       match /employees/{employee} {
//         allow read, write: if request.auth.uid != null
//       }
//       match /notifications/{notification} {
//         allow read, write: if request.auth.uid != null
//       }
//     }
//   }