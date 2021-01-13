import mongoose from "mongoose";
const uri =
	"mongodb+srv://Kismet:wZ0vNyvkUENVhg2o@cluster0.l8p7d.mongodb.net/tree_farm?retryWrites=true&w=majority";
let isConnected = false;

export default async function connectToMongoose() {
	try {
		if (isConnected) {
			console.log("already connected");
			return;
		}
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
		isConnected = true;
		console.log("Connected to MongoDB for the first time!");
	} catch (err) {
		console.log(err);
		throw err;
	}
}
