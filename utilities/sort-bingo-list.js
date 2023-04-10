const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

let tasks = input.tasks;

tasks.sort((a, b) => {
	return a.type > b.type;
});

fs.writeFile(outputPath, JSON.stringify({tasks}, null, "\t"), () => {console.log(`Finished sorting ${tasks.length} tasks`)});
