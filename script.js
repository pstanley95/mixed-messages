console.log("Knock knock");
console.log("Who's there?");

// Random options
const whos_there = ["A beaver", "A bat", "A mongoose", "It's me!"];
const whos_there_who = ["Orange you glad I didn't say banana?", "Boy I wish I knew what to say", "This is me coding with Github!"];

// Randome coding
let there_idx = Math.floor(Math.random()*whos_there.length);
let there = whos_there[there_idx];
let response_idx = Math.floor(Math.random()*whos_there_who.length);
let response = whos_there_who[response_idx];

console.log(there);
console.log(there + ", who?");
console.log(response);
