const form = document.getElementById("bikeForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const agreement = document.getElementById("agreement");

  if (!agreement.checked) {
    showMessage(
      "Please confirm that you understand the delivery-fee information.",
      false
    );
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value.trim();
  const city = document.getElementById("city").value.trim();
  const address = document.getElementById("address").value.trim();
  const bike = document.getElementById("bike").value;

  if (
    !name ||
    !email ||
    !phone ||
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


  /*
    FRONTEND DEMO

    The information is currently not being sent
    anywhere. We will connect this form to a secure
    backend/email service later.
  */

  showMessage(
    "Application received. Your delivery information will be reviewed and the applicable delivery fee will be confirmed before any payment is requested.",
    true
  );

  form.reset();

});


function showMessage(text, success) {

  message.textContent = text;

  message.style.display = "block";

  if (success) {
    message.style.background = "#e8f8ed";
    message.style.color = "#126a35";
  } else {
    message.style.background = "#ffe8e8";
    message.style.color = "#9b1717";
  }

  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}