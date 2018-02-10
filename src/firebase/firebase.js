import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBSK15Y6Ny-5scsVCwe9ud6loVDaCX7k0g",
	authDomain: "expensify-12.firebaseapp.com",
	databaseURL: "https://expensify-12.firebaseio.com",
	projectId: "expensify-12",
	storageBucket: "expensify-12.appspot.com",
	messagingSenderId: "244531572729"
};

firebase.initializeApp(config);

const database = firebase.database();		// for the code commented out below to work remove this line

export { firebase, database as default };

/*
firebase.database().ref().set({
	name: "Welcome to Firebase",
	age: 100,
	isThere: true,
	rootProp: 5,
	rootObject: {
		title: "root title",
		agency: "root agency"
	},
	location: {
		country: "Ecuador",
		town: "Otavalo"
	},
	hostal: {
		name: "Los Ponchos",
		available: true
	}
}).then(() => {
	console.log("Firebase data was saved.");
}).catch((error) => {
	console.log("Firebase error:", error);
});

firebase.database().ref('name').set("Quito");
firebase.database().ref('location/town').set("Cotacachi");
firebase.database().ref('hostal/name').set("Finca del Este")
	.then(() => console.log("aga"))
	.catch(() => console.log("ugu"));
*/
/* firebase.database().ref('age').remove()
	.then(() => console.log("removed"))
	.catch(() => console.log("not removed")); */

// firebase.database().ref('isThere').set(null);
/*
firebase.database().ref().update({
	isThere: false,
	age: 18,
	newProp: "a brand new prop",
	'location/town': "Ibarra"
});

firebase.database().ref().update({
	rootProp: 10,
	'rootObject/title': "new root title"
}); */

/* firebase.database().ref('location/town').once('value')
	.then((snapshot) => {
		console.log(snapshot.val());
	})
	.catch((ex) => {
		console.log("exception:", ex);
	}); */

/* const onValueChange = firebase.database().ref().on('value', (snapshot) => {
	console.log(snapshot.val());
}, ex => console.log("Error fetching data:", ex));

setTimeout(() => {
	firebase.database().ref('age').set(0);
}, 1500);
setTimeout(() => {
	firebase.database().ref().off('value', onValueChange);
}, 3000);
setTimeout(() => {
	firebase.database().ref('age').set(2);
}, 4500);

firebase.database().ref().on('value', (snapshot) => {
	const val = snapshot.val();
	console.log(`The hostal name is ${val.hostal.name}. It's located in ${val.location.country} near the town of ${val.location.town}.`);
}); */

/* const notes = [{
	id: 1,
	title: "title 1",
	body: "note 1"
}, {
	id: 2,
	title: "title 2",
	body: "note 2"
}]; */

// firebase.database().ref('notes').set(notes);

/*firebase.database().ref('notes').push({
	title: "new title",
	body: "new note"
});*/

/* firebase.database().ref('notes/-L4WGnAf4evof5-37uEQ').update({
	title: "updated title"
});
firebase.database().ref('notes/-L4WGnAf4evof5-37uEQ').remove(); */

/* const expenses = [
	{
		desc: "desc 1",
		note: "note 1",
		amount: 1,
		createdAt: 1
	}
];

for (let i=0; i < expenses.length; i++) {
	firebase.database().ref('expenses').push(expenses[i]);
} */

/* firebase.database().ref('expenses').on('value', (snapshot) => {
	const expenses = [];

	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});

	console.log(expenses);
});

firebase.database().ref('expenses').on('child_removed', (snapshot) => {
	console.log("This was removed:", snapshot.val());
});
firebase.database().ref('expenses').on('child_changed', (snapshot) => {
	console.log("This was changed:", snapshot.val());
});
firebase.database().ref('expenses').on('child_added', (snapshot) => {
	console.log("This was added:", snapshot.val());
});
*/