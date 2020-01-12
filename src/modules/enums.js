const ENUMS = (function() {
  /**
   * Material icons used throughout the project
   */
  const Icon = {
    CALENDAR: "calendar_today",
    CANCEL: "cancel",
    INCLINE: "signal_cellular_null",
    INTENSITY: "whatshot",
    MAXIMUM: "priority_high",
    NOTES: "assignment",
    RESISTENCE: "fitness_center",
    REST: "hourglass_empty",
    TEMPO: "speed",
    TIMER: "timer"
  }

  /**
   * Categories for exercises
   */
  const Category = {
    BACK: "Back",
    BICEPS: "Biceps",
    CARDIO: "Cardio",
    CHEST: "Chest",
    CORE: "Core",
    EVENT: "Event",
    LEGS: "Legs",
    MISC: "Miscellaneous",
    SHOULDERS: "Shoudlers",
    TRICEPS: "Triceps"
  }

  /**
   * All available exercise names
   */
  const Exercise = {
    // CARDIO
    ELLIPTICAL_MACHINE: "Elliptical Machine",
    STEPPER_MACHINE: "Stepper Machine",
    TREADMILL: "Treadmill",
    MISC_CARDIO: "Miscellaneous Cardio",
    // MISC
    MISC_EXERCISE: "Miscellaneous Exercise",
    STRETCHING: "Stretching",
    // CHEST
    FLAT_BENCH_PRESS: "Flat Bench Press",
    INCLINE_BENCH_PRESS: "Incline Bench Press",
    DECLINE_BENCH_PRESS: "Decline Bench Press",
    DUMBBELL_FLAT_BENCH_PRESS: "Dumbbell Flat Bench Press",
    DUMBBELL_INCLINE_BENCH_PRESS: "Dumbbell Incline Bench Press",
    DUMBBELL_DECLINE_BENCH_PRESS: "Dumbbell Decline Bench Press",
    FLY_MACHINE_CHEST: "Fly Machine (Chest)",
    LAYING_OVERHEAD_STRAIGHT_ARMS: "Laying Overhead Straight Arms",
    CABLE_CHEST_SIDE_PULLS: "Cable Chest Side Pulls",
    // SHOULDERS
    DUMBBELL_SIDE_RAISES: "Dumbbell Side Raises",
    DUMBBELL_FRONT_RAISES: "Dumbbell Front Raises",
    DUMBBELL_FRONT_SIDE_RAISES: "Dumbbell Front & Side Raises",
    SHOULDER_PRESS_MACHINE: "Shoulder Press Machine",
    // TRICEPS
    SKULL_CRUSHERS: "Skull Crushers",
    STANDING_TRICEP_OVERHEAD_EXT: "Standing Tricep Overhead Extension",
    CABLE_TRICEP_PULLDOWNS: "Cable Tricep Pulldowns",
    TRICEP_PRESS_MACHINE: "Tricep Press Machine",
    // BACK
    BENT_OVER_ROWS: "Bent Over Rows",
    SHRUGS: "Shrugs",
    STIFF_LEG_DEADLIFTS: "Stiff Leg Deadlift",
    ASSISTED_PULL_UPS: "Assisted Pull-ups",
    SEATED_CABLE_PULLDOWNS: "Seated Cable Pulldowns",
    SEATED_CABLE_ROWS: "Seated Cable Rows",
    STANDING_T_ROWS: "Standing T-Rows",
    // BICEPS
    CABLE_OVERHAND_CURLS: "Cable Overhand Curls",
    CABLE_UNDERHAND_CURLS: "Cable Underhand Curls",
    CABLE_ROPE_CURLS: "Cable Rope Curls",
    DUMBBELL_OVERHAND_CURLS: "Dumbbell Overhand Curls",
    DUMBBELL_UNDERHAND_CURLS: "Dumbbell Underhand Curls",
    DUMBBELL_HAMMER_CURLS: "Dumbbell Hammer Curls",
    // LEGS
    LEG_PRESS_MACHINE: "Leg Press Machine",
    LEG_EXT_MACHINE: "Leg Extension Machine",
    LEG_CURL_MACHINE: "Leg Curl Machine",
    CALF_EXT_MACHINE: "Calf Extension Machine",
    STANDING_GLUTE_MACHINE: "Standing Glute Machine",
    HIP_ABDUCTION_MACHINE: "Hip Abduction (Out) Machine",
    HIP_ADDUCTION_MACHINE: "Hip Adduction (in) Machine",
    // CORE
    ABDOMINAL_CRUNCH_MACHINE: "Abdominal Crunch Machine",
    OBLIQUE_SIDE_BEND: "Oblique Side Bends"
  }

  // Reveal module properties
  return {
    Icon,
    Category,
    Exercise
  }
})();

export default ENUMS;
