import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


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

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Login inputs
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

// Register Inputs

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createAcctBtn = document.getElementById("create-acct-btn");

// Login / Register navigation Variables
const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");
const createacctSection = document.getElementById("create-acct");
const main = document.getElementById("main");

let email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createAcctBtn.addEventListener("click", () => {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Emails do not match");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignupPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Passwords do not match");
    isVerified = false;
  }

  // else if(){
  // } else{
  // }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all the inputs");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredentials) => {
        window.alert("Success! Account Created");
        window.location = "../pages/createTask.html";
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
});

submitButton.addEventListener("click", () => {});

// Login / Register navigation functionality
signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacctSection.style.display = "block";
});

returnBtn.addEventListener("click", () => {
  main.style.display = "block";
  createacctSection.style.display = "none";
});