const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const inputTasks = input;

const outputTasks = [];

inputTasks.forEach(task => {
	const resourceIdentifier = task.internalName.split(".");

	const taskObject = {
		type: null,
		weight: null,
		value: null
	};

	if (task.weight && task.weight !== 0) {
		if (resourceIdentifier[0] === "item" || resourceIdentifier[0] === "block") {
			taskObject.type = "bongo.item";
			taskObject.weight = task.weight;
			taskObject.value = {
				item: resourceIdentifier[1] + ":" + resourceIdentifier[2]
			}
		}

		outputTasks.push(taskObject);
	}
});

fs.writeFile(outputPath, JSON.stringify({tasks: outputTasks}, null, "\t"), () => {console.log(`Finished parsing task file, generated ${outputTasks.length} tasks`)});
