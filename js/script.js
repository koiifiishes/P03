//Reference used: https://codepen.io/sinisag/pen/vPEajE
// Modal Setup
var modal = document.getElementById('modal');

// Closes the modal if X is clicked
var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// Reference used: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2
// Closes the modal when clicked outside of modal
window.onclick = function(e){
  if (e.target == modal){
    modal.style.display = "none";
  }
}

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});

// Reference Used: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
