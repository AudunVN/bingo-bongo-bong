const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const items = require("./1.19.2-item-list.json");

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
		value: null
	};

	if (task.weight && task.weight !== 0) {
		if (resourceIdentifier[0] === "item" || resourceIdentifier[0] === "block") {
			if (typeof resourceIdentifier[3] !== "undefined") {
				console.log("Skipped " + task.internalName + ", subitem");
				return;
			}

			if (!items.includes(resourceIdentifier[2])) {
				console.log("Skipped " + task.internalName + ", not on item list");
				return;
			}

			taskObject.type = "bongo.item";
			taskObject.weight = task.weight;
			taskObject.value = {
				item: resourceIdentifier[1] + ":" + resourceIdentifier[2]
			}
		} else if (resourceIdentifier[0] === "entity") {
			if (typeof resourceIdentifier[3] !== "undefined") {
				console.log("Skipped " + task.internalName + ", subitem");
				return;
			}

			taskObject.type = "bongo.entity";
			taskObject.weight = task.weight;
			taskObject.value = resourceIdentifier[1] + ":" + resourceIdentifier[2];
		} else if (resourceIdentifier[0] === "advancements") {
			taskObject.type = "bongo.advancement";
			taskObject.weight = task.weight;
			taskObject.value = "minecraft:" + resourceIdentifier[1] + "/" + resourceIdentifier[2];
		} else if (resourceIdentifier[0] === "biome") {
			taskObject.type = "bongo.biome";
			taskObject.weight = task.weight;
			taskObject.value = resourceIdentifier[1] + ":" + resourceIdentifier[2];
		} else if (resourceIdentifier[0] === "effect") {
			taskObject.type = "bongo.effect";
			taskObject.weight = task.weight;
			taskObject.value = resourceIdentifier[1] + ":" + resourceIdentifier[2];
		} else {
			console.log("Skipped " + task.internalName + ", unknown task type");
			return;
		}

		outputTasks.push(taskObject);
	}
});

fs.writeFile(outputPath, JSON.stringify({tasks: outputTasks}, null, "\t"), () => {console.log(`Finished parsing task file, generated ${outputTasks.length} tasks`)});
