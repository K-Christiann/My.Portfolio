 // Add floating animation to shapes
 document.querySelectorAll('.shape').forEach((shape, index) => {
    shape.style.animation = `float ${15 + index * 2}s infinite`;
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;
    shapes.forEach((shape, index) => {
        shape.style.transform = `translateY(${scrolled * 0.1 * (index + 1)}px)`;
    });
});