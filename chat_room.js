const firebaseConfig = {
    apiKey: "AIzaSyD5D47fXoWKhkVvPlW9HWMz3jH-FcgRvbg",
    authDomain: "kwitter-1b59f.firebaseapp.com",
    databaseURL: "https://kwitter-1b59f-default-rtdb.firebaseio.com",
    projectId: "kwitter-1b59f",
    storageBucket: "kwitter-1b59f.appspot.com",
    messagingSenderId: "573747663179",
    appId: "1:573747663179:web:a5f3afb5ded90dc41098ce",
    measurementId: "G-MK5T9GEJQB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();