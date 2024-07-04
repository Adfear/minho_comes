// Check if user has previously responded to the cookie policy
let cookiesAccepted = localStorage.getItem("cookiesAccepted");

// If user has not previously accepted or denied cookies, show the cookie overlay
if (!cookiesAccepted) {
  cookieOverlay.style.display = "block";
}

// Get elements of the cookie overlay, Yes button, and No button

document.getElementById("cookiesAccepted").addEventListener("click", function () {
  // Hide cookie overlay
  cookieOverlay.style.display = "none";
  // Store in local storage that user accepted cookies
  localStorage.setItem("cookiesAccepted", true);
});

document.getElementById("no").addEventListener("click",  function () {
  // Hide cookie overlay
  cookieOverlay.style.display = "none";
  // Store in local storage that user denied cookies
  localStorage.setItem("cookiesAccepted", false);
});




