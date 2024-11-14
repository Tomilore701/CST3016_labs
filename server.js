const express = require('express');
const Dice = require('./dice');

const app = express();
const PORT = 3000;

app.get('/roll-dices', (req, res) => {
    const dice = new Dice();
    const rollValues = [dice.roll(), dice.roll(), dice.roll(), dice.roll(), dice.roll()];
    res.json({ rolls: rollValues });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
