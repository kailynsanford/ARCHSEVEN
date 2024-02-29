const states = {
    SITTING = 0,
    WALK_RIGHT: 1,
    WALK_LEFT: 2,
}

class State {
    constructor(state){
        this.state = state;
    }
}

    export class SITTING extends State {
    constructor(player){
        super('SITTING');
        this.player = player;
    }
    enter(){
        this.player.frameY = 0;

    }
    handleInput(input){
        if (input.includes('ArrowLeft') || input.includes ('ArrowRight')){
            this.player.setState(states.SITTING);
        }
    }
}

export class WALK_RIGHT extends State {
    constructor(player){
        super('WALK_RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;

    }
    handleInput(input){
        if (input.includes('ArrowRight')){
            this.player.setState(states.WALK_RIGHT);
        }
    }
}