function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form[name='reserve']");
const closeModal = document.querySelector(".close");
const confirmation = document.querySelector (".modal-confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  confirmation.style.display = "none";

}// close modal event
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Attach validate function to form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();

if (validate()) {
  modalBody.style.display = "none";
  confirmation.style.display = "block";
}
});

// close modal confirmation
confirmation.addEventListener("click", () => {
  modalbg.style.display = "none";
  window.location.reload();
})

//Form validation
function validate() {
  let isValid = true;

// clear errors messages
document.querySelectorAll(".error-message").forEach(error => error.textContent = "");

//validate first name
const firstname = document.getElementById("first").value;
if (firstname.length < 2) {
  document.getElementById("first-error").textContent = "Veuillez entrer 2 caractères ou plus.";
  isValid = false;
}

//validate last name
const lastname = document.getElementById("last").value;
if (lastname.length < 2 ) {
  document.getElementById("last-error").textContent = "Veuillez entrer 2 caractères ou plus.";
  isValid = false;
}

//validate email
const email = document.getElementById("email").value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailPattern.test(email)) {
  document.getElementById("email-error").textContent = "Veuillez entrer une adresse email valide.";
  isValid = false;
}

  // Validate birthday
  const birthdate = document.getElementById("birthdate").value;
  if (birthdate === "") {
    document.getElementById("birthdate-error").textContent = "Vous devez entrer votre date de naissance.";
    isValid = false;
  }

// Validate quantity
const quantity = document.getElementById("quantity").value;
if (quantity === "" || isNaN(quantity) || quantity < 0 || quantity > 99) {
  document.getElementById("quantity-error").textContent = "Veuillez entrer un nombre entre 0 et 99.";
  isValid = false;
}

// Validate location
const location = document.querySelector('input[name="location"]:checked');
if (!location) {
  document.getElementById("location-error").textContent = "Vous devez choisir une option.";
  isValid = false;
}

// Validate terms and conditions
const termsAccepted = document.getElementById("checkbox1").checked;
if (!termsAccepted) {
  document.getElementById("checkbox1-error").textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
  isValid = false;
}

return isValid;
}


