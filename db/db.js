const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/balance_app")
mongoose.connection.on("connected", () => {
	console.log("connected to data BASS");
});
mongoose.connection.on("error", (err) => {
	console.log("fucking up");
});
mongoose.connection.on("disconnected", () => {
	console.log("we gone");
});
