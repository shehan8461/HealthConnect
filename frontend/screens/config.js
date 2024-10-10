import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig ={
    apiKey: "AIzaSyADekJms697dS7xC26fg8-J772qVX7rFKY",

    authDomain: "test-781bd.firebaseapp.com",
  
    projectId: "test-781bd",
  
    storageBucket: "test-781bd.appspot.com",
  
    messagingSenderId: "333865969246",
  
    appId: "1:333865969246:web:1669af2a1893a442af76cf",
  
    measurementId: "G-LSKMET7PE9"
  
}
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export{firebase};