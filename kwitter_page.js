var firebaseConfig = {
      apiKey: "AIzaSyCjLcaxB7Sm4JB6LfYoiquhKM2B88BO7ds",
      authDomain: "kwitter-13530.firebaseapp.com",
      databaseURL: "https://kwitter-13530-default-rtdb.firebaseio.com",
      projectId: "kwitter-13530",
      storageBucket: "kwitter-13530.appspot.com",
      messagingSenderId: "439121876805",
      appId: "1:439121876805:web:eacd81b27b6cdb071bd02c"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
      function send()
      {
            msg=document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0 
            });
            document.getElementById("msg").value="";
      }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location="index.html";
}