const users = [
	{ firstName: "Alice", lastName: "Johnson", points: 120 },
	{ firstName: "Bob", lastName: "Smith", points: 99 },
	{ firstName: "Charlie", lastName: "Brown", points: 180 }
];

const updatedUsers = users.map((value) => {
	const fullName = value.firstName + " " + value.lastName;
	const membershipStatus = value.points >= 100 ? "Premium" : "Standard";
	return { fullName, membershipStatus };
});

console.log(updatedUsers);