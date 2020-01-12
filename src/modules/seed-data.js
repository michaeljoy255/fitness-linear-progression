import ENUMS from './enums';
const uuid = require("uuid");

const SeedData = (function() {
  class Profile {
    constructor({
      exercises = [],
      routines = []
    }={}) {
      this.exercises = exercises;
      this.routines = routines;
    }
  }
  
  class Exercise {
    constructor({
      name = null,
      category = null,
      desc = null,
      details = null
    }={}) {
      this.id = uuid.v4();
      this.name = name;
      this.category = category;
      this.desc = desc;
      this.details = details;
    }
  }
  
  class WeightExerciseDetails {
    constructor({
      highest_weight = null,
      most_weight = null,
      previous_sets = []
    }={}) {
      this.highest_weight = highest_weight;
      this.most_weight = most_weight;
      this.previous_sets = previous_sets;
    }
  }
  
  class CardioExerciseDetails {
    constructor({
      previous_cardio_date = null,
      previous_duration = null,
      previous_dist_steps = null,
    }={}) {
      this.previous_cardio_date = previous_cardio_date;
      this.previous_duration = previous_duration;
      this.previous_dist_steps = previous_dist_steps;
    }
  }
  
  class PreviousSet {
    constructor({
      weight = null, // Used for "highest_weight"
      reps = null,
      total_moved = null // Take weight * reps for "most_weight"
    }={}) {
      this.created_at = new Date().toISOString();
      this.weight = weight;
      this.reps = reps;
      this.total_moved = total_moved;
    }
  }
  
  class Routine {
    constructor({
      name = null,
      exercise_ids = []
    }={}) {
      this.id = uuid.v4();
      this.name = name;
      this.exercise_ids = exercise_ids;
    }
  }

  const exercises = [
    new Exercise({
      name: ENUMS.Exercise.ELLIPTICAL_MACHINE,
      category: ENUMS.Category.CARDIO,
      desc: "pending",
      details: new CardioExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.STEPPER_MACHINE,
      category: ENUMS.Category.CARDIO,
      desc: "pending",
      details: new CardioExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.TREADMILL,
      category: ENUMS.Category.CARDIO,
      desc: "pending",
      details: new CardioExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.MISC_CARDIO,
      category: ENUMS.Category.CARDIO,
      desc: "pending",
      details: new CardioExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.STRETCHING,
      category: ENUMS.Category.MISC,
      desc: "pending",
      details: null
    }),
    // CHEST #1
    new Exercise({
      name: ENUMS.Exercise.FLAT_BENCH_PRESS,
      category: ENUMS.Category.CHEST,
      desc: "pending",
      details: new WeightExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.INCLINE_BENCH_PRESS,
      category: ENUMS.Category.CHEST,
      desc: "pending",
      details: new WeightExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.DUMBBELL_FRONT_SIDE_RAISES,
      category: ENUMS.Category.SHOULDERS,
      desc: "pending",
      details: new WeightExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.SKULL_CRUSHERS,
      category: ENUMS.Category.TRICEPS,
      desc: "pending",
      details: new WeightExerciseDetails()
    }),
    // CHEST #2
    // Flat bench again
    new Exercise({
      name: ENUMS.Exercise.DECLINE_BENCH_PRESS,
      category: ENUMS.Category.CHEST,
      desc: "pending",
      details: new WeightExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.LAYING_OVERHEAD_STRAIGHT_ARMS,
      category: ENUMS.Category.CHEST,
      desc: "pending",
      details: new WeightExerciseDetails()
    }),
    new Exercise({
      name: ENUMS.Exercise.STANDING_TRICEP_OVERHEAD_EXT,
      category: ENUMS.Category.TRICEPS,
      desc: "pending",
      details: new WeightExerciseDetails()
    }),
    // BACK #1
    // wip
    // BACK #2
    // LEGS & CORE
    // CARDIO #1
    // CARDIO #2
  ];

  const routines = [];

  return {
    SeedExercises() {return},
    SeedRoutines() {return}
  }
})();

export default SeedData;