// Smooth scroll from HERO button to FEATURES
const scrollBtn = document.getElementById("scrollBtn");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    const target = document.getElementById("features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}
