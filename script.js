const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  message: document.getElementById("message")
};
const errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  message: document.getElementById("messageError")
};
const status = document.getElementById("formStatus");

form.addEventListener("submit", event => {
  event.preventDefault();
  Object.values(errors).forEach(el => el.textContent = "");
  status.textContent = "";

  let valid = true;
  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const message = fields.message.value.trim();

  if (name.length < 2) {
    errors.name.textContent = "Please enter a name with at least 2 characters.";
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (message.length < 10) {
    errors.message.textContent = "Please enter a message with at least 10 characters.";
    valid = false;
  }

  if (valid) {
    status.textContent = "Validation successful! This demo form does not send messages yet. Connect a form service or backend before publishing for real enquiries.";
    status.style.color = "#356b3d";
    form.reset();
  } else {
    status.textContent = "Please correct the highlighted fields and try again.";
    status.style.color = "#b13d35";
  }
});
