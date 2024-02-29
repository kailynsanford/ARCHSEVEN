// Enemy class
class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  // Update enemy position
  update() {
    // Move towards the center
    const dx = canvas.width / 2 - this.x;
    const dy = canvas.height / 2 - this.y;
    const angle = Math.atan2(dy, dx);
    this.x += Math.cos(angle) * this.speed;
    this.y += Math.sin(angle) * this.speed;
  }

  // Draw enemy
  draw() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Array to store enemies
const enemies = [];

// Function to spawn enemies
function spawnEnemies() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speed = Math.random() * 2 + 1; // Random speed between 1 and 3
  const enemy = new Enemy(x, y, speed);
  enemies.push(enemy);
}

// Update and draw loop
function loop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Spawn enemies
  if (Math.random() < 0.02) { // Adjust the probability as needed
    spawnEnemies();
  }

  // Update and draw enemies
  enemies.forEach(enemy => {
    enemy.update();
    enemy.draw();
  });

  // Request next frame
  requestAnimationFrame(loop);
}

// Start the loop
loop();
