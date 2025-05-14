// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Ensure body doesn't create scrollbars during animations
    document.body.style.overflow = 'hidden';
    
    // Simple animations for a smooth experience
    
    // Animate cards with a simple fade-in
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            force3D: true,
            clearProps: "all"
        });
    });

    const nav = document.querySelector('nav');
    gsap.from(nav, {
        autoAlpha: 0,
        y: -20,
        duration: 0.5,
        delay: 1.5,
        force3D: true,
        clearProps: "all"
    });

    const footer = document.querySelector('footer');
    gsap.from(footer, {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
        delay: 1.5,
        force3D: true,
        clearProps: "all",
        onComplete: function() {
            // Re-enable scrolling after animations complete
            document.body.style.overflow = '';
        }
    });
    
}); 