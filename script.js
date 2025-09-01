document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const setupMobileNav = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav ul');
        
        // Create mobile menu toggle button if it doesn't exist
        if (!document.querySelector('.mobile-nav-toggle')) {
            const mobileNavToggle = document.createElement('button');
            mobileNavToggle.classList.add('mobile-nav-toggle');
            mobileNavToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
            // ARIA attributes for accessibility
            const navId = nav.id || 'primary-menu';
            if (!nav.id) nav.id = navId;
            mobileNavToggle.setAttribute('aria-controls', navId);
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.setAttribute('aria-label', 'Toggle navigation');
            header.querySelector('.container').appendChild(mobileNavToggle);
            
            mobileNavToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
                const icon = this.querySelector('i');
                const expanded = nav.classList.contains('active');
                if (expanded) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                    mobileNavToggle.setAttribute('aria-expanded', 'true');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    };

    // Initialize date pickers if they exist
    if (document.querySelector('.datepicker')) {
        const today = new Date();
        const maxDate = new Date();
        maxDate.setDate(today.getDate() + 30); // Allow booking up to 30 days in advance
        
        flatpickr('.datepicker', {
            minDate: "today",
            maxDate: maxDate,
            dateFormat: "Y-m-d",
            disable: [
                function(date) {
                    // Disable Sundays
                    return date.getDay() === 0;
                }
            ]
        });
    }

    // FAQ accordion functionality
    const setupFaqAccordion = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems.length > 0) {
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                if (!question || !answer) return;

                // ARIA
                question.setAttribute('role', 'button');
                question.setAttribute('tabindex', '0');
                question.setAttribute('aria-expanded', 'false');
                const answerId = 'faq-' + Math.random().toString(36).slice(2,8);
                answer.id = answerId;
                question.setAttribute('aria-controls', answerId);

                // Start collapsed
                item.classList.remove('open');
                answer.style.maxHeight = '0px';

                function toggle() {
                    const open = item.classList.toggle('open');
                    question.setAttribute('aria-expanded', open ? 'true' : 'false');
                    if (open) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    } else {
                        answer.style.maxHeight = '0px';
                    }
                }

                question.addEventListener('click', toggle);
                question.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
                });

                // Add chevron icon
                if (!question.querySelector('i')) {
                    const icon = document.createElement('i');
                    icon.classList.add('fas', 'fa-chevron-down');
                    question.appendChild(icon);
                }
            });
        }
    };

    // Smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // Add active class to current page in navigation
    const highlightCurrentPage = () => {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('nav ul li a');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // Slideshow functionality for About page
    const setupSlideshow = () => {
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (!slideshowContainer) return;

        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        let currentSlide = 0;
        let slideInterval;

        // Function to show specific slide
        const showSlide = (index) => {
            // Remove active class from all slides and indicators
            slides.forEach(slide => {
                slide.classList.remove('active', 'prev');
            });
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });

            // Add prev class to current slide for exit animation
            if (slides[currentSlide]) {
                slides[currentSlide].classList.add('prev');
            }

            // Update current slide index
            currentSlide = index;

            // Add active class to new slide and indicator
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        };

        // Function to go to next slide
        const nextSlide = () => {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        };

        // Function to go to previous slide
        const prevSlide = () => {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        };

        // Add click events to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(index);
                startAutoSlide();
            });
        });

        // Auto-slide functionality
        const startAutoSlide = () => {
            slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
        };

        // Pause auto-slide on hover
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Resume auto-slide when mouse leaves
        slideshowContainer.addEventListener('mouseleave', () => {
            startAutoSlide();
        });

        // Initialize slideshow
        if (slides.length > 0) {
            showSlide(0);
            startAutoSlide();
        }
    };

    // Initialize all functionality
    setupMobileNav();
    setupFaqAccordion();
    setupSmoothScrolling();
    highlightCurrentPage();
    setupSlideshow();

    // Add responsive styles for mobile
    const addResponsiveStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                header .container {
                    position: relative;
                }
                
                .mobile-nav-toggle {
                    display: block;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: var(--light-text);
                    cursor: pointer;
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                nav ul {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    text-align: center;
                    padding: 20px 0;
                }
                
                nav ul.active {
                    display: flex;
                }
                
                nav ul li {
                    margin: 10px 0;
                }
                
                /* Stack service items vertically on mobile */
                .service-item, .service-item:nth-child(even) {
                    flex-direction: column;
                }
                
                .contact-container {
                    grid-template-columns: 1fr;
                }
                
                .team-grid, .testimonials-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    };

    addResponsiveStyles();

    // Lead form -> redirect to booking with prefilled params
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = new FormData(leadForm);
            const params = new URLSearchParams();
            ['name','phone','zip','serviceType'].forEach(k=>{
                if (data.get(k)) params.set(k, data.get(k));
            });
            params.set('prefill','1');
            window.location.href = 'booking.html?' + params.toString();
        });
    }

    // Progressive WebP swap: replace PNG/JPG with WEBP if supported and file exists
    (function enableWebPSwap(){
        const supportsWebP = () => new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(img.width > 0);
            img.onerror = () => resolve(false);
            img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICgAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        });

        const toWebp = src => src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

        supportsWebP().then(ok => {
            if (!ok) return;
            const candidates = document.querySelectorAll('img.auto-webp');
            candidates.forEach(img => {
                const webpSrc = img.dataset.webp || toWebp(img.getAttribute('src'));
                if (!/\.webp$/i.test(webpSrc)) return;
                const test = new Image();
                test.onload = () => { img.setAttribute('src', webpSrc); };
                test.src = webpSrc; // if 404, onload won't fire
            });
        });
    })();

    // Animate Our Service Process on scroll into view
    const serviceProcess = document.querySelector('.service-process');
    if (serviceProcess && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    serviceProcess.classList.add('in-view');
                    io.unobserve(serviceProcess);
                }
            });
        }, { threshold: 0.25 });
        io.observe(serviceProcess);
    } else if (serviceProcess) {
        // Fallback: activate on load
        serviceProcess.classList.add('in-view');
    }

    // Language switcher: EN/UK
    (function i18nSetup(){
        const getDict = () => (window.I18N_DICTIONARY || {});
        const getLang = () => localStorage.getItem('lang') || 'en';
        const setLang = (l) => localStorage.setItem('lang', l);

        // Keep original text nodes so language can switch back and forth
        const ORIG = new WeakMap();
        function captureOriginals(root) {
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
            let n;
            while ((n = walker.nextNode())) {
                if (!ORIG.has(n)) {
                    ORIG.set(n, n.nodeValue);
                }
            }
        }

        function translateNode(node, lang) {
            const dict = getDict();
            const map = dict[lang];
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
            let current;
            while ((current = walker.nextNode())) {
                const original = ORIG.get(current) ?? current.nodeValue;
                if (!ORIG.has(current)) ORIG.set(current, original);
                if (lang === 'en' || !map) {
                    current.nodeValue = original;
                    continue;
                }
                const key = original.trim();
                if (key && map[key]) {
                    // Replace exact original trimmed segment, preserving surrounding whitespace
                    current.nodeValue = original.replace(key, map[key]);
                } else {
                    current.nodeValue = original;
                }
            }
        }

        function applyLang(lang){
            document.documentElement.setAttribute('lang', lang === 'uk' ? 'uk' : 'en');
            translateNode(document.body, lang);
            // Update active state
            document.querySelectorAll('.lang-switch a').forEach(a=>{
                a.classList.toggle('active', a.dataset.lang === lang);
            });
        }

        // Wire buttons
        document.querySelectorAll('.lang-switch a').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = a.dataset.lang;
                setLang(lang);
                applyLang(lang);
            });
        });

        // Initial
        captureOriginals(document.body);
        applyLang(getLang());
        window.addEventListener('i18n:ready', () => applyLang(getLang()));
    })();

    // Hide all booking links: "Book Now" and "Book … Repair" buttons
    (function hideBookLinks(){
        const anchors = Array.from(document.querySelectorAll('a'));
        anchors.forEach(a => {
            const txt = (a.textContent || '').trim();
            if (/^Book Now$/i.test(txt) || /^Book\s+.+\s+Repair$/i.test(txt)) {
                a.style.display = 'none';
            }
        });
    })();
});
