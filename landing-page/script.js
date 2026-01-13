// POPUP
function showInfoPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// RIPPLE CLICK EFFECT
document.addEventListener("click", function (e) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// PARALLAX LOGO
const mascot = document.getElementById("mascot");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  mascot.style.transform = `translateX(${x}px)`;
});

document.addEventListener("mouseleave", () => {
  mascot.style.transform = `translateX(0px)`;
});
