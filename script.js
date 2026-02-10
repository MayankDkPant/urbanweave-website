// ===============================
// UrbanWeave Main Script
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // MOBILE HAMBURGER MENU
    // ===============================

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Close menu when link clicked (mobile UX improvement)
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }


    // ===============================
    // SMOOTH SCROLL FOR INTERNAL LINKS
    // ===============================

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
(continued)
            }
        });
    });


    // ===============================
    // INTERSECTION OBSERVER (Fade-in Effect)
    // ===============================

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(section);
    });


    // ===============================
    // HEADER SCROLL EFFECT
    // ===============================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.background = "#0b1220";
        } else {
            navbar.style.background = "#0f172a";
        }
    });


    // ===============================
    // PAGE LOAD ANIMATION
    // ===============================

    window.addEventListener("load", function () {
        document.body.classList.add("loaded");
    });

    // ===============================
    // INLINE VIDEO TOGGLE
    // ===============================

    const videoTriggers = document.querySelectorAll("[data-video-trigger]");
    const videoPanel = document.querySelector("[data-video-panel]");
    const videoEmbed = document.querySelector("[data-video-embed]");
    const videoSection = document.getElementById("platform-vision");
    const videoClose = document.querySelector("[data-video-close]");

    const closeVideo = () => {
        if (!videoPanel || !videoEmbed || !videoSection) return;
        videoPanel.classList.remove("is-open");
        videoPanel.setAttribute("aria-hidden", "true");
        videoEmbed.setAttribute("src", "");
        videoSection.classList.remove("is-open");
    };

    const openVideo = (videoId) => {
        if (!videoPanel || !videoEmbed || !videoSection || !videoId) return;
        const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
        videoSection.classList.add("is-open");
        videoEmbed.setAttribute("src", embedUrl);
        videoPanel.classList.add("is-open");
        videoPanel.setAttribute("aria-hidden", "false");
        videoSection.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    videoTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const videoId = trigger.getAttribute("data-video-id");
            openVideo(videoId);
        });
    });

    if (videoClose) {
        videoClose.addEventListener("click", closeVideo);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeVideo();
        }
    });

});


// ===============================
// FUN EASTER EGG (Optional)
// ===============================

let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener("keydown", function (e) {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(",") === konamiSequence.join(",")) {
        document.body.style.animation = "rainbow 5s linear";
        console.log("🎉 Easter Egg Activated.");
    }
});
