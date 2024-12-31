const mythicalCreatures = [
	{ name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
	{ name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
	{ name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
	{ name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
	{ name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

const waterCreature = mythicalCreatures.find((creature) => {
	if (creature.type === "Water") {
		return creature;
	}
});

console.log(waterCreature);

const griffinCreatureIndex = mythicalCreatures.findIndex((creature, index) => {
	if (creature.name === "Griffin") {
		return index;
	}
});

console.log(griffinCreatureIndex);

const enchantedForestCreature = mythicalCreatures.find((creature) => {
	if (creature.lastSeen === "Enchanted Forest") {
		return creature;
	}
});

console.log(enchantedForestCreature);