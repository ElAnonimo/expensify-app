/* // ES6 destructuring

const person = {
	// name: "Mikki",
	age: 17,
	location: {
		country: "Ecuador",
		temp: 23
	}
};

const {name: ubername = "Name", age} = person;
const {country, temp: temperature} = person.location;

console.log(country, ' ', temperature, ' ', ubername);

const book = {
	title: "book title",
	author: "Author",
	publisher: {
		// name: "Penguin"
	}
};

const {name: publisherName = "Default Publisher"} = book.publisher;
console.log(publisherName);
*/

// ES6 array destructuring

const address = ['El Ejido', 'Quito', 'state'];
const [street, city, state] = address;
const [,,, zip = '09876'] = address;		// ,,, == skip first 3 vars
console.log(`street: ${street}, city: ${city}. Zip: ${zip}`);

const item = ['Coffee', '$2.00', '$3.00', '$4.00'];
const [itemName, ,itemMediumPrice] = item;
console.log(`${itemName} medium goes for ${itemMediumPrice}.`);
