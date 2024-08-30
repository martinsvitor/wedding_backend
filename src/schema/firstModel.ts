import {Schema, model, Document} from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

export const UserModel = model<IUser>('User', userSchema);