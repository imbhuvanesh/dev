(() => {
	const root = document.documentElement;
	const panels = [...document.querySelectorAll('.panel')];
	const hero = document.querySelector('.hero-wrap');
	const wordmark = document.querySelector('.wordmark');
	const intro = document.querySelector('.intro-copy');
	const label = document.querySelector('#progress-label');
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	let frame = 0;
	let loopTimer;
	let isLooping = false;
	let autoReturning = false;
	const iconSlugs = {Java:'java',HTML:'html',CSS:'css',JavaScript:'js',Python:'python','Node.js':'nodejs',MySQL:'mysql',Supabase:'supabase',Flutter:'flutter',Git:'git',Linux:'linux','VS Code':'vscode',Photoshop:'ps','Premiere Pro':'pr','After Effects':'ae','Motion Graphics':'ae','Visual Design':'ps'};
	document.querySelectorAll('.chips b').forEach(chip => { const name = chip.textContent.trim(); const slug = iconSlugs[name]; chip.setAttribute('aria-label', name); if (!slug) return; const icon = document.createElement('img'); icon.src = `https://skillicons.dev/icons?i=${slug}`; icon.alt = ''; chip.textContent = ''; chip.append(icon); });
	const socialIcons = {GH:['github','FFFFFF'],in:['linkedin','0A66C2'],ig:['instagram','E4405F']};
	document.querySelectorAll('.social-list a > span:first-child').forEach(mark => { const item = socialIcons[mark.textContent.trim()]; if (!item) return; mark.setAttribute('aria-label', mark.textContent.trim()); mark.textContent = ''; const icon = document.createElement('img'); icon.src = `https://cdn.simpleicons.org/${item[0]}/${item[1]}`; icon.alt = ''; mark.append(icon); });
	const support = document.querySelector('.support-link > span');
	if (support) { support.setAttribute('aria-label', 'Buy Me a Coffee'); support.textContent = ''; const icon = document.createElement('img'); icon.src = 'https://cdn.simpleicons.org/buymeacoffee/FFDD00'; icon.alt = ''; support.append(icon); }
	const serviceIcons = {Development:'visualstudiocode',Creative:'adobecreativecloud','Digital Experiences':'framer'};
	document.querySelectorAll('.service-card h3').forEach(title => { const slug = serviceIcons[title.textContent.trim()]; if (!slug) return; title.setAttribute('aria-label', title.textContent.trim()); const icon = document.createElement('img'); icon.src = `https://cdn.simpleicons.org/${slug}/9B6CFF`; icon.alt = ''; title.textContent = ''; title.append(icon); });
	document.querySelectorAll('.project-link').forEach(link => { link.textContent = 'VIEW PROJECT  ↗'; });
	const contactDetails = document.querySelector('.contact-details');
	if (contactDetails) { const contact = document.createElement('a'); contact.className = 'contact-button'; contact.href = 'mailto:iambhuvanesh.a@gmail.com'; contact.innerHTML = 'CONTACT ME <span>↗</span>'; contactDetails.append(contact); }
	const resize = () => root.style.setProperty('--journey-height', `${Math.max(window.innerHeight, 560) * (2.1 + panels.length * .9)}px`);
	const ease = value => value < .5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 2) / 2;
	const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
	const panelOrigins = panels.map((_, index) => ({ x: ((index * 47) % 121) - 60, y: ((index * 83) % 101) - 50 }));
	const slashVariants = panels.map((_, index) => ({ angle: -28 + ((index * 37) % 57), top: 28 + ((index * 43) % 45) }));
	const render = () => {
		frame = 0;
		const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll) : 0;
		const contentProgress = clamp((progress - .14) / .72);
		const returnProgress = clamp((progress - .86) / .14);
		if (progress > .985 && !isLooping && !reducedMotion) {
			isLooping = true;
			root.classList.add('loop-reveal');
			clearTimeout(loopTimer);
			loopTimer = setTimeout(() => { autoReturning = true; window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => { isLooping = false; autoReturning = false; root.classList.remove('loop-reveal'); }, 1100); }, 800);
		}
		if (progress < .92 && isLooping && !autoReturning) { clearTimeout(loopTimer); isLooping = false; root.classList.remove('loop-reveal'); }
		const heroProgress = clamp(progress / .25);
		const finalHero = returnProgress * (1 - returnProgress * .18);
		hero.style.transform = `translate(-50%, -50%) scale(${1 + heroProgress * 1.8 + finalHero * .42})`;
		hero.style.opacity = progress < .08 ? 1 : progress < .14 ? 1 - clamp((progress - .08) / .06) : 0;
		wordmark.style.transform = `translate(-50%, calc(-50% + ${progress * -8}vh)) scale(${1 + progress * .08})`;
		if (intro) intro.style.opacity = clamp(1 - progress * 8);
		if (label) label.textContent = progress < .14 ? 'INTRO' : progress > .86 ? 'RETURN' : panels[Math.min(panels.length - 1, Math.floor(contentProgress * panels.length))].dataset.label;
		let screenSlashOpacity = 0;
		let screenSlashProgress = 0;
		let screenSlashVariant = slashVariants[0];
		panels.forEach((panel, index) => {
			const slashVariant = slashVariants[index];
			const origin = panelOrigins[index];
			const center = (index + .5) / panels.length;
			const focus = clamp(1 - Math.abs(contentProgress - center) * 4.2);
			const entrance = ease(clamp((contentProgress - index / panels.length) * panels.length * 1.8));
			const exit = ease(clamp((contentProgress - (index + .82) / panels.length) * panels.length * 1.8));
			const opacity = Math.min(1, entrance) * (1 - exit * .82) * (1 - returnProgress * .82);
			const slashOpacity = Math.min(1, entrance) * (1 - exit) * (1 - returnProgress);
			panel.style.setProperty('--slash-progress', entrance);
			panel.style.setProperty('--slash-opacity', slashOpacity);
			if (slashOpacity > screenSlashOpacity) { screenSlashOpacity = slashOpacity; screenSlashProgress = entrance; screenSlashVariant = slashVariant; }
			panel.style.opacity = reducedMotion ? (index === Math.floor(contentProgress * panels.length) ? 1 : 0) : opacity;
			panel.style.transform = `translate(calc(-50% + ${(1 - entrance) * origin.x}px), ${35 - entrance * 35 + (1 - entrance) * origin.y + exit * -18}px) scale(${1.1 - focus * .1})`;
			const motionAmount = Math.min(1, Math.abs(1 - entrance) + exit);
			panel.style.filter = `blur(${motionAmount * 3.5}px)`;
			panel.style.pointerEvents = focus > .42 ? 'auto' : 'none';
		});
		root.style.setProperty('--screen-slash-opacity', screenSlashOpacity);
		root.style.setProperty('--screen-slash-progress', screenSlashProgress);
		root.style.setProperty('--screen-slash-angle', `${screenSlashVariant.angle}deg`);
		root.style.setProperty('--screen-slash-top', `${screenSlashVariant.top}%`);
	};
	const onScroll = () => { if (!frame) frame = requestAnimationFrame(render); };
	resize(); render();
	window.addEventListener('resize', () => { resize(); render(); }, { passive: true });
	window.addEventListener('scroll', onScroll, { passive: true });
})();
