const dynamicText = document.querySelector("H2 span");
const words = ["Sportovec", "Vývojář",  "Student",  "Hráč"];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false; //  proměnná, která určuje, zda se slovo právě maže (true) nebo píše (false).

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    //spočítání znaků  
    dynamicText.textContent = currentChar;
    //příčítáni slov
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    //odčítání slov
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    //přidání nového slova
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
