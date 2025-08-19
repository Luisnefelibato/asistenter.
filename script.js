 // Parallax Effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            document.querySelectorAll('.parallax-element').forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
            
            // Floating stars parallax
            document.querySelectorAll('.star').forEach((star, index) => {
                const speed = (index + 1) * 0.1;
                star.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(element => {
            observer.observe(element);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Dynamic gradient animation based on scroll
        window.addEventListener('scroll', () => {
            const scrollPercentage = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
            const hue1 = 270 + (scrollPercentage * 60);
            const hue2 = 200 + (scrollPercentage * 60);
            
            document.documentElement.style.setProperty('--primary-gradient', 
                `linear-gradient(135deg, hsl(${hue1}, 70%, 60%) 0%, hsl(${hue1 + 20}, 80%, 65%) 50%, hsl(${hue2}, 85%, 60%) 100%)`
            );
        });