(() => {
	'use strict';

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	/* -----------------------------------------------------------
	   Preloader
	   ----------------------------------------------------------- */
	const preloaderStartedAt = performance.now();
	const preloader = document.getElementById('preloader');
	const inkLayer = document.querySelector('.preloader-ink');

	const setInkDimensions = () => {
		if (!inkLayer) return;
		const frameProportion = 1.78;
		const frames = 25;
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const isWide = viewportWidth / viewportHeight > frameProportion;
		const layerWidth = isWide ? viewportWidth : viewportHeight * 1.2 * frameProportion;
		const layerHeight = isWide ? viewportWidth / frameProportion : viewportHeight * 1.2;
		inkLayer.style.width = `${layerWidth * frames}px`;
		inkLayer.style.height = `${layerHeight}px`;
	};
	setInkDimensions();
	window.addEventListener('resize', setInkDimensions, { passive: true });

	const hidePreloader = () => {
		if (!preloader) return;
		const remainingTime = Math.max(0, 1000 - (performance.now() - preloaderStartedAt));
		setTimeout(() => {
			preloader.classList.add('is-hidden');
			document.body.classList.remove('is-loading');
			document.body.classList.add('preloader-complete');
			setTimeout(() => preloader.remove(), 700);
		}, remainingTime);
	};
	if (document.readyState === 'complete') {
		hidePreloader();
	} else {
		window.addEventListener('load', hidePreloader, { once: true });
	}

	/* -----------------------------------------------------------
	   Section content
	   ----------------------------------------------------------- */
	const journey = document.querySelector('.journey');
	if (journey) {
		journey.innerHTML = `<div class="section-spacer" aria-hidden="true"></div>

		<section class="intro-section profile-container" aria-label="Introduction">
			<img class="typing-svg" src="https://readme-typing-svg.herokuapp.com?font=Google+Sans&size=38&duration=3000&pause=1000&color=FFFFFF&center=true&vCenter=true&width=600&lines=Hello+World!;I+am+Bhuvanesh!;Developer!;Freelancer!" alt="Hello World, I am Bhuvanesh, Developer, Freelancer" width="600" height="63" loading="eager">
		</section>
		<div class="section-spacer" aria-hidden="true"></div>

		<section class="about-section profile-container section-reveal" aria-label="About">
			<h2>About</h2>
			<p class="about-text">I'm a creative developer and freelancer based in Chennai, passionate about building thoughtful digital experiences that blend clean code with compelling design. From web apps to mobile interfaces, I turn ideas into polished, functional products.</p>
			<p class="about-text">When I'm not coding, you'll find me exploring new tools, experimenting with visual storytelling, and pushing the boundaries of what the web can do.</p>
		</section>
		<div class="section-spacer" aria-hidden="true"></div>

		<section class="skills-section profile-container section-reveal" aria-label="Skills and tools">
			<h3>Tech Stack</h3>
			<div class="profile-icon-row"><img src="https://skillicons.dev/icons?i=java" alt="Java" loading="lazy"><img src="https://skillicons.dev/icons?i=html" alt="HTML" loading="lazy"><img src="https://skillicons.dev/icons?i=css" alt="CSS" loading="lazy"><img src="https://skillicons.dev/icons?i=js" alt="JavaScript" loading="lazy"><img src="https://skillicons.dev/icons?i=python" alt="Python" loading="lazy"><img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" loading="lazy"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" loading="lazy"><img src="https://skillicons.dev/icons?i=supabase" alt="Supabase" loading="lazy"><img src="https://skillicons.dev/icons?i=flutter" alt="Flutter" loading="lazy"><img src="https://skillicons.dev/icons?i=git" alt="Git" loading="lazy"><img src="https://skillicons.dev/icons?i=linux" alt="Linux" loading="lazy"><img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" loading="lazy"></div>
			<h3>Creative Tools</h3>
			<div class="profile-icon-row"><img src="https://skillicons.dev/icons?i=figma" alt="Figma" loading="lazy"><img src="https://skillicons.dev/icons?i=ps" alt="Adobe Photoshop" loading="lazy"><img src="https://skillicons.dev/icons?i=pr" alt="Adobe Premiere Pro" loading="lazy"><img src="https://skillicons.dev/icons?i=ae" alt="Adobe After Effects" loading="lazy"><img src="https://skillicons.dev/icons?i=notion" alt="Notion" loading="lazy"><img src="https://skillicons.dev/icons?i=obsidian" alt="Obsidian" loading="lazy"></div>
		</section>
		<div class="section-spacer" aria-hidden="true"></div>

		<section class="projects-section profile-container section-reveal" aria-label="Projects portfolio">
			<h2>Projects</h2>
			<div class="projects-grid">
				<article class="project-card">
					<div class="project-number">01</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/B-minds/" target="_blank" rel="noopener noreferrer">B-Minds</a>
				</article>

				<article class="project-card">
					<div class="project-number">02</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/Bhuvanesh/" target="_blank" rel="noopener noreferrer">Bhuvanesh Portfolio</a>
				</article>

				<article class="project-card">
					<div class="project-number">03</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/DG/" target="_blank" rel="noopener noreferrer">DIGI NEXUZ</a>
				</article>

				<article class="project-card">
					<div class="project-number">04</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/ifixon/" target="_blank" rel="noopener noreferrer">IFIXON</a>
				</article>

				<article class="project-card">
					<div class="project-number">05</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/sunflower/" target="_blank" rel="noopener noreferrer">Sunflower</a>
				</article>
			</div>
		</section>
		<div class="section-spacer" aria-hidden="true"></div>

		<section class="contact-section profile-container section-reveal" aria-label="Contact">
			<h2>Contact</h2>
			<div class="contact-links-row">
				<a class="contact-link" href="https://maps.google.com/?q=Chennai,Tamil Nadu,India" target="_blank" rel="noopener noreferrer" aria-label="Location: Chennai, Tamil Nadu, India" title="Location"><img src="Images/icons/maps.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="mailto:iambhuvanesh.a@gmail.com" aria-label="Email: iambhuvanesh.a@gmail.com" title="Email"><img src="Images/icons/gmail.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="tel:+919944725379" aria-label="Phone: +91 99447 25379" title="Phone"><img src="Images/icons/phone.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="https://github.com/imbhuvanesh/" target="_blank" rel="noopener noreferrer" aria-label="GitHub: github.com/imbhuvanesh/" title="GitHub"><img src="Images/icons/github.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="https://linkedin.com/in/im-bhuvanesh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn: linkedin.com/in/im-bhuvanesh" title="LinkedIn"><img src="Images/icons/linkedin.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="https://instagram.com/bhuvy._" target="_blank" rel="noopener noreferrer" aria-label="Instagram: @bhuvy._" title="Instagram"><img src="Images/icons/instragram.png" alt="" loading="lazy"></a>
			</div>
			<h3>Support My Work</h3>
			<a class="support-button" href="https://buymeacoffee.com/bhuvaneshh" target="_blank" rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" loading="lazy"></a>
		</section>
		<div class="section-spacer" aria-hidden="true"></div>
		<div class="section-spacer" aria-hidden="true"></div>`;

		/* ---- Cinematic staggered reveal ---- */
		const revealHero = () => document.documentElement.classList.add('content-revealed');
		const restoreHero = () => document.documentElement.classList.remove('content-revealed');

		const cascadeSections = [
			{ el: journey.querySelector('.intro-section'), isIntro: true },
			{ el: journey.querySelector('.about-section') },
			{ el: journey.querySelector('.skills-section') },
			{ el: journey.querySelector('.projects-section') },
			{ el: journey.querySelector('.contact-section') },
		];

		const staggerDelay = 280;
		const pending = new Map();

		cascadeSections.forEach((item, index) => {
			if (!item.el) return;
			const prev = index > 0 ? cascadeSections[index - 1].el : null;
			const isLast = index === cascadeSections.length - 1;

			const update = () => {
				const top = item.el.getBoundingClientRect().top;
				const threshold = isLast ? 0.82 : 0.5;
				const inView = top <= window.innerHeight * threshold;

				if (!inView) {
					if (pending.has(index)) { clearTimeout(pending.get(index)); pending.delete(index); }
					item.el.classList.remove('is-visible');
					if (item.isIntro) restoreHero();
					return;
				}

				if (!item.el.classList.contains('is-visible') && !pending.has(index)) {
					const prevReady = !prev || prev.classList.contains('is-visible');
					if (!prevReady) return;

					const delay = item.isIntro ? 0 : staggerDelay;
					pending.set(index, setTimeout(() => {
						pending.delete(index);
						item.el.classList.add('is-visible');
						if (item.isIntro && reducedMotion) revealHero();
					}, delay));
				}
			};

			if (item.isIntro) {
				item.el.addEventListener('transitionend', (event) => {
					if (event.target !== item.el || event.propertyName !== 'opacity') return;
					if (item.el.classList.contains('is-visible')) revealHero();
				});
			}

			window.addEventListener('scroll', update, { passive: true });
			update();
		});

		/* ---- Stagger individual project cards ---- */
		const projectsSection = journey.querySelector('.projects-section');
		if (projectsSection) {
			const cards = projectsSection.querySelectorAll('.project-card');
			const projectObserver = new MutationObserver(() => {
				if (projectsSection.classList.contains('is-visible')) {
					cards.forEach((card, i) => {
						card.style.transitionDelay = `${i * 120}ms`;
						card.classList.add('card-visible');
					});
				} else {
					cards.forEach(card => {
						card.style.transitionDelay = '';
						card.classList.remove('card-visible');
					});
				}
			});
			projectObserver.observe(projectsSection, { attributes: true, attributeFilter: ['class'] });
		}

		/* ---- Loop: scroll back to hero at page bottom ---- */
		let looping = false;
		const loopThreshold = 80;

		const resetAllSections = () => {
			cascadeSections.forEach((item) => {
				if (item.el) item.el.classList.remove('is-visible');
			});
			pending.forEach((timer) => clearTimeout(timer));
			pending.clear();
			document.querySelectorAll('.project-card').forEach(card => {
				card.style.transitionDelay = '';
				card.classList.remove('card-visible');
			});
			restoreHero();
		};

		const checkLoop = () => {
			if (looping) return;
			const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - loopThreshold;
			if (!atBottom) return;

			looping = true;
			resetAllSections();

			setTimeout(() => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
				setTimeout(() => { looping = false; }, 1200);
			}, 350);
		};

		window.addEventListener('scroll', checkLoop, { passive: true });

	}

	/* -----------------------------------------------------------
	   Hero zoom + content reveal, synced to scroll position.
	   Progress is measured against the viewport height rather than
	   total document height, so it behaves the same on every screen
	   size (including short mobile viewports) and never reverses.
	   ----------------------------------------------------------- */
	const heroWrap = document.querySelector('.hero-wrap');
	let heroScrollFrame = null;

	const updateHeroReveal = () => {
		const revealDistance = Math.max(window.innerHeight, 1);
		const progress = Math.min(Math.max(window.scrollY / revealDistance, 0), 1);
		const revealActive = window.scrollY > 40;

		document.documentElement.style.setProperty('--hero-scroll-scale', (1 + progress * 0.2).toFixed(3));
		document.documentElement.style.setProperty('--hero-scroll-opacity', (1 - progress * 0.78).toFixed(3));
		document.documentElement.style.setProperty('--content-scroll-opacity', progress.toFixed(3));
		document.documentElement.classList.toggle('loop-reveal', revealActive);
	};

	const scheduleHeroReveal = () => {
		if (heroScrollFrame) cancelAnimationFrame(heroScrollFrame);
		heroScrollFrame = requestAnimationFrame(updateHeroReveal);
	};

	if (heroWrap) {
		window.addEventListener('scroll', scheduleHeroReveal, { passive: true });
		window.addEventListener('resize', scheduleHeroReveal, { passive: true });
		updateHeroReveal();
	}
})();