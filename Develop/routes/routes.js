const db = require("/../models/workout.js");

const router = require('express').Router();

db.Workout.create({ name: "Campus Library" })
  .then(dbLibrary => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });

router.post("/api/workouts", ({body}, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


router.put(`/api/workouts/:id`, ({body, params}, res) => {
    db.Workout.findOneAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
 
    });

router.get("/library", (req, res) => {
  db.Workout.find({})
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/populated", (req, res) => {
  db.Workout.find({})
    .populate("books")
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

