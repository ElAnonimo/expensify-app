const square = function(x) {
	return x * x;
};

const squareArrow = (x) => {
	return x * x;
};

const squareArrow3 = (x) => x * x;

console.log(square(10));
console.log(squareArrow(10));
console.log(squareArrow3(10));

const firstName = (fullName) => {
	return fullName.split(" ")[0];
};
console.log("firstName:", firstName("John B"));

const firstName2 = (fullName) => fullName.split(" ")[0];
console.log("firstName2:", firstName2("John B"));
