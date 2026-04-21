// Efeito Typing
const texts = ["Especialista em APIs RESTful.", "Arquitetando Sistemas Escaláveis.", "Focado em Rigor Técnico.", "Estudante ADS @ FIAP."];
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

// Custom Cursor & Interaction Logic
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// Hover Effect in interactive elements for the custom cursor
const interactables = document.querySelectorAll('a, button, .timeline-dot');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursorOutline) {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(255, 0, 43, 0.1)';
        }
    });

    el.addEventListener('mouseleave', () => {
        if (cursorOutline) {
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
            cursorOutline.style.backgroundColor = 'transparent';
        }
    });
});

// 3D Tilt Effect on Glass Panels
const tiltPanels = document.querySelectorAll('.glass-panel');

tiltPanels.forEach(panel => {
    panel.addEventListener('mousemove', e => {
        const rect = panel.getBoundingClientRect();
        
        // Calcular posição X e Y do mouse em relação ao elemento
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calcular o quanto rotacionar baseado na distância do centro do elemento
        // O divisor controla o quão dramático é o efeito. Valores maiores = efeito mais leve.
        const rotateX = ((y - centerY) / centerY) * -8; 
        const rotateY = ((x - centerX) / centerX) * 8;
        
        panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    panel.addEventListener('mouseleave', () => {
        // Reset the rotation softly
        panel.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});
