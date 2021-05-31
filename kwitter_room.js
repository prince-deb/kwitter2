
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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";
function addroom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room Name -"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location="index.html";
}