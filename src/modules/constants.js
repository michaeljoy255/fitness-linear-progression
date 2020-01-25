/**
 * Constants that will be used throughout the app
 */
const Constants = (function() {
  /**
   * @todo - WIP: imperial / metric constants and more...
   */

  /**
   * Material icon names
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
  };

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
  };

  return {
    Icon,
    Category
  };
})();

export default Constants;
