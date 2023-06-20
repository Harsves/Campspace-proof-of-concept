// Get the popup element
let popup = document.getElementById("cs-widget")

// Get the link that opens the popup
let link = document.getElementById("cs-open-popup")

// Get the close button
let closeBtn = popup.querySelector(".cs-close-popup")

// When the user clicks the link, open the popup
link.onclick = function() {
  closeBtn.style.display = "block"

  if (popup.style.display === "block") {
    popup.style.display = "none"
  } else {
    popup.style.display = "block"
  }
}

// When the user clicks the link, show the close button

// When the user clicks on the close button, close the popup
closeBtn.onclick = function() {
  popup.style.display = "none"
}

// When the user clicks anywhere outside of the popup, close it
window.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.style.display = "none"
  }
})