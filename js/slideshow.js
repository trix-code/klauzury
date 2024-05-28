let slideIndex = 1;  // aktualni pozice
showSlides(slideIndex);


function plusSlides(n) {  // Předchod na předchozí nebo následující snímek
  showSlides(slideIndex += n); //  Přidá hodnotu n k aktuálnímu slideIndex (muze byt zaporna/kladna)
}

function currentSlide(n) { // primi prechod na snimek
  showSlides(slideIndex = n); // nastavi SLIDEINDEX na hodnotu n
}

function showSlides(n) { //zobrazuje snimek na pozici n
  let i;
  let slides = document.getElementsByClassName("slide"); // nacte elementy s classou slides
  let dots = document.getElementsByClassName("dot"); // natce elementy s classou dot
  if (n > slides.length) {slideIndex = 1}  // pokud je n vetsi nez pocet snimku, nastavi slideindex=1 (prvni snimek)
  if (n < 1) {slideIndex = slides.length} // pokud n je mensi nez 1, nastavi slideindex na posledni snimek
  for (i = 0; i < slides.length; i++) {  // skryje vsechny snimky
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // odstrani tridu activate ze vsech tecek 
  }
  slides[slideIndex-1].style.display = "block"; //zobrazi aktualni snimek
  dots[slideIndex-1].className += " active";  // prida tridu activate k aktualni tecce , coz zapne aktualni snimek
}

// slide.leght = pocet snimku