document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("bikeForm");
  const message = document.getElementById("formMessage");

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const state = document.getElementById("state").value.trim();
    const city = document.getElementById("city").value.trim();
    const address = document.getElementById("address").value.trim();
    const postal = document.getElementById("postal").value.trim();
    const bike = document.getElementById("bike").value;
    const notes = document.getElementById("notes").value.trim();

    // Check required fields
    if (
      !name ||
      !phone ||
      !email ||
      !country ||
      !city ||
      !address ||
      !bike
    ) {
      message.style.display = "block";
      message.textContent = "Please complete all required fields.";
      message.style.backgroundColor = "#fff1f2";
      message.style.color = "#be123c";

      return;
    }

    // Destination email
    const recipient = "benebikes090@gmail.com";

    // Email subject
    const subject = "New E-Bike Application";

    // Create email message
    const body =
`Hello,

I would like to submit an application for a free e-bike.

APPLICANT INFORMATION

Full Name:
${name}

Phone Number:
${phone}

Email Address:
${email}

DELIVERY INFORMATION

Country:
${country}

State / Region:
${state || "Not provided"}

City:
${city}

Full Delivery Address:
${address}

Postal / ZIP Code:
${postal || "Not provided"}

E-BIKE REQUEST

Selected E-Bike:
${bike}

Additional Delivery Information:
${notes || "None provided"}

I understand that the e-bike is provided free of charge and that an applicable delivery fee may apply depending on the delivery location.

Thank you.
${name}`;

    /*
     * Create Gmail compose URL.
     * The applicant will be taken to Gmail,
     * where they can review the email and send it.
     */
    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=" + encodeURIComponent(recipient) +
      "&su=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    // Change the button/message while opening Gmail
    const submitButton = form.querySelector(".submit-button");

    if (submitButton) {
      submitButton.textContent = "Opening Email...";
      submitButton.disabled = true;
    }

    message.style.display = "block";
    message.textContent =
      "Opening your email. Please review the application and press Send.";
    message.style.backgroundColor = "#ecfdf3";
    message.style.color = "#087443";

    /*
     * Open Gmail in the same tab.
     * This makes the Submit Application button
     * actually take the applicant to the email website.
     */
    setTimeout(function () {
      window.location.href = gmailURL;
    }, 500);

  });

});
