// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlistForm');
    const successMessage = document.getElementById('successMessage');
    const supabaseUrl = "https://nzjutgueylbydnixkcjl.supabase.co";
    const supabaseKey = "sbp_48921ad1e555c34a37440cf7f7c91018dc3891ef";
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            
            // Here you would typically send this data to your backend
            // For now, we'll just show the success message
            console.log('Form submitted:', { name, email, interest });

             const { data, error } = await supabase
                    .from('waitlist')
                    .insert([{ name, email, interest }]);

            if (error) {
                alert("Something went wrong.");
                console.error(error);
                return;
    }
            
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
            
            // Optional: Store in localStorage for demo purposes
            localStorage.setItem('urbanweaveWaitlist', JSON.stringify({
                name,
                email,
                interest,
                timestamp: new Date().toISOString()
            }));
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections except hero
    const sections = document.querySelectorAll('.vision-section, .roadmap-section, .cta-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Parallax effect for gradient orbs
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });
    
    function animateOrbs() {
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            orb.style.transform = `translate(${currentX * speed}px, ${currentY * speed}px)`;
        });
        
        requestAnimationFrame(animateOrbs);
    }
    
    animateOrbs();
    
    // Add active state to footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });
    
    // Detect scroll position and add subtle header effect if needed
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Add any scroll-based effects here
        // For example, you could fade in/out elements or change opacity
        
        lastScrollY = currentScrollY;
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Handle window resize for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Any resize-specific logic can go here
        }, 250);
    });
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add smooth reveal effect for cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.roadmap-card');
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.2
    });
    
    cards.forEach(card => {
        cardObserver.observe(card);
    });
});

// Easter egg: Konami code or special interaction
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated - add special effect
        document.body.style.animation = 'rainbow 5s linear';
        console.log('🎉 You found the easter egg! The weave is strong with you.');
    }
});
