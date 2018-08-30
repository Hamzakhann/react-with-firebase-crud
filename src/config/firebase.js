import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDZbHGLARKSwx2taXeL5UVmvoY8ZMoRLGw",
    authDomain: "test-firebase-react-todo.firebaseapp.com",
    databaseURL: "https://test-firebase-react-todo.firebaseio.com",
    projectId: "test-firebase-react-todo",
    storageBucket: "test-firebase-react-todo.appspot.com",
    messagingSenderId: "222821935417"
}

firebase.initializeApp(config);

export default firebase;