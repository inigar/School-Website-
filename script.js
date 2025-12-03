function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText = "Your message has been sent!";
    document.getElementById("formMessage").style.color = "green";

    setTimeout(() => {
        document.getElementById("formMessage").innerText = "";
    }, 3000);

    this.reset();
});

/* Scroll Animation */
const sections = document.querySelectorAll(".section, .leadership, .gallery");

function showSections() {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);
