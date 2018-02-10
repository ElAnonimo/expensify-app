var nameVar = "Andrew";
var nameVar = "Mikki";
console.log("nameVar:", nameVar);

let nameLet = "Jimmy";
nameLet = "William";
console.log("nameLet:", nameLet);

const nameConst = "Frank";
// nameConst = "some new name";
console.log("nameConst:", nameConst);

function logStuff() {
	// var stuff = "log me";
	const stuff = "log me";
	return stuff;
}

const stuff = logStuff();
console.log("var stuff:", stuff);

// Block scoping
// var fullName = "firstName lastName";					// var is function scoped
const fullName = "firstName lastName";

let firstName;
if (fullName) {																// 'if' isn't 'function' so var inside 'if' is accessible outside it
	// var firstName = fullName.split(" ")[0];
	// let firstName = fullName.split(" ")[0];
	firstName = fullName.split(" ")[0];
	const lastName = fullName.split(" ")[1];		// const, let are block (here 'if') scoped
	console.log("first name:", firstName);
}

console.log("first name from 'if' block:", firstName);
console.log("last name from 'if' block:", lastName);
