

const navLinks = document.querySelector(".navLinks");
const body = document.body;

// Menu toggle functions
function showMenu() {
    navLinks.classList.toggle("active");
    body.classList.toggle("lock-scroll", navLinks.classList.contains("active"));
}

function hideMenu() {
    navLinks.classList.remove("active");
    body.classList.remove("lock-scroll");
}

// Reusable Intersection Observer function
function createObserver(selector, onEnter, onLeave) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                onEnter(entry.target);
            } else {
                onLeave(entry.target);
            }
        });
    });
    elements.forEach((el) => observer.observe(el));
}

// Configuration array for observers
const observerConfigs = [
    {
        selector: ".hidden",
        onEnter: (el) => el.classList.add("show"),
        onLeave: (el) => el.classList.remove("show"),
    },

    {
        selector: ".smaller",
        onEnter: (el) => el.classList.add("normal"),
        onLeave: (el) => el.classList.remove("normal"),
    },
];

// Initialize all observers
observerConfigs.forEach((config) => 
    createObserver(config.selector, config.onEnter, config.onLeave)
);
