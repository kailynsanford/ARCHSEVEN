window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    // Create an image element for the enemy sprite
    const enemyImg = new Image();
    enemyImg.src = './images/skull.png'; // Change the path to your enemy sprite

    class Enemy {
        constructor(x, y, speed) {
            this.x = x;
            this.y = y;
            this.speed = speed;
        }

        update(deltaTime) {
            // Move towards the middle (assuming the canvas is centered)
            const targetX = canvas.width / 2;
            const targetY = canvas.height / 2;
            const dx = targetX - this.x;
            const dy = targetY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const velocityX = (dx / distance) * this.speed * deltaTime;
            const velocityY = (dy / distance) * this.speed * deltaTime;

            this.x += velocityX;
            this.y += velocityY;
        }

        draw(context) {
            context.drawImage(enemyImg, this.x, this.y);
        }
    }

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
            this.enemies = []; // Array to store enemies
            this.spawnTimer = 0; // Timer for enemy spawning
            this.spawnInterval = 2000; // Interval between enemy spawns (in milliseconds)
        }

        update(deltaTime) {
            this.player.update(this.input.keys, deltaTime);

            // Update enemies
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
            });

            // Spawn enemies
            this.spawnTimer += deltaTime;
            if (this.spawnTimer >= this.spawnInterval) {
                this.spawnEnemy();
                this.spawnTimer = 0;
            }
        }

        draw(context) {
            this.player.draw(context);

            // Draw enemies
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
        }

        spawnEnemy() {
            // Spawn enemies randomly on the canvas
            const x = Math.random() * this.width;
            const y = Math.random() * this.height;
            const speed = 0.1; // Adjust speed as needed
            const enemy = new Enemy(x, y, speed);
            this.enemies.push(enemy);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime); 
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate(0);
});