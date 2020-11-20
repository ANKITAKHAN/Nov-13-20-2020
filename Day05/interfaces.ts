interface IPlayer {
    name: string;
    play: () => void;
}

class Cricketer implements IPlayer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public play() {
        console.log(`${this.name} is playing cricket`);
        
    }
}

let virat: IPlayer = new Cricketer('Virat');
virat.play();

let sachin: IPlayer = {
    name: 'Sachin',
    play() {
        console.log('Master blaster');
        
    }
};