import mongoose from "mongoose";
let isConnected = false;

export default async function connectToMongoose() {
	try {
		if (isConnected) {
			return;
		}
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
		isConnected = true;
	} catch (err) {
		console.log(err);
		throw err;
	}
}
