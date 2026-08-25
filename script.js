(() => {
	const preloaderStartedAt = performance.now();
	const preloader = document.getElementById('preloader');
	const inkLayer = document.querySelector('.preloader-ink');
	const setInkDimensions = () => {
		if (!inkLayer) return;
		const frameProportion = 1.78;
		const frames = 25;
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const layerWidth = viewportWidth / viewportHeight > frameProportion ? viewportWidth : viewportHeight * 1.2 * frameProportion;
		const layerHeight = viewportWidth / viewportHeight > frameProportion ? viewportWidth / frameProportion : viewportHeight * 1.2;
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

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const svgNamespace = 'http://www.w3.org/2000/svg';
	const createLiquidFilter = () => {
		if (document.getElementById('liquid-distortion')) return;
		const svg = document.createElementNS(svgNamespace, 'svg');
		svg.setAttribute('aria-hidden', 'true');
		svg.style.position = 'absolute';
		svg.style.width = '0';
		svg.style.height = '0';
		svg.style.overflow = 'hidden';
		svg.innerHTML = `
			<filter id="liquid-distortion">
				<feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="2" seed="7" result="noise">
					<animate attributeName="baseFrequency" dur="10s" values="0.012 0.03;0.024 0.045;0.012 0.03" repeatCount="indefinite" />
				</feTurbulence>
				<feDisplacementMap id="liquid-displacement-map" in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
			</filter>
		`;
		document.body.appendChild(svg);
	};
	createLiquidFilter();

	const liquidTargets = document.querySelectorAll('[data-liquid-reveal], .panel, .project-row, .social-list a, .skill-group, .timeline-item, .hero-wrap, .wordmark, .cta, .support-link, .menu-link, .contact-button');
	const hoverTargets = document.querySelectorAll('[data-liquid-hover], .project-row, .social-list a, .cta, .support-link, .menu-link, .contact-button');

	if (!reducedMotion) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(({ target, isIntersecting }) => {
				if (!isIntersecting) return;
				target.classList.add('is-liquid-visible');
				observer.unobserve(target);
			});
		}, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

		liquidTargets.forEach((target, index) => {
			target.style.transitionDelay = `${index * 60}ms`;
			observer.observe(target);
		});
	} else {
		liquidTargets.forEach((target) => target.classList.add('is-liquid-visible'));
	}

	hoverTargets.forEach((target) => {
		target.addEventListener('pointerenter', () => {
			if (!reducedMotion) target.classList.add('liquid-hover');
		});
		target.addEventListener('pointerleave', () => target.classList.remove('liquid-hover'));
		target.addEventListener('focus', () => {
			if (!reducedMotion) target.classList.add('liquid-hover');
		});
		target.addEventListener('blur', () => target.classList.remove('liquid-hover'));
	});

	const displacementMap = document.getElementById('liquid-displacement-map');
	if (displacementMap && !reducedMotion) {
		let strength = 0;
		const pulseDisplacement = () => {
			strength = strength >= 28 ? 6 : strength + 3;
			displacementMap.setAttribute('scale', String(strength));
			requestAnimationFrame(pulseDisplacement);
		};
		requestAnimationFrame(pulseDisplacement);
	}

	const iconSlugs = {Java:'java',HTML:'html',CSS:'css',JavaScript:'js',Python:'python','Node.js':'nodejs',MySQL:'mysql',Supabase:'supabase',Flutter:'flutter',Git:'git',Linux:'linux','VS Code':'vscode',Photoshop:'ps','Premiere Pro':'pr','After Effects':'ae','Motion Graphics':'ae','Visual Design':'ps'};
	document.querySelectorAll('.chips b').forEach(chip => { const name = chip.textContent.trim(); const slug = iconSlugs[name]; chip.setAttribute('aria-label', name); if (!slug) return; const icon = document.createElement('img'); icon.src = `https://skillicons.dev/icons?i=${slug}`; icon.alt = ''; chip.textContent = ''; chip.append(icon); });
	const socialIcons = {GH:'github.png',in:'linkedin.png',ig:'instragram.png'};
	document.querySelectorAll('.social-list a > span:first-child').forEach(mark => { const iconFile = socialIcons[mark.textContent.trim()]; if (!iconFile) return; mark.setAttribute('aria-label', mark.textContent.trim()); mark.textContent = ''; const icon = document.createElement('img'); icon.src = `Images/icons/${iconFile}`; icon.alt = ''; mark.append(icon); });
	const support = document.querySelector('.support-link > span');
	if (support) { support.setAttribute('aria-label', 'Buy Me a Coffee'); support.textContent = ''; const icon = document.createElement('img'); icon.src = 'https://cdn.simpleicons.org/buymeacoffee/FFDD00'; icon.alt = ''; support.append(icon); }
	document.querySelectorAll('.project-link').forEach(link => { link.textContent = 'VIEW PROJECT ↗'; });
	const contactDetails = document.querySelector('.contact-details');
	if (contactDetails) { const contact = document.createElement('a'); contact.className = 'contact-button'; contact.href = 'mailto:iambhuvanesh.a@gmail.com'; contact.innerHTML = 'CONTACT ME <span>↗</span>'; contactDetails.append(contact); }

	const journey = document.querySelector('.journey');
	if (journey) {
		journey.innerHTML = `<section class="profile-reveal profile-container" aria-label="Developer profile">
			<img class="typing-svg" src="https://readme-typing-svg.herokuapp.com?font=Google+Sans&size=38&duration=3000&pause=1000&color=FFFFFF&center=true&vCenter=true&width=600&lines=Hello+World!;I+am+Bhuvanesh!;Developer!;Freelancer!" alt="Hello World, I am Bhuvanesh, Developer, Freelancer">
			<h3>Tech Stack</h3>
			<div class="profile-icon-row"><img src="https://skillicons.dev/icons?i=java" alt="Java"><img src="https://skillicons.dev/icons?i=html" alt="HTML"><img src="https://skillicons.dev/icons?i=css" alt="CSS"><img src="https://skillicons.dev/icons?i=js" alt="JavaScript"><img src="https://skillicons.dev/icons?i=python" alt="Python"><img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL"><img src="https://skillicons.dev/icons?i=supabase" alt="Supabase"><img src="https://skillicons.dev/icons?i=flutter" alt="Flutter"><img src="https://skillicons.dev/icons?i=git" alt="Git"><img src="https://skillicons.dev/icons?i=linux" alt="Linux"><img src="https://skillicons.dev/icons?i=vscode" alt="VS Code"></div>
			<h3>Creative Tools</h3>
			<div class="profile-icon-row"><img src="https://skillicons.dev/icons?i=figma" alt="Figma"><img src="https://skillicons.dev/icons?i=ps" alt="Adobe Photoshop"><img src="https://skillicons.dev/icons?i=pr" alt="Adobe Premiere Pro"><img src="https://skillicons.dev/icons?i=ae" alt="Adobe After Effects"></div>
			<h2>Contact</h2>
			<div class="profile-details" aria-label="Contact links">
				<a href="https://maps.google.com/?q=Chennai,Tamil Nadu,India" target="_blank" rel="noreferrer" aria-label="Location: Chennai, Tamil Nadu, India" title="Location"><img src="Images/icons/maps.png" alt=""></a>
				<a href="mailto:iambhuvanesh.a@gmail.com" aria-label="Email: iambhuvanesh.a@gmail.com" title="Email"><img src="Images/icons/gmail.png" alt=""></a>
				<a href="tel:+919944725379" aria-label="Phone: +91 99447 25379" title="Phone"><img src="Images/icons/phone.png" alt=""></a>
				<a href="https://github.com/imbhuvanesh/" target="_blank" rel="noreferrer" aria-label="GitHub: github.com/imbhuvanesh/" title="GitHub"><img src="Images/icons/github.png" alt=""></a>
				<a href="https://linkedin.com/in/im-bhuvanesh" target="_blank" rel="noreferrer" aria-label="LinkedIn: linkedin.com/in/im-bhuvanesh" title="LinkedIn"><img src="Images/icons/linkedin.png" alt=""></a>
				<a href="https://instagram.com/bhuvy._" target="_blank" rel="noreferrer" aria-label="Instagram: @bhuvy._" title="Instagram"><img src="Images/icons/instragram.png" alt=""></a>
			</div>
			<h3>Support My Work</h3>
			<a class="support-button" href="https://buymeacoffee.com/bhuvaneshh" target="_blank" rel="noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"></a>
		</section>`;
		const profileReveal = journey.querySelector('.profile-reveal');
		if (profileReveal) {
			const updateProfileReveal = () => {
				const profileTop = profileReveal.getBoundingClientRect().top;
				profileReveal.classList.toggle('is-visible', profileTop <= window.innerHeight * 0.85);
			};
			window.addEventListener('scroll', updateProfileReveal, { passive: true });
			updateProfileReveal();
		}
		const touchTargets = journey.querySelectorAll('.profile-details a, .support-button');
		touchTargets.forEach((touchTarget) => {
			touchTarget.addEventListener('pointerdown', (event) => {
				if (event.pointerType !== 'touch') return;
				event.preventDefault();
				touchTarget.classList.remove('is-bursting');
				void touchTarget.offsetWidth;
				touchTarget.classList.add('is-bursting');
				setTimeout(() => {
					if (touchTarget.target === '_blank') {
						window.open(touchTarget.href, '_blank', 'noopener,noreferrer');
					} else {
						window.location.href = touchTarget.href;
					}
				}, reducedMotion ? 0 : 220);
			});
		});
	}

	const aboutPanel = document.querySelector('.panel-about');
	const heroWrap = document.querySelector('.hero-wrap');
	let heroScrollFrame;
	const updateHeroReveal = () => {
		const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
		const scrollProgress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
		const focusProgress = Math.sin(scrollProgress * Math.PI);
		const revealAbout = window.scrollY > 40;
		document.documentElement.style.setProperty('--hero-scroll-scale', (1 + focusProgress * 0.2).toFixed(3));
		document.documentElement.style.setProperty('--hero-scroll-opacity', (1 - focusProgress * 0.78).toFixed(3));
		document.documentElement.style.setProperty('--content-scroll-opacity', (1 - focusProgress).toFixed(3));
		document.documentElement.classList.toggle('loop-reveal', revealAbout);
		if (aboutPanel) {
			aboutPanel.style.removeProperty('opacity');
			aboutPanel.classList.toggle('is-revealed', revealAbout);
			aboutPanel.classList.toggle('is-active', revealAbout);
		}
	};
	const scheduleHeroReveal = () => {
		if (heroScrollFrame) cancelAnimationFrame(heroScrollFrame);
		heroScrollFrame = requestAnimationFrame(updateHeroReveal);
	};
	window.addEventListener('scroll', scheduleHeroReveal, { passive: true });
	window.addEventListener('resize', scheduleHeroReveal, { passive: true });
	updateHeroReveal();
})();
