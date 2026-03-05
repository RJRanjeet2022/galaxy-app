const canvas = document.getElementById('solarCanvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const sunRadius = 30;

const planets = [
    { name: 'Mercury', radius: 5, distance: 60, speed: 0.04, color: '#8c7853' },
    { name: 'Venus', radius: 8, distance: 80, speed: 0.035, color: '#ffc649' },
    { name: 'Earth', radius: 10, distance: 100, speed: 0.03, color: '#6b93d6' },
    { name: 'Mars', radius: 7, distance: 120, speed: 0.025, color: '#c1440e' },
    { name: 'Jupiter', radius: 20, distance: 160, speed: 0.02, color: '#d8ca9d' },
    { name: 'Saturn', radius: 18, distance: 200, speed: 0.015, color: '#fad5a5' },
    { name: 'Uranus', radius: 12, distance: 240, speed: 0.01, color: '#4fd0e7' },
    { name: 'Neptune', radius: 12, distance: 280, speed: 0.008, color: '#4b70dd' }
];

let angle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw sun
    ctx.beginPath();
    ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffdd44';
    ctx.fill();

    // Draw orbits (optional, for beauty)
    planets.forEach(planet => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();
    });

    // Draw planets
    planets.forEach(planet => {
        const x = centerX + Math.cos(angle * planet.speed) * planet.distance;
        const y = centerY + Math.sin(angle * planet.speed) * planet.distance;
        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
    });

    angle += 0.01;
    requestAnimationFrame(draw);
}

draw();