import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
    profile_name: string;
    phone_number: string;
    email: string;
    profile_image: string;
    otp?:string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const TempUserSchema: Schema<UserDocument> = new mongoose.Schema({
    profile_name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profile_image: {
        type: String,
        default:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fprofile-icon-png&psig=AOvVaw2KkxnpaXU0MTaVhlbHsRdT&ust=1684305011140000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCJ46Kb-f4CFQAAAAAdAAAAABAJ',
    },
    otp:{
        type:String

    },

    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600, // expires after 1 minute (60 seconds)
    }

});

// Update the `updatedAt` field before saving the document
TempUserSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

TempUserSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
    },
});

const TempUser = mongoose.model<UserDocument>('TempUser', TempUserSchema);

export default TempUser;
