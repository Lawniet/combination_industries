function onClick(e){document.getElementById("img01").src=e.src,document.getElementById("modal01").style.display="block",document.getElementById("caption").innerHTML=e.alt}function w3_open(){"block"===mySidebar.style.display?mySidebar.style.display="none":mySidebar.style.display="block"}function w3_close(){mySidebar.style.display="none"}function plusDivs(e){showDivs(slideIndex+=e)}function showDivs(e){let t,n=document.getElementsByClassName("mySlides");for(e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[slideIndex-1].style.display="block"}function typeWriter(){cont<content.length?(text.textContent+=content.charAt(cont),cont++,setTimeout(typeWriter,speed)):(text.textContent="",cont=0,typeWriter())}function carousel(){var e,t=document.getElementsByClassName("slidesProducts");for(e=0;e<t.length;e++)t[e].style.display="none";myIndex++,myIndex>t.length&&(myIndex=1),t[myIndex-1].style.display="block",setTimeout(carousel,8500)}