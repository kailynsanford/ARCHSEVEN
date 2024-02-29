const states = {
    SITTING = 0,
    walkRight: 1,
    walkLeft: 2,
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

export class walkRight extends State {
    constructor(player){
        super('walkRight');
        this.player = player;
    }
    enter(){
        this.player.frameY = 1;

    }
    handleInput(input){
        if (input.includes('ArrowRight')){
            this.player.setState(states.walkRight);
        }
    }
}