// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger menu
            this.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

// Smooth scroll for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


// ===========================
// Demo Modal
// Opens any link marked with data-demo in an overlay instead of a new tab.
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('demo-modal');
    if (!modal) return;

    const frame = modal.querySelector('.demo-modal-frame');
    const title = modal.querySelector('.demo-modal-title');
    const openLink = modal.querySelector('.demo-modal-open');
    const closeBtn = modal.querySelector('.demo-modal-close');
    let lastFocused = null;

    function openDemo(href, label) {
        lastFocused = document.activeElement;
        title.textContent = label || 'Demo';
        openLink.href = href;
        frame.src = href;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        closeBtn.focus();
    }

    function closeDemo() {
        modal.hidden = true;
        frame.src = 'about:blank';  // stop the demo running behind the page
        document.body.classList.remove('modal-open');
        if (lastFocused) lastFocused.focus();
    }

    // Progressive enhancement: without JS these links just open the page normally.
    document.querySelectorAll('[data-demo]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openDemo(this.getAttribute('href'), this.getAttribute('data-demo'));
        });
    });

    modal.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-close')) {
            closeDemo();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.hidden) {
            closeDemo();
        }
    });
});
