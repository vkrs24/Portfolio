function update_message(value) {
  document.querySelector(".alert_msg").innerHTML = value;
  document.querySelector(".alert_msg").style.display = "block";

  // Hide message after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert_msg").style.display = "none";
  }, 3000);
}

function send_email(event) {
  event.preventDefault();
  console.log("Sending email...");

  let name =
    document.querySelector(".fname").value +
    " " +
    document.querySelector(".lname").value;

  const parameters = {
    name: name,
    email: document.querySelector(".mail").value,
    message: document.querySelector("#message").value,
    subject:document.querySelector(".subject").value;
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

      // Clear input fields
      document.querySelector(".fname").value = "";
      document.querySelector(".lname").value = "";
      document.querySelector(".mail").value = "";
      document.querySelector("#message").value = "";
      document.querySelector(".subject").value = "";
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      update_message(
        `<div class="msg_cnt"><i class="fa-solid fa-circle-xmark fa-red"></i><div class="i_red_text">Failed to send</div></div>`
      );
    });
}
