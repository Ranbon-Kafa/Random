// auth.js

// Firebase yapılandırma
const firebaseConfig = {
  apiKey: "AIzaSyAzcp98Cznxf2uFxDrlseZoOihg8FteOM8",
  authDomain: "random-85fb0.firebaseapp.com",
  projectId: "random-85fb0",
  storageBucket: "random-85fb0.appspot.com",
  messagingSenderId: "756747887030",
  appId: "756747887030"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();