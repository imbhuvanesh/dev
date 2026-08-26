(() => {
	'use strict';

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

		<section class="about-section profile-container section-reveal" aria-label="About">
			<h2>About</h2>
			<p class="about-text">Hi, I'm <strong>Bhuvanesh A</strong>.</p>
			<p class="about-text">I'm a <strong>Creative Developer & Freelancer</strong> who loves combining technology and creativity to build things that are not just functional, but also interesting to experience.</p>
			<p class="about-text">I have around <strong>2 years of experience as an Assistant Developer and Freelancer</strong>, working across <strong>web development, application development, creative frontend experiences, design, video editing, and digital content creation</strong>.</p>
			<p class="about-text">For me, every project is a chance to explore something new. I like bringing <strong>code, visual design, storytelling, experimentation, and problem-solving</strong> together to turn simple ideas into something meaningful and visually appealing.</p>
			<p class="about-text">I'm still learning, still experimenting, and still creating.</p>
			<blockquote class="about-text"><strong>"Learning and growing every day!"</strong></blockquote>
		</section>

		<div class="section-spacer" aria-hidden="true"></div>

		<section class="skills-section profile-container section-reveal" aria-label="Skills and tools">
			<h3>Tech Stack</h3>
			<div class="profile-icon-row"><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=css" alt="CSS" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=flutter" alt="Flutter" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=git" alt="Git" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=html" alt="HTML" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=java" alt="Java" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=js" alt="JavaScript" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=linux" alt="Linux" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=python" alt="Python" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=supabase" alt="Supabase" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" loading="lazy"></span></div>
			<h3>Creative Tools</h3>
			<div class="profile-icon-row"><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=ae" alt="Adobe After Effects" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=ps" alt="Adobe Photoshop" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=pr" alt="Adobe Premiere Pro" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=figma" alt="Figma" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=notion" alt="Notion" loading="lazy"></span><span class="icon-wrap"><img src="https://skillicons.dev/icons?i=obsidian" alt="Obsidian" loading="lazy"></span></div>
		</section>
		<div class="section-spacer" aria-hidden="true"></div>

		<section class="projects-section profile-container section-reveal" aria-label="Projects portfolio">
			<h2>Projects</h2>
			<div class="projects-grid">
				<article class="project-card">
					<div class="project-number">01</div>
					<div class="project-icons">
						<a class="project-icon" href="https://imbhuvanesh.github.io/B-minds/" target="_blank" rel="noopener noreferrer" aria-label="B-Minds Web Version" title="Web Version">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
						</a>
					</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/B-minds/" target="_blank" rel="noopener noreferrer">B-Minds</a>
				</article>

				<article class="project-card">
					<div class="project-number">02</div>
					<div class="project-icons">
						<a class="project-icon" href="https://imbhuvanesh.github.io/Bhuvanesh/" target="_blank" rel="noopener noreferrer" aria-label="Bhuvanesh Portfolio Web Version" title="Web Version">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
						</a>
					</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/Bhuvanesh/" target="_blank" rel="noopener noreferrer">Bhuvanesh Portfolio</a>
				</article>

				<article class="project-card">
					<div class="project-number">03</div>
					<div class="project-icons">
						<a class="project-icon" href="https://imbhuvanesh.github.io/DG/" target="_blank" rel="noopener noreferrer" aria-label="DIGI NEXUZ Web Version" title="Web Version">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
						</a>
					</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/DG/" target="_blank" rel="noopener noreferrer">DIGI NEXUZ</a>
				</article>

				<article class="project-card">
					<div class="project-number">04</div>
					<div class="project-icons">
						<a class="project-icon" href="https://imbhuvanesh.github.io/ifixon/" target="_blank" rel="noopener noreferrer" aria-label="IFIXON Web Version" title="Web Version">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
						</a>
					</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/ifixon/" target="_blank" rel="noopener noreferrer">IFIXON</a>
				</article>

				<article class="project-card">
					<div class="project-number">05</div>
					<div class="project-icons">
						<a class="project-icon" href="https://imbhuvanesh.github.io/sunflower/" target="_blank" rel="noopener noreferrer" aria-label="Sunflower Web Version" title="Web Version">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
						</a>
					</div>
					<a class="project-button" href="https://imbhuvanesh.github.io/sunflower/" target="_blank" rel="noopener noreferrer">Sunflower</a>
				</article>

				<article class="project-card">
					<div class="project-number">06</div>
					<div class="project-icons">
						<a class="project-icon" href="https://github.com/imbhuvanesh/Bills" target="_blank" rel="noopener noreferrer" aria-label="Bills App Source Code" title="App Source">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
						</a>
					</div>
					<a class="project-button" href="https://github.com/imbhuvanesh/Bills" target="_blank" rel="noopener noreferrer">Bills</a>
				</article>
		</div>
		</section>
		<div class="section-spacer" aria-hidden="true"></div>

		<section class="contact-section profile-container section-reveal" aria-label="Contact">
			<h2>Contact</h2>
			<div class="contact-links-row">
				<a class="contact-link" href="mailto:iambhuvanesh.a@gmail.com" aria-label="Email: iambhuvanesh.a@gmail.com" title="Email"><img src="Images/icons/gmail.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="https://github.com/imbhuvanesh/" target="_blank" rel="noopener noreferrer" aria-label="GitHub: github.com/imbhuvanesh/" title="GitHub"><img src="Images/icons/github.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="https://instagram.com/bhuvy._" target="_blank" rel="noopener noreferrer" aria-label="Instagram: @bhuvy._" title="Instagram"><img src="Images/icons/instragram.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="https://linkedin.com/in/im-bhuvanesh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn: linkedin.com/in/im-bhuvanesh" title="LinkedIn"><img src="Images/icons/linkedin.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="https://maps.google.com/?q=Chennai,Tamil Nadu,India" target="_blank" rel="noopener noreferrer" aria-label="Location: Chennai, Tamil Nadu, India" title="Location"><img src="Images/icons/maps.png" alt="" loading="lazy"></a>
				<a class="contact-link" href="tel:+919944725379" aria-label="Phone: +91 99447 25379" title="Phone"><img src="Images/icons/phone.png" alt="" loading="lazy"></a>
			</div>
			<h3>Support My Work</h3>
			<a class="support-button" href="https://buymeacoffee.com/bhuvaneshh" target="_blank" rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" loading="lazy"></a>
		</section>
		<div class="section-spacer" aria-hidden="true"></div>
		<div class="section-spacer" aria-hidden="true"></div>`;

		/* ---- About word highlight: top to bottom, cumulative ---- */
		const aboutStrongWords = Array.from(document.querySelectorAll('.about-text strong'));
		let aboutWordIndex = 0;
		const highlightAboutWord = () => {
			if (aboutWordIndex >= aboutStrongWords.length) return;
			aboutStrongWords[aboutWordIndex].classList.add('word-active');
			aboutWordIndex++;
		};
		const aboutObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const aboutInterval = setInterval(() => {
						if (aboutWordIndex >= aboutStrongWords.length) { clearInterval(aboutInterval); return; }
						highlightAboutWord();
					}, 3000);
					aboutObserver.disconnect();
				}
			});
		}, { threshold: 0.3 });
		const aboutSection = journey.querySelector('.about-section');
		if (aboutSection) aboutObserver.observe(aboutSection);

		/* ---- Cinematic staggered reveal ---- */
		const restoreHero = () => document.documentElement.classList.remove('content-revealed');

		const cascadeSections = [
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
					return;
				}

				if (!item.el.classList.contains('is-visible') && !pending.has(index)) {
					const prevReady = !prev || prev.classList.contains('is-visible');
					if (!prevReady) return;

				const delay = staggerDelay;
				pending.set(index, setTimeout(() => {
					pending.delete(index);
					item.el.classList.add('is-visible');
				}, delay));
				}
			};

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