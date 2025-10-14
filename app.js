const sphere = document.getElementById('sphere');

let rotation = 0;
let tiltX = 0;
let tiltY = 0;

function animate() {
    rotation += 0.01;
    sphere.style.setProperty('--rotateY', rotation + 'rad');
    sphere.style.setProperty('--rotateX', tiltX + 'deg');
    sphere.style.setProperty('--rotateZ', tiltY + 'deg');
    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    tiltX = (e.clientY - centerY) / centerY * 45;
    tiltY = (e.clientX - centerX) / centerX * 45;
});