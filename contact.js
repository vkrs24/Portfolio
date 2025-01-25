function send_email(event) {
  event.preventDefault(); // Fix event handling
  console.log("Sending email...");

  let name =
    document.querySelector(".fname").value +
    " " +
    document.querySelector(".lname").value;

  const parameters = {
    name: name,
    email: document.querySelector(".mail").value,
    message: document.querySelector("#message").value,
  };

  const serviceId = "service_t4vcaqh";
  const templateId = "template_l4a5rym";

  emailjs
    .send(serviceId, templateId, parameters)
    .then((res) => {
      console.log("Email sent successfully!", res);
      alert("Your message has been sent successfully!");

      // Clear input fields
      document.querySelector(".fname").value = "";
      document.querySelector(".lname").value = "";
      document.querySelector(".mail").value = "";
      document.querySelector("#message").value = "";
      document.querySelector(".subject").value = "";
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      alert("Failed to send message. Please try again!");
    });
}
