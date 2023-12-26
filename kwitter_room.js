const firebaseConfig = {
     apiKey: "AIzaSyANH21XqjurYnAatXJigtMIW0jacTvutxA",
     authDomain: "lets-chat-74b86.firebaseapp.com",
     databaseURL: "https://lets-chat-74b86-default-rtdb.firebaseio.com",
     projectId: "lets-chat-74b86",
     storageBucket: "lets-chat-74b86.appspot.com",
     messagingSenderId: "658470666991",
     appId: "1:658470666991:web:0b08fe4997f24a5084911a"
   };
   
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
      var room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })
      ;
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom_name(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();
function redirecttoroom_name(name){
     localStorage.setItem("room_name",name);
     window.location="kwitter_page.html"
}
function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
}