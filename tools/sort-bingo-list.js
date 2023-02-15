const fs = require('fs');

let list = require("./bingo-bongo-bong/data/bingo-bongo-bong/bingo_tasks/60-min-hard.json");

let tasks = list.tasks;

tasks.sort((a, b) => {
	return a.type > b.type;
});

fs.writeFile("sorted.json", JSON.stringify({tasks}, null, "\t"), () => {console.log("Finished sorting")});
