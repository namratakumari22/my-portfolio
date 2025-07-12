// ✅ Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.title = "Scroll to Top";
scrollBtn.className =
  "fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hidden z-50 text-xl";
document.body.appendChild(scrollBtn);

// Show/hide scroll button on scroll
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("hidden", window.scrollY <= 300);
});

// Scroll to top smoothly on button click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ Typing Animation in Hero Section
const typeText = async (element, text, delay = 100) => {
  element.textContent = ""; // Clear any pre-filled text
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await new Promise((res) => setTimeout(res, delay));
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    const originalText = "a Full Stack Developer"; // Change if needed
    typeText(typingElement, originalText, 80);
  }
});

// ✅ ScrollSpy: Highlight nav based on scroll position
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop - 150 && scrollY < sectionTop + sectionHeight - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-400", "font-semibold");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("text-blue-400", "font-semibold");
    }
  });
});

// ✅ Toggle "View More" details in projects or internships
function toggleDetails(id, btn) {
  const content = document.getElementById(id);
  const isVisible = content.classList.contains("hidden");
  content.classList.toggle("hidden");
  btn.textContent = isVisible ? "View Less" : "View More";
}
