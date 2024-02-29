const states = {
    SITTING: 0,
    WALK_RIGHT: 1,
    WALK_LEFT: 2,
}

class State {
    constructor(state){
        this.state = state;
    }
}

    export class Sitting extends State {
    constructor(player){
        super('SITTING');
        this.player = player;
    }
    enter(){
        this.player.frameY = 0;
        this.player.maxFrame = 0;

    }
    handleInput(input){
        if (input.includes('ArrowRight')) {
            this.player.setState(states.WALK_RIGHT);
        } else if (input.includes('ArrowLeft')) {
            this.player.setState(states.WALK_LEFT);
        }
    }
}

export class WalkRight extends State {
    constructor(player){
        super('WALK_RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;
        this.player.maxFrame = 1;
    }
    handleInput(input){
        if (!input.includes('ArrowRight')){
            this.player.setState(states.SITTING);
        }
    }
}
export class WalkLeft extends State {
    constructor(player){
        super('WALK_LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 2;
        this.player.maxFrame = 1;
    }
    handleInput(input){
        if (!input.includes('ArrowLeft')){
            this.player.setState(states.SITTING);
        }
    }
}