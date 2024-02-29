// This is the enemy object
function Enemy(x, y) {
    this.sprite = "skull.png"; // Corrected the string value
    this.x = x;
    this.y = y;
    this.enemyBullets = []; // Array to store enemy bullets
    this.bulletsPerTick = 1; // Number of bullets fired per tick
   
    this.shooting = function () {
    for (var i = 0; i < this.bulletsPerTick; i++) {
    var enemybullet = new EnemyBullet(this.x, this.y);
    this.enemyBullets.push(enemybullet); // Adding the bullet object to the array
    }
    for (var i = 0; i < this.enemyBullets.length; i++) {
    this.enemyBullets[i].show();
    this.enemyBullets[i].move(); // If there is an element in the array, draw and update the bullet
    }
    }
   }
   
   // This is the enemy bullet object
   function EnemyBullet(x, y) {
    this.x1 = x;
    this.y1 = y;
    this.r = 5;
   
    this.show = function () {
    ctx.beginPath();
    ctx.arc(this.x1, this.y1, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath(); // Drawing the bullet
    }
   
    this.move = function () {
    this.x1 -= 5; // Updating the bullet position
    }
   }
   
   // Interval to make the enemy shoot bullets every certain time
   var enemy = new Enemy(50, 50); // Example enemy creation
   setInterval(function () {
    enemy.shooting();
   }, 1000); // Adjust the time interval as needed (1000ms = 1 second)   