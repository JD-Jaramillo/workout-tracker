
const router = require('express').Router();
const { Workout } = require('../models');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put('/api/workouts/:id', async (req, res) => {
    console.log("**********", req.body);
    try {
        const workout = await Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
        console.log(workout);
        res.json(workout)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(workoutdb => {
            res.json(workoutdb)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;

// (app => {
//     router.use(function timelog(req, res, next) {
//         console.log("Time: ", Date.now());
//         next();
//     })
// });

