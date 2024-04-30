const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    weight: [
        {
            weight: {
                type: Number,
                required: false,
            },
            date: {
                type: Date,
                required: false,
            },
        }
    ],
    height: [
        {
            height: {
                type: Number,
                required: false,
            },
            date: {
                type: Date,
                required: false,
            },
        }
    ],
    gender: {
        type: String,
        required: false,
    },
    dob: {
        type: String,
        required: false,
    },
    goal: {
        type: String,
        required: false,
    },
    calorieIntake: [
        {
            // item,
            // date,
            // quantity,
            // quantitytype,
            // calorieIntake:

            item: {
                type: String,
                required: false,
            },
            date: {
                type: Date,
                required: false,
            },
            quantity: {
                type: Number,
                required: false,
            },
            quantitytype: {
                type: String,
                required: false,
            },
            calorieIntake: {
                type: Number,
                required: false,
            },

        }
    ],
    activityLevel: {
        type: String,
        required: false,
    },
    sleep: [
        {
            date: {
                type: Date,
                required: false,
            },
            durationInHrs: {
                type: Number,
                required: false,
            },
        },
    ],
    steps: [
        {
            date: {
                type: Date,
                required: false,
            },
            steps: {
                type: Number,
                required: false,
            },
        },
    ],
    workouts: [
        {
            date: {
                type: Date,
                required: false,
            },
            exercise: {
                type: String,
                required: false,
            },
            durationInMinutes: {
                type: Number,
                required: false,
            },
        },
    ],
    water: [
        {
            date: {
                type: Date,
                required: false,
            },
            amountInMilliliters: {
                type: Number,
                required: false,
            },
        },
    ],
}, { timestamps: true });


userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;