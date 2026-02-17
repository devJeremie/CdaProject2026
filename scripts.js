// ============================================
// GESTIONNAIRE DE MENU MOBILE
// ============================================

// Sélectionne le bouton toggle et le menu mobile
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Ouvre/ferme le menu mobile au clic sur le bouton hamburger
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Ferme le menu mobile au clic sur un lien de navigation
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Ferme le menu mobile en cliquant à l'extérieur (bouton OU menu)
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// ============================================
// SCROLL FLUIDE AMÉLIORÉ
// ============================================

// Scroll fluide vers les sections pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        // Ignore le lien "#" vide
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EFFET HEADER SCROLL
// ============================================

// Applique une classe 'scrolled' au header après 50px de scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;

    if (scrolled > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// SURLIGNAGE LIEN ACTIF (Navigation)
// ============================================

// Met à jour le lien actif selon la section visible à l'écran
function updateActiveMenuItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

    let currentSection = '';
    const scrollPos = window.pageYOffset + 100;

    // Détecte quelle section est visible (avec marge 100px)
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Active le lien correspondant à la section visible
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Écouteurs pour mise à jour continue + au chargement
window.addEventListener('scroll', updateActiveMenuItem);
window.addEventListener('load', updateActiveMenuItem);

// ============================================
// EFFET PARALLAX FORMES GÉOMÉTRIQUES
// ============================================

// Animation parallaxe des formes décoratives (.shape) au scroll
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3; // Vitesse variable par forme
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// ============================================
// ANIMATION PULSATION LIGNES NEURONALES
// ============================================

// Animation continue des lignes neurales avec délai séquentiel
const neuralLines = document.querySelectorAll('.neural-line');
setInterval(() => {
    neuralLines.forEach((line, index) => {
        setTimeout(() => {
            // Phase d'apparition/expansion
            line.style.opacity = '1';
            line.style.transform = 'scaleX(1.2)';
            setTimeout(() => {
                // Phase de disparition/rétraction
                line.style.opacity = '0.2';
                line.style.transform = 'scaleX(0.5)';
            }, 200);
        }, index * 300); // Délai progressif entre chaque ligne
    });
}, 2000); // Cycle complet toutes les 2 secondes

// ============================================
// GÉNÉRATEUR DE PARTICULES QUANTIQUES
// ============================================

// Crée une particule quantique animée flottante
function createQuantumParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100vh';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '-1';
    particle.style.boxShadow = `0 0 10px ${particle.style.background}`;

    document.body.appendChild(particle);

    const duration = Math.random() * 3000 + 2000;
    const drift = (Math.random() - 0.5) * 200;

    // Animation : du bas vers le haut avec dérive latérale
    particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
        { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// Génère une nouvelle particule toutes les 1,5 secondes
setInterval(createQuantumParticle, 1500);

// ============================================
// OBSERVER D'INTERSECTION (Animations d'entrée)
// ============================================

// Configuration pour déclencher les animations à 10% de visibilité
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Observe les éléments et déclenche l'animation d'apparition
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialise et observe les éléments animés (.timeline-content, .hexagon)
document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// ============================================
// EFFET SUBMISSION FORMULAIRE (Futuriste)
// ============================================

// Animation cyberpunk du bouton de soumission
document.querySelector('.submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    this.innerHTML = 'TRANSMITTING...';
    this.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';

    setTimeout(() => {
        this.innerHTML = 'TRANSMISSION COMPLETE';
        this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';

        setTimeout(() => {
            this.innerHTML = 'TRANSMIT TO MATRIX';
            this.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
        }, 2000);
    }, 1500);
});
