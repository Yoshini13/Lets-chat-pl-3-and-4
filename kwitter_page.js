//YOUR FIREBASE LINKS
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
    function send(){
      username=localStorage.getItem("user_name");
      roomname=localStorage.getItem("room_name");
      meg=document.getElementById("msg").value ;
      firebase.database().ref(roomname).push({
          name:username,
          message:meg,
          like:0  
      });
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
