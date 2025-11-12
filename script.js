// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    }
});

function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    if (cursorOutline) {
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
    }
    
    requestAnimationFrame(animateOutline);
}

animateOutline();

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .collection-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursorDot) cursorDot.style.transform = 'scale(2)';
        if (cursorOutline) cursorOutline.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        if (cursorDot) cursorDot.style.transform = 'scale(1)';
        if (cursorOutline) cursorOutline.style.transform = 'scale(1)';
    });
});

// Smooth Scroll for navigation dots
const dots = document.querySelectorAll('.nav-dots .dot');
const sections = document.querySelectorAll('section');

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active dot on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === current) {
            dot.classList.add('active');
        }
    });
});

// Parallax effect for hero background text
const heroBgText = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
    if (heroBgText) {
        const scrolled = window.pageYOffset;
        heroBgText.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.05}deg)`;
    }
});

// Animate hero title words
const heroWords = document.querySelectorAll('.hero-title .word');
heroWords.forEach((word, index) => {
    word.style.opacity = '0';
    word.style.transform = 'translateY(100%)';
    
    setTimeout(() => {
        word.style.transition = 'all 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
    }, 200 + (index * 150));
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe vision items
const visionItems = document.querySelectorAll('.vision-item');
visionItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = `all 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${index * 0.1}s`;
    observer.observe(item);
});

// Observe vision title lines
const visionLines = document.querySelectorAll('.vision-title .line');
visionLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-100px)';
    line.style.transition = `all 1s cubic-bezier(0.77, 0, 0.175, 1) ${index * 0.15}s`;
    observer.observe(line);
});

// Collection item hover sound effect (visual feedback)
const collectionItems = document.querySelectorAll('.collection-item');
collectionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Form interactions
const form = document.querySelector('.modern-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Create success message
            const successMsg = document.createElement('div');
            successMsg.textContent = 'MESSAGE SENT SUCCESSFULLY';
            successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #ff3366;
                color: white;
                padding: 30px 60px;
                font-weight: 900;
                letter-spacing: 3px;
                z-index: 10001;
                animation: fadeInOut 3s ease;
            `;
            
            document.body.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.remove();
                form.reset();
            }, 3000);
        }
    });
}

// Add fadeInOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        10%, 90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(style);

// Scroll to top functionality
const backToTop = document.querySelector('.footer-right a');
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Add glitch effect to logo on hover
const logo = document.querySelector('.logo-vertical');
if (logo) {
    logo.addEventListener('mouseenter', function() {
        let count = 0;
        const glitchInterval = setInterval(() => {
            this.style.transform = `translateX(${Math.random() * 4 - 2}px) translateY(${Math.random() * 4 - 2}px)`;
            count++;
            if (count > 10) {
                clearInterval(glitchInterval);
                this.style.transform = 'translateX(0) translateY(0)';
            }
        }, 50);
    });
}

console.log('ATELIER NOIR - Fashion redefined');
