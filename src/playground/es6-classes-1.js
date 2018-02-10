class Person {
	constructor(name = "Mikki", age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi! ${this.name} of ${this.age} y.o.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getGreeting() {
		let description = super.getGreeting();

		if (this.hasMajor()) {
			description += ` His major is ${this.major}.`;
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation = "Quito") {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getGreeting() {
		let greeting = super.getGreeting();

		if (this.homeLocation) {
			greeting += ` Home location is ${this.homeLocation}.`;
		}

		return greeting;
	}

}

const me = new Traveler("Joe", 26, "Otavalo");
console.log(me.getGreeting());
