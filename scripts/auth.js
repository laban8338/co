// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5WSlpZ6YDYqJnr16rMmlziG6h9stN82M",
    authDomain: "compassion-todo-app-ef2a3.firebaseapp.com",
    databaseURL: "https://compassion-todo-app-ef2a3-default-rtdb.firebaseio.com",
    projectId: "compassion-todo-app-ef2a3",
    storageBucket: "compassion-todo-app-ef2a3.appspot.com",
    messagingSenderId: "532294208063",
    appId: "1:532294208063:web:36a60b7ce32bc62f8e868a",
    measurementId: "G-NWLS46EMF4"
  };

  const signupButton = document.getElementById("sign-up");
  const returnBtn = document.getElementById("return-btn");
  const createacctSection = document.getElementById("create-acct");
  const main = document.getElementById("main");

  signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacctSection.style.display = "block";
  });
 
  returnBtn.addEventListener("click", () => {
    main.style.display = "block";
    createacctSection.style.display = "none";
  })