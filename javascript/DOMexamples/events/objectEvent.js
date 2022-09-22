// Pass an event through to a listener
document.addEventListener('keydown', event => {
	const element = document.querySelector(".demo");

	// Set variables for keydown codes
	const a = 'KeyA';
	const s = 'KeyS';
	const d = 'KeyD';
	const w = 'KeyW';

	// Set a direction for each code
	switch (event.code) {
		case a:
			element.textContent = 'Left';
			break;
		case s:
			element.textContent = 'Down';
			break;
		case d:
			element.textContent = 'Right';
			break;
		case w:
			element.textContent = 'Up';
			break;
	}
});
