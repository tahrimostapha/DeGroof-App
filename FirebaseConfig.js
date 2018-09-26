import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAMx3bQh349wukXh-sey6VNWkD-KyMLQmk",
    authDomain: "degroof-app.firebaseapp.com",
    databaseURL: "https://degroof-app.firebaseio.com",
    projectId: "degroof-app",
    storageBucket: "degroof-app.appspot.com",
    messagingSenderId: "102902115096"
  };
export const app = firebase.initializeApp(config);