export class Player {
    constructor(game){
        this.game = game;
        this.width = 16;
        this.height= 16;
        this.x=0;
        this.y= this.game.height - this.height;
    }
    update(input){
        if (input.includes('ArrowRight')) this.x++;
        else if (input.includes('ArrowLeft')) this.x--;
    }
    draw(context){
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}