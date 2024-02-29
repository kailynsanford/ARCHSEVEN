// Animation handler
function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    // Loop through enemies
    for (var j = 0; j < enemies.length; j++) {
    // Show enemy sprite
    enemies[j].show();
    
    // Make enemy shoot bullets
    enemies[j].shooting();
    }
   
    // Request next animation frame
    requestAnimationFrame(animate);
   }
   
   // Start the animation
   animate();   