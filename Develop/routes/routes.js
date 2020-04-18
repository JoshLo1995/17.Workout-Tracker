const db = require("../models/workout.js");

const router = require('express').Router();

db.create({ name: "Campus Library" })
  .then(dbLibrary => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });

router.post("/api/workouts", ({body}, res) => {
    db.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


router.put(`/api/workouts/:id`, ({body, params}, res) => {
    db.findOneAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
 
    });



