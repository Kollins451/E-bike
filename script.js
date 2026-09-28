const form = document.getElementById("bikeForm");

const bikeSelect = document.getElementById("bike");

const message = document.getElementById("formMessage");


// ===============================
// CHOOSE BIKE BUTTONS
// ===============================

const bikeButtons =
  document.querySelectorAll(".choose-bike");

bikeButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const selectedBike =
      button.dataset.bike;

    bikeSelect.value =
      selectedBike;

    document
      .getElementById("apply")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});


// ===============================
// APPLICATION FORM
// ===============================

form.addEventListener("submit", function (event) {

  event.preventDefault();


  const agreement =
    document.getElementById("agreement");


  if (!agreement.checked) {

    showMessage(
      "Please confirm that you understand the delivery-fee information.",
      false
    );

    return;

  }


  const fullName =
    document.getElementById("fullName").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const country =
    document.getElementById("country").value.trim();

  const state =
    document.getElementById("state").value.trim();

  const city =
    document.getElementById("city").value.trim();

  const postal =
    document.getElementById("postal").value.trim();

  const address =
    document.getElementById("address").value.trim();

  const bike =
    document.getElementById("bike").value;

  const notes =
    document.getElementById("notes").value.trim();


  if (
    !fullName ||
    !phone ||
    !email ||
    !country ||
    !city ||
    !address ||
    !bike
  ) {

    showMessage(
      "Please complete all required fields.",
      false
    );

    return;

  }


  // ===============================
  // CREATE EMAIL
  // ===============================

  const recipient =
    "benebikes090@gmail.com";


  const subject =
    `E-Bike Application - ${bike}`;


  const body = `

E-BIKE APPLICATION

--------------------------------

Full Name:
${fullName}

Phone Number:
${phone}

Email:
${email}

Country:
${country}

State / Region:
${state}

City:
${city}

Postal / ZIP Code:
${postal}

Delivery Address:
${address}

Selected E-Bike:
${bike}

Additional Information:
${notes}

--------------------------------

DELIVERY INFORMATION

The applicant understands that the e-bike
is free and that an applicable delivery fee
may apply depending on the delivery location.

The exact delivery fee should be confirmed
before any payment is requested.

`;


  // Encode the email

  const mailto =
    `mailto:${recipient}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;


  // ===============================
  // OPEN EMAIL
  // ===============================

  window.location.href = mailto;


  showMessage(
    "Your email application has been prepared. Please review the information in your email app and tap Send.",
    true
  );

});


// ===============================
// MESSAGE
// ===============================

function showMessage(text, success) {

  message.textContent = text;

  message.style.display = "block";


  if (success) {

    message.style.background =
      "#e8f8ed";

    message.style.color =
      "#126a35";

  } else {

    message.style.background =
      "#ffe8e8";

    message.style.color =
      "#9b1717";

  }

}
