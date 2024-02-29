import { Player } from './player.js';
import { InputHandler } from './input.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx=canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
     // Create an image element
     const img = new Image();

     // Set the source of the image
     img.src = './images/purgatory.png';

     // When the image loads, draw it on the canvas
     img.onload = function() {
         ctx.drawImage(img, 0, 0); // Draw the image at position (0, 0)
     }
    class Game {
        constructor (width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update(deltaTime){
            this.player.update(this.input.keys, deltaTime);
        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height)
    console.log(game);
    let lastTime = 0;

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.update(deltaTime); 
        game.draw(ctx)
        requestAnimationFrame(animate);
    }
    animate(0);
})
// Define Enemy class
class Enemy {
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update() {
        // Update enemy logic, such as movement, animation, etc.
    }
}

// Initialize game
window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Load enemy sprite image
    const enemyImage = new Image();
    enemyImage.src = '/images/skull.png'; // Replace with actual path

    enemyImage.onload = function() {
        const enemy = new Enemy(100, 100, 50, 50, enemyImage); // Example position and size
        gameLoop(); // Start the game loop

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            enemy.update();
            enemy.draw(ctx);
            requestAnimationFrame(gameLoop);
        }
    };
};

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    // Player object
    const player = {
        x: 50,
        y: canvas.height - 100,
        width: 50,
        height: 50,
        speed: 5,
        color: 'blue'
    };

    // Enemy object
    const enemy = {
        x: canvas.width - 100,
        y: canvas.height - 100,
        width: 50,
        height: 50,
        speed: 3,
        color: 'red'
    };

    // Main game loop
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    // Update game state
    function update() {
        // Move the enemy
        enemy.x -= enemy.speed;

        // Check for collision with the player
        if (isColliding(player, enemy)) {
            // Handle collision (e.g., decrease player health)
            console.log('Collision with enemy!');
        }
    }

    // Draw game elements
    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw player
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);

        // Draw enemy
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    }

    // Check for collision between two rectangles
    function isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }

    // Start the game loop
    gameLoop();
});
