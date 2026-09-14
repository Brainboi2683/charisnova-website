const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a => {
  a.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const school = document.getElementById("school").value.trim() || "Not provided";
  const score = document.getElementById("score").value.trim() || "Not provided";
  const message = document.getElementById("message").value.trim() || "No additional message";

  const text =
`Hello CHARIS NOVA, I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred School/Course: ${school}
JAMB Score/Exam: ${score}
Message: ${message}`;

  window.open("https://wa.me/2348115524304?text=" + encodeURIComponent(text), "_blank");
});
