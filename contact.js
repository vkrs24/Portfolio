function update_message(value) {
  let alertBox = document.querySelector(".alert_msg");
  alertBox.innerHTML = value;
  alertBox.style.display = "block";

  // Hide message after 3 seconds
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
}

function send_email(event) {
  event.preventDefault();
  console.log("Sending email...");

  // Store input fields in variables
  let fname = document.querySelector(".fname");
  let lname = document.querySelector(".lname");
  let mail = document.querySelector(".mail");
  let message = document.querySelector("#message");
  let subject = document.querySelector(".subject");

  // Combine first and last name
  let name = `${fname.value} ${lname.value}`.trim();

  // Input validation
  if (
    !fname.value ||
    !lname.value ||
    !mail.value ||
    !message.value ||
    !subject.value
  ) {
    update_message(
      `<div class="msg_cnt"><i class="fa-solid fa-circle-exclamation fa_orange"></i><div class="i_orange_text">Please fill in all fields</div></div>`
    );
    return;
  }

  const parameters = {
    name: name,
    email: mail.value,
    message: message.value,
    subject: subject.value,
  };

  const serviceId = "service_t4vcaqh";
  const templateId = "template_l4a5rym";

  emailjs
    .send(serviceId, templateId, parameters)
    .then((res) => {
      console.log("Email sent successfully!", res);
      update_message(
        `<div class="msg_cnt"><i class="fa-solid fa-circle-check fa-green"></i><div class="i_green_text">Successfully sent</div></div>`
      );

      // Clear input fields after successful submission
      fname.value = "";
      lname.value = "";
      mail.value = "";
      message.value = "";
      subject.value = "";
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      update_message(
        `<div class="msg_cnt"><i class="fa-solid fa-circle-xmark fa-red"></i><div class="i_red_text">Failed to send</div></div>`
      );
    });
}
