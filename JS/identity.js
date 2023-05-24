// .\node_modules\.bin\esbuild .\JS\identity.js --bundle --outfile=.\JS\identity-built.js

import GoTrue from "gotrue-js";

function loginmodal() {
  console.log("pre-hi");
  document.getElementById("login-modal").style.display = "block";
}

function loginuser() {
  var email = document.getElementById("Email").value;
  var password = document.getElementById("Password").value;
  auth
    .login(email.value, password.value)
    .then((response) => {
      console.log("Success! Response: " + JSON.stringify({ response }));
    })
    .catch((error) => console.log("Failed :( " + JSON.stringify(error)));
}

// Enable buttons
window.onload = function () {
  document.getElementById("account-button").onclick = loginmodal;
  document.getElementById("login-button").onclick = loginuser;
};

// Instantiate the GoTrue auth client with an optional configuration
const auth = new GoTrue({
  APIUrl: "https://homepage2.netlify.app/.netlify/identity",
  audience: "",
  setCookie: false,
});
