// Efeito Typing
const texts = ["Apaixonado por programação.", "Gosto de organizar dados.", "Criativo e Focado."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    
    currentText = texts[count];

    if (!isDeleting) {
        letter = currentText.slice(0, ++index);
    } else {
        letter = currentText.slice(0, --index);
    }

    document.querySelector(".gradient-typing").textContent = letter;

    let timeout = isDeleting ? 100 : 200;

    if (!isDeleting && letter.length === currentText.length) {
        timeout = 2000;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        timeout = 500;
    }

    setTimeout(type, timeout);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

// Scroll Reveal Animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on initial load

// Smooth link click behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
