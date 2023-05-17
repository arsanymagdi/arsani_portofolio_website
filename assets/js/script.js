window.addEventListener('load', showPopup);

function showPopup() {
  document.getElementById('popupMessage').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popupMessage').style.display = 'none';
}
