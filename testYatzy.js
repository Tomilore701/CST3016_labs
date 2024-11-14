import YatzyGame from './YatzyGame.js';

const game = new YatzyGame();

async function rollDice() {
    try {
        const response = await fetch('http://localhost:3000/roll-dices');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        console.log("Dice roll results from server:", data.rolls);
    } catch (error) {
        console.error("Failed to fetch dice values:", error);
    }
}

rollDice();
