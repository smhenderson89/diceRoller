const d6 = [1, 2, 3, 4, 5, 6]

function roll(n, stress) {
    let diceResult = [];
    let stressResult = [];
    let sixResult = 0;
    let oneResult = 0;
    let stressRoll = 0;

    for (let i = 0; i < n; i++) {
        let roll = d6[Math.floor(Math.random()*d6.length)];
        if (roll == 6) {
            sixResult++;
        } 
        diceResult.push(roll)
    }

    for (let j = 0; j < stress; j++) {
        let roll = d6[Math.floor(Math.random()*d6.length)];
        if (roll == 6) {
            sixResult++;
        }
        if (roll == 1) {
            oneResult++;
        }
        stressResult.push(roll)
    }

    console.log(`\u001b[32m ${diceResult} :     Success : ${sixResult}`);
    console.log(`\u001b[31m ${stressResult} :     Failures: ${oneResult}`);

    if (oneResult >= 1) {
        let roll = d6[Math.floor(Math.random()*d6.length)];
        stressRoll += stress + roll
        console.log(`\u001b[31m Panic Roll : Roll(${roll}) + Stress(${stress}) = ${stressRoll}`)
    }

}

roll(9, 6)