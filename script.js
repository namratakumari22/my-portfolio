// ✅ Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.title = "Scroll to Top";
scrollBtn.className =
  "fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hidden z-50 text-xl";
document.body.appendChild(scrollBtn);

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

// Scroll smoothly to top
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ Typing Animation in Hero Section
const typeText = async (element, text, delay = 75) => {
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await new Promise((res) => setTimeout(res, delay));
  }
};

// Run typing animation on DOM load
window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h2.text-4xl");
  if (title) {
    const originalText = title.textContent;
    title.textContent = "";
    typeText(title, originalText, 75);
  }
});

// ✅ ScrollSpy Navigation Highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop - 120 && scrollY < sectionTop + sectionHeight - 120) {
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
