import { Sitting } from './playerStates.js';

export class Player {
    constructor(game){
        this.game = game;
        this.width = 28;
        this.height= 26;
        this.x=0;
        this.y= this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById('Player')
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.states = [new Sitting(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
    }
    update(input){
        // horizontal movement
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if (this.x < 0) this.x = 0
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        // vertical movement
        if (input.includes ('ArrowUp') && this.onGround()) this.vy -=10;
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;
    }
    draw(context){
       context.drawImage(
        this.image, 
        this.frameX * this.width,
        this.frameY * this.height,
        this.width, 
        this.height, 
        this.x, 
        this.y, 
        this.width, 
        this.height)
    }
    onGround(){
        return this.y >= this.game.height - this.height
    }
}