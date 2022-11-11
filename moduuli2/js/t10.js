
const number_of_candidates = parseInt(prompt('How many candidates?'));

const candidates = [];
for (let i = 0; i < number_of_candidates; i++) {
    const name = prompt(`Name of candidate ${i}`);
    const candidate = {
    name: name,
    votes: 0
    }
    candidates.push(candidate);
}

const number_of_voters = parseInt(prompt('How many voters?'));

for (let i = 0; i < number_of_voters; i++) {
    const vote = prompt('Who do you vote for?');
    for (let candidate of candidates) {
        if (vote === candidate.name) {candidate.votes++}
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log('results:')
for (let candidate of candidates) {
    console.log(candidate.name, ':', candidate.votes, 'votes');
}