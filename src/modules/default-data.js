import ENUMS from './enums';

const DefaultData = (function() {  
  class Exercise {
    constructor({
      id = null,
      name = null,
      category = null,
      notes = null,
      details = null
    }={}) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.notes = notes;
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
      this.name = name;
      this.exercise_ids = exercise_ids;
    }
  }

  /**
   * Exercise Factory
   */
  const createExercise = function(exerciseEnum) {
    if (exerciseEnum.category === ENUMS.Category.MISC) {
      return new Exercise({
        id: exerciseEnum.id,
        name: exerciseEnum.name,
        category: exerciseEnum.category,
        notes: exerciseEnum.notes,
        details: null
      });
    } else if (exerciseEnum.category === ENUMS.Category.CARDIO) {
      return new Exercise({
        id: exerciseEnum.id,
        name: exerciseEnum.name,
        category: exerciseEnum.category,
        notes: exerciseEnum.notes,
        details: new CardioExerciseDetails()
      });
    } else {
      return new Exercise({
        id: exerciseEnum.id,
        name: exerciseEnum.name,
        category: exerciseEnum.category,
        notes: exerciseEnum.notes,
        details: new WeightExerciseDetails()
      });
    }
  };

  return {
    SeedDefaultExercises() {
      const exercises = [];

      Object.keys(ENUMS.Exercise).forEach(key => {
        exercises.push(createExercise(ENUMS.Exercise[key]));
      });

      return exercises;
    },
    SeedDefaultRoutines() {
      const routines = [
        new Routine({
          name: "Cardio Day",
          exercise_ids: [
            ENUMS.Exercise.ELLIPTICAL.id,
            ENUMS.Exercise.STAIR_STEPPER.id,
            ENUMS.Exercise.STRETCHING.id
          ]
        }),
        new Routine({
          name: "Chest, Shoulders, Triceps #1",
          exercise_ids: [
            ENUMS.Exercise.FLAT_TNG_PRESS.id,
            ENUMS.Exercise.INCLINE_TNG_PRESS.id,
            ENUMS.Exercise.LAYING_OVERHEAD_STRAIGHT_ARMS.id,
            ENUMS.Exercise.FRONT_SIDE_RAISES.id,
            ENUMS.Exercise.SKULL_CRUSHERS.id,
            ENUMS.Exercise.STRETCHING.id
          ]
        }),
        new Routine({
          name: "Chest, Shoulders, Triceps #2",
          exercise_ids: [
            ENUMS.Exercise.FLAT_PIN_PRESS.id,
            ENUMS.Exercise.DECLINE_TNG_PRESS.id,
            ENUMS.Exercise.FLY_MACHINE_CHEST.id,
            ENUMS.Exercise.FRONT_SIDE_RAISES.id,
            ENUMS.Exercise.TRICEP_KICKBACKS.id,
            ENUMS.Exercise.STRETCHING.id
          ]
        }),
        new Routine({
          name: "Back and Biceps #1",
          exercise_ids: [
            ENUMS.Exercise.BENT_OVER_ROWS.id,
            ENUMS.Exercise.STIFF_LEG_DEADLIFTS.id,
            ENUMS.Exercise.SEATED_CABLE_PULLDOWNS.id,
            ENUMS.Exercise.CABLE_UNDERHAND_CURLS.id,
            ENUMS.Exercise.STRETCHING.id
          ]
        }),
        new Routine({
          name: "Back and Biceps #2",
          exercise_ids: [
            ENUMS.Exercise.SEATED_CABLE_ROWS.id,
            ENUMS.Exercise.STANDING_T_ROWS.id,
            ENUMS.Exercise.ASSISTED_PULL_UPS.id,
            ENUMS.Exercise.DUMBBELL_HAMMER_CURLS.id,
            ENUMS.Exercise.STRETCHING.id
          ]
        }),
        new Routine({
          name: "Legs and Core",
          exercise_ids: [
            ENUMS.Exercise.LEG_PRESS_MACHINE.id,
            ENUMS.Exercise.LEG_EXT_MACHINE.id,
            ENUMS.Exercise.LEG_CURL_MACHINE.id,
            ENUMS.Exercise.CALF_EXT_MACHINE.id,
            ENUMS.Exercise.STANDING_GLUTE_MACHINE.id,
            ENUMS.Exercise.HIP_ABDUCTION_MACHINE.id,
            ENUMS.Exercise.HIP_ADDUCTION_MACHINE.id,
            ENUMS.Exercise.ABDOMINAL_CRUNCH_MACHINE.id,
            ENUMS.Exercise.OBLIQUE_SIDE_BEND.id,
            ENUMS.Exercise.STRETCHING.id
          ]
        }),
      ];

      return routines;
    }
  }
})();

export default DefaultData;