import mongoose from "mongoose";
import { UserModel } from "./schema/firstModel";
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
    console.log('Connected to the database');
});

export async function runDB() {
    await mongoose.connect('mongodb://localhost:27017/local');

    // const user = new UserModel({
    //     username: 'Vitor',
    //     email: 'vitor@martins.com',
    //     password: 'aeiou7'
    // });
    // await user.save();

    // console.log(user.email);
};