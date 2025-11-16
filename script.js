var typed = new Typed("#element", {
  strings: ["Web Designer", "Front End Designer", "Full Stack Developer"],
  typeSpeed: 50,
});

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();  // Stop page reload

  const form = e.target;
  const formData = new FormData(form);

  // Send to Web3Forms API
  let response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  let result = await response.json();

  if (result.success) {
    alert("Message sent successfully! Thank you for contacting me.");
    form.reset();
  } else {
    alert("Failed to send message. Please try again later.");
  }
});

