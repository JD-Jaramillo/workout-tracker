const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Enter an excercise an excercise type'
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Enter an excercise name'
                },
                duration: {
                    type: Number,
                    required: 'Enter an excercise duration in minutes'
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
            }
        ]
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 