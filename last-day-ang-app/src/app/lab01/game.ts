import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

class Game {
    private target: number;
    private theAttempts: number;
    private theMessage: string;
    private theGameOver: boolean;
    
    constructor() {
        this.target = Math.floor(Math.random() * 100);
        this.theAttempts = 0;
        this.theMessage = '';
        this.theGameOver = false;
    }

    public get attempts(): number {
        return this.theAttempts;
    }
    public get message(): string {
        return this.theMessage;
    }
    public get gameOver(): boolean {
        return this.theGameOver;
    }

    public play(guess: number) {
        this.theAttempts++;
        if (guess > this.target) {
            this.theMessage = 'Aim Lower';
        } else if (guess < this.target) {
            this.theMessage = 'Aim Higher';
        } else {
            this.theMessage = "You've got it!";
            this.theGameOver = true;
        }

    }
}

export default Game;