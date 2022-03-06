/* Modal Image Gallery */
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

/* Toggle between showing and hiding the sidebar when clicking the menu icon */

function w3_open() {
    if (mySidebar.style.display === "block") {
        mySidebar.style.display = "none";
    } else {
        mySidebar.style.display = "block";
    }
}

/* Close the sidebar with the close button */
function w3_close() {
    mySidebar.style.display = "none";
}
/* Slideshow media gallery */
function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function typeWriter () {
  if(cont < content.length){
    text.textContent += content.charAt(cont);
    cont++;
    setTimeout(typeWriter, speed);
  }else{
    text.textContent = '';
    cont = 0;
    typeWriter();
  }
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("slidesProducts");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 8500);    
}