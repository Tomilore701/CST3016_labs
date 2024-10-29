
class YatzyEngine {
    constructor() {
        
        this.scores = {
            ones: 0,
            twos: 0,
            threes: 0,
            fours: 0,
            fives: 0,
            sixes: 0,
            'three-of-a-kind': 0,
            'four-of-a-kind': 0,
            'full-house': 0,
            'small-straight': 0,
            'large-straight': 0,
            chance: 0,
            yatzy: 0
        };
    }

    
    calculateScore(diceValues, category) {
        switch (category) {
            case 'three-of-a-kind':
                
                break;
            case 'four-of-a-kind':
                
                break;
            
            default:
                return 0;
        }
    }

    
    getScores() {
        return this.scores;
    }
}


export default YatzyEngine;
