// Smooth scroll para seção de preço
function scrollToPrice() {
    document.getElementById('price').scrollIntoView({ behavior: 'smooth' });
}

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-in').forEach(el => {
    observer.observe(el);
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        answer.classList.toggle('open');
        icon.style.transform = answer.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Parallax effect for mockup
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const mockup = document.querySelector('.hero-mockup');
    if (mockup) {
        mockup.style.transform = `translateY(${scrolled * 0.5}px) perspective(1000px) rotateY(-5deg)`;
    }
});
