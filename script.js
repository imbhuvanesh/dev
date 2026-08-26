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
	   Profile section content
	   ----------------------------------------------------------- */
	const journey = document.querySelector('.journey');
	if (journey) {
		journey.innerHTML = `<section class="profile-reveal profile-container" aria-label="Developer profile">
			<img class="typing-svg" src="https://readme-typing-svg.herokuapp.com?font=Google+Sans&size=38&duration=3000&pause=1000&color=FFFFFF&center=true&vCenter=true&width=600&lines=Hello+World!;I+am+Bhuvanesh!;Developer!;Freelancer!" alt="Hello World, I am Bhuvanesh, Developer, Freelancer" width="600" height="63" loading="eager">
			<h3>Tech Stack</h3>
			<div class="profile-icon-row"><img src="https://skillicons.dev/icons?i=java" alt="Java" loading="lazy"><img src="https://skillicons.dev/icons?i=html" alt="HTML" loading="lazy"><img src="https://skillicons.dev/icons?i=css" alt="CSS" loading="lazy"><img src="https://skillicons.dev/icons?i=js" alt="JavaScript" loading="lazy"><img src="https://skillicons.dev/icons?i=python" alt="Python" loading="lazy"><img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" loading="lazy"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" loading="lazy"><img src="https://skillicons.dev/icons?i=supabase" alt="Supabase" loading="lazy"><img src="https://skillicons.dev/icons?i=flutter" alt="Flutter" loading="lazy"><img src="https://skillicons.dev/icons?i=git" alt="Git" loading="lazy"><img src="https://skillicons.dev/icons?i=linux" alt="Linux" loading="lazy"><img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" loading="lazy"></div>
			<h3>Creative Tools</h3>
			<div class="profile-icon-row"><img src="https://skillicons.dev/icons?i=figma" alt="Figma" loading="lazy"><img src="https://skillicons.dev/icons?i=ps" alt="Adobe Photoshop" loading="lazy"><img src="https://skillicons.dev/icons?i=pr" alt="Adobe Premiere Pro" loading="lazy"><img src="https://skillicons.dev/icons?i=ae" alt="Adobe After Effects" loading="lazy"><img src="https://skillicons.dev/icons?i=notion" alt="Notion" loading="lazy"><img src="https://skillicons.dev/icons?i=obsidian" alt="Obsidian" loading="lazy"></div>
			<h2>Contact</h2>
			<a class="contact-link" href="https://maps.google.com/?q=Chennai,Tamil Nadu,India" target="_blank" rel="noopener noreferrer" aria-label="Location: Chennai, Tamil Nadu, India" title="Location"><img src="Images/icons/maps.png" alt="" loading="lazy"></a>
			<a class="contact-link" href="mailto:iambhuvanesh.a@gmail.com" aria-label="Email: iambhuvanesh.a@gmail.com" title="Email"><img src="Images/icons/gmail.png" alt="" loading="lazy"></a>
			<a class="contact-link" href="tel:+919944725379" aria-label="Phone: +91 99447 25379" title="Phone"><img src="Images/icons/phone.png" alt="" loading="lazy"></a>
			<a class="contact-link" href="https://github.com/imbhuvanesh/" target="_blank" rel="noopener noreferrer" aria-label="GitHub: github.com/imbhuvanesh/" title="GitHub"><img src="Images/icons/github.png" alt="" loading="lazy"></a>
			<a class="contact-link" href="https://linkedin.com/in/im-bhuvanesh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn: linkedin.com/in/im-bhuvanesh" title="LinkedIn"><img src="Images/icons/linkedin.png" alt="" loading="lazy"></a>
			<a class="contact-link" href="https://instagram.com/bhuvy._" target="_blank" rel="noopener noreferrer" aria-label="Instagram: @bhuvy._" title="Instagram"><img src="Images/icons/instragram.png" alt="" loading="lazy"></a>
			<h3>Support My Work</h3>
			<a class="support-button" href="https://buymeacoffee.com/bhuvaneshh" target="_blank" rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" loading="lazy"></a>
		</section>`;

		const profileReveal = journey.querySelector('.profile-reveal');

		/* reveal the profile card once it's scrolled into view */
		if (profileReveal) {
			const revealHero = () => document.documentElement.classList.add('content-revealed');
			const restoreHero = () => document.documentElement.classList.remove('content-revealed');

			const updateProfileReveal = () => {
				const profileTop = profileReveal.getBoundingClientRect().top;
				const isVisible = profileTop <= window.innerHeight * 0.85;
				profileReveal.classList.toggle('is-visible', isVisible);
				if (!isVisible) {
					/* content scrolled back out of view: bring the hero back
					   before the profile card starts fading in again */
					restoreHero();
				} else if (reducedMotion) {
					/* no CSS transition will fire without motion, so hide immediately */
					revealHero();
				}
			};

			/* once the profile card's own reveal transition finishes (i.e. it's
			   fully faded/settled into place), smoothly fade the hero out so it
			   never lingers behind or around the content */
			profileReveal.addEventListener('transitionend', (event) => {
				if (event.target !== profileReveal || event.propertyName !== 'opacity') return;
				if (profileReveal.classList.contains('is-visible')) revealHero();
			});

			window.addEventListener('scroll', updateProfileReveal, { passive: true });
			updateProfileReveal();
		}

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