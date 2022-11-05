const eyes = document.querySelectorAll('.eye');
const anchor = document.getElementById('anchor');
const rekt = anchor.getBoundingClientRect();

const anchorX = rekt.left + rekt.width / 2; 
const anchorY = rekt.top + rekt.height / 2; 

const rotation = (mx, my, bx, by) => {
	const dx = bx - mx;
	const dy = by - my;

	const rad = Math.atan2(dy, dx);
	const deg = rad * 180 / Math.PI;

	return deg;
}

document.addEventListener('mousemove', (event) => {

	// console.log(event);

	const pos_x = event.clientX;
	const pos_y = event.clientY;

	const axis = rotation(pos_x, pos_y, anchorX, anchorY);

	eyes.forEach(eye => {
		eye.style.transform = `rotate(${90 + axis}deg)`;
	})
})
