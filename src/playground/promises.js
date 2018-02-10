const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve("This is resolved");
		reject("Lets reject this promise");
	}, 1500);
});

promise
	.then((data) => {
		console.log("data:", data);
	})
	.catch((error) => {
		console.log("Rejected with:", error);
	});
