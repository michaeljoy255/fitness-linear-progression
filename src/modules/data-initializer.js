import Constants from "./constants";
import Exercise from "../classes/exercise";
import Routine from "../classes/routine";
import WeightDetails from "../classes/weight-details";
import CardioDetails from "../classes/cardio-details";

const DataInitializer = (function() {
  const createExercise = function(exerciseConstant) {
    if (exerciseConstant.category === Constants.Category.MISC) {
      return new Exercise({
        id: exerciseConstant.id,
        name: exerciseConstant.name,
        category: exerciseConstant.category,
        notes: exerciseConstant.notes,
        details: null
      });
    } else if (exerciseConstant.category === Constants.Category.CARDIO) {
      return new Exercise({
        id: exerciseConstant.id,
        name: exerciseConstant.name,
        category: exerciseConstant.category,
        notes: exerciseConstant.notes,
        details: new CardioDetails()
      });
    } else {
      return new Exercise({
        id: exerciseConstant.id,
        name: exerciseConstant.name,
        category: exerciseConstant.category,
        notes: exerciseConstant.notes,
        details: new WeightDetails()
      });
    }
  };

  const createRoutine = function(routineConstant) {
    return new Routine({
      id: routineConstant.id,
      name: routineConstant.name,
      exercise_ids: routineConstant.exercise_ids
    });
  };

  return {
    initializeExercises: function() {
      const exercises = [];

      Object.keys(Constants.Exercise).forEach(key => {
        exercises.push(createExercise(Constants.Exercise[key]));
      });

      return exercises;
    },
    initializeRoutines: function() {
      const routines = [];

      Object.keys(Constants.Routine).forEach(key => {
        routines.push(createRoutine(Constants.Routine[key]));
      });

      return routines;
    }
  };
})();

export default DataInitializer;
