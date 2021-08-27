// Get the modal
var modal = document.getElementById("qrreader");

// Get the button that opens the modal
var btn = document.getElementById("qr");

// Get the element that closes the modal
var span = document.getElementById("qrclose");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on close, close the modal
span.onclick = function() {
  modal.style.display = "none";
}
