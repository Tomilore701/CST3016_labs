import Dice from './dice.js';
import YatzyEngine from './YatzyEngine.js';



class YatzyGame {
    constructor() {
        this.dice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
        this.yatzyEngine = new YatzyEngine();
        this.round = 1;
        this.maxRounds = 13;
        this.rollCount = 0;
        this.currentScore = 0;
    }

    
    rollAllDice() {
        this.rollCount++;
        return this.dice.map(dice => dice.roll());
    }

    
    keepDice(indexes) {
        
    }

    
    endRound() {
        
        this.rollCount = 0;
        this.round++;
    }

    
    isGameOver() {
        return this.round > this.maxRounds;
    }

    
    getGameState() {
        return {
            round: this.round,
            rollCount: this.rollCount,
            currentScore: this.currentScore
        };
    }
}


export default YatzyGame;
