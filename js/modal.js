// Get the modal
var modal = document.getElementById("qrReader");

// Get the button that opens the modal
var btn = document.getElementById("qrModal");

var close = document.getElementById("qrClose");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "inline-block";
}

// When the user clicks close button, close the modal
close.onclick = function() {
  modal.style.display = "none";
}
