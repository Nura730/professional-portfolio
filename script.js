const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("ananda-theme");
if (savedTheme === "dark") body.classList.add("dark");
function updateThemeIcon() {
  themeToggle.textContent = body.classList.contains("dark") ? "☀" : "☾";
}
updateThemeIcon();
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "ananda-theme",
    body.classList.contains("dark") ? "dark" : "light",
  );
  updateThemeIcon();
});
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }),
);
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(
    "Portfolio enquiry from " + data.get("name"),
  );
  const bodyText = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
  );
  window.location.href = `mailto:anandaperumal21@gmail.com?subject=${subject}&body=${bodyText}`;
});
if (window.gsap) {
  gsap.from(".brand,.nav", {
    y: -20,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,
  });
  gsap.from(".reveal", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    scrollTrigger: undefined,
  });
}
