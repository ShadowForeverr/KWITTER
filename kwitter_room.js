//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDucnu0nvp3Siws22tktgcMID2_VYFCzxg",
  authDomain: "kwitter-dfb39.firebaseapp.com",
  databaseURL: "https://kwitter-dfb39-default-rtdb.firebaseio.com",
  projectId: "kwitter-dfb39",
  storageBucket: "kwitter-dfb39.appspot.com",
  messagingSenderId: "896827789180",
  appId: "1:896827789180:web:ceacbdfb80b5bf570cdef9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username_localstorage = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = username_localstorage;

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("room name - " + Room_names);
        row =
          "<div class = 'room_name' id = " +
          Room_names +
          " onclick = 'redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
