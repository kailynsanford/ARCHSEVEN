const states = {
    SITTING: 0,
    RUNNING: 0,
    JUMPING: 2,
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

    }
    handleInput(input){

    }
}