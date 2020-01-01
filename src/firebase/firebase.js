import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDe4HkLQs-AV1i7v3jRgeL3WQghTHANq5U",
    authDomain: "expensify-59830.firebaseapp.com",
    databaseURL: "https://expensify-59830.firebaseio.com",
    projectId: "expensify-59830",
    storageBucket: "expensify-59830.appspot.com",
    messagingSenderId: "540449549979",
    appId: "1:540449549979:web:2a1c25f7f17f37a96fe03e",
    measurementId: "G-Q3841NTC2L"
  };

  firebase.initializeApp(firebaseConfig)
 
  const database =  firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export { firebase, googleAuthProvider, database as default}




  //refrense to Section 14 - firebase basics
  
//   database.ref('expenses').on('child_removed',(snapshot) => {
//       console.log('id: ' + snapshot.key, snapshot.val())
//   })

//   database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log('id: ' + snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log('id: ' + snapshot.key, snapshot.val())
// })
 // database.ref('expenses/-LxNnujsoTjySlWr555F').remove()
//   database.ref('expenses').push({
//       description:'Rent',
//     note: '1: This is notes 1',
//     amount: 109500,
//     createAt: 1000
//   })
//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = []
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       })
//       console.log(expenses)
//   })
//   database.ref('expenses').push({
//     description:'Phone Bill',
//     note: '2: this is notes 2',
//     amount: 5900,
//     createAt: 2000
// })
// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
// })
// database.ref('expenses').push({
//     description:'Food',
//     note: '3: this is notes 3',
//     amount: 1200,
//     createAt: 3000
// })
// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
// })
  //database.ref('notes/-LxNe-OtzHohat-le4fh').remove()
//   database.ref('notes').push({
//     title: 'Fitness',
//     body: 'Running'
// })

//   database.ref().on('value',
//   (snapshot) => {
//       const val = snapshot.val()
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   })
//   database.ref('job/title').set('Vice President')
//   setTimeout(() =>{
//     database.ref('job').set('Vice President')
//   }, 3500)
  
//   setTimeout(() =>{
//     database.ref('age').set(48)
//   }, 7000)
  
//   setTimeout(() =>{
//     database.ref().off()
//   }, 5000)

//   setTimeout(() =>{
//     database.ref('location/city').set('sausalito')
//   }, 10500)
//   database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>
//     {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((e) => {
//     console.log('This is exception: ' + e)
//     })
//   database.ref().set({
//       name: 'Vijay Vyas',age: 30,
//       job: 'Senior Software Developer',
//       isSingle:false,
//       location:{
//           city: 'Phoenix',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((e) => {
//       console.log('This failed', e)
//   })

//   database.ref().update({
//       job: 'Manager',
//       'location/city': 'Seattle'
//   })
//   database.ref().update({
//     age: 30,
//     'location/city': 'Seattle'
// })
//   database.ref('age').set(29)
//   database.ref('location/city').set('New York')
 
//   database.ref('attribute').set({
//     height: 83,
//     weight: 160
//   })
//   //database.ref().set('This is my data.')

//   database.ref('test').set(
//       'test01').then(() => 
//       {console.log('Data saved')
//     }).catch((e) =>
//      {console.log('test001: ' + e)})