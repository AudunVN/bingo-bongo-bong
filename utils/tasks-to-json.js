const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (typeof inputPath === "undefined" || typeof outputPath === "undefined") {
	console.error("Please specify an input and output path. Usage: tasks-to-json.js inputPath outputPath");
	process.exit(1);
}

let input = null;

try {
	input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
} catch(error) {
	console.error(`Could not read input path "${inputPath}": ` + error.message);
	process.exit(1);
}

const inputTasks = input;
const outputTasks = [];

inputTasks.forEach(task => {
	const resourceIdentifier = task.internalName.split(".");

	const taskObject = {
		type: null,
		weight: null,
		_name: null,
		_difficulty: null,
		value: null
	};

	if (task.ingameName) {
		taskObject._name = task.ingameName;
	}

	if (task.difficulty) {
		taskObject._difficulty = task.difficulty
	}

	if (task.weight && task.weight !== 0) {
		if (resourceIdentifier[0] === "item" || resourceIdentifier[0] === "block") {
			if (typeof resourceIdentifier[3] !== "undefined") {
				console.log("Skipped " + task.internalName);
				return;
			}

			taskObject.type = "bongo.item";
			taskObject.weight = task.weight;
			taskObject.value = {
				item: resourceIdentifier[1] + ":" + resourceIdentifier[2]
			}
		} else if (resourceIdentifier[0] === "entity") {
			taskObject.type = "bongo.entity";
			taskObject.weight = task.weight;
			taskObject.value = resourceIdentifier[1] + ":" + resourceIdentifier[2];
		} else if (resourceIdentifier[0] === "advancements") {
			taskObject.type = "bongo.advancement";
			taskObject.weight = task.weight;
			taskObject.value = "minecraft:" + resourceIdentifier[2] + "/" + resourceIdentifier[3];
		} else if (resourceIdentifier[0] === "biome") {
			taskObject.type = "bongo.biome";
			taskObject.weight = task.weight;
			taskObject.value = resourceIdentifier[1] + ":" + resourceIdentifier[2];
		} else if (resourceIdentifier[0] === "effect") {
			taskObject.type = "bongo.effect";
			taskObject.weight = task.weight;
			taskObject.value = resourceIdentifier[1] + ":" + resourceIdentifier[2];
		}

		outputTasks.push(taskObject);
	}
});

fs.writeFile(outputPath, JSON.stringify({tasks: outputTasks}, null, "\t"), () => {console.log(`Finished parsing task file, generated ${outputTasks.length} tasks`)});
