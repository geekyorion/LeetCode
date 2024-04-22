/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const nextSteps = (step) => {
        const steps = [];
        for(let i = 0 ; i < step.length; i++) {
            const next = step.slice(0, i) +  ((parseInt(step[i])+1)%10).toString() +step.slice(i+1);
            const prev = step.slice(0, i) +  ((parseInt(step[i])+9)%10).toString() +step.slice(i+1);
            steps.push(next, prev);
        }
        return steps;
    };
    
    const set = new Set(deadends);
    const queue = [['0000', 0]];
    while(queue.length) {
        const [curr, turns] = queue.shift();
        if(curr === target) {
            return turns;
        }
        if(set.has(curr)) {
            continue;
        }
        if(!set.has(curr)) {
            set.add(curr);
        }
        const nextStep = nextSteps(curr);
        for(let step of nextStep) {
            if(!set.has(step)) {
                queue.push([step, turns+1]); 
            }
        }
    }
    return -1;
};