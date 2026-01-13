// POPUP
function showInfoPopup(e) {
  e.preventDefault();
  setTimeout(() => {
    document.getElementById("popup").classList.remove("hidden");
  }, 800);
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

  // Delay navigation untuk link eksternal
  const link = e.target.closest("a");
  if (link && link.href && link.target === "_blank") {
    e.preventDefault();
    setTimeout(() => {
      window.open(link.href, "_blank");
    }, 800);
  }

  setTimeout(() => {
    ripple.remove();
  }, 800);
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
