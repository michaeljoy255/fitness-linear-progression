const StorageCtrl = (function() {
  return {
    storeExercise(exerciseData) {
      let exercises;

      if (localStorage.getItem("exercises") === null) {
        // If the LS data does NOT exist
        exercises = [];
        exercises.push(exerciseData);
        localStorage.setItem("exercises", JSON.stringify(exercises));
      } else {
        // If LS data DOES exist
        exercises = JSON.parse(localStorage.getItem("exercises"));
        let matchFound = false;

        exercises.forEach((exer, i) => {
          // Replace exercise data if it exists
          if (exer.name === exerciseData.name) {
            exercises.splice(i, 1, exerciseData);
            matchFound = true;
          }
        });

        // Add new exercise if it wasn't found
        if (!matchFound) {
          exercises.push(exerciseData);
        }
  
        localStorage.setItem("exercises", JSON.stringify(exercises));
      }
    },
    getPreviousExercises() {
      let exercises;

      if (localStorage.getItem("exercises") === null) {
        // If the LS data does NOT exist
        exercises = [];
      } else {
        // If LS data DOES exist
        exercises = JSON.parse(localStorage.getItem("exercises"));
      }

      return exercises;
    }

    // deleteItemFromStorage: function(id) {
    //   let items = JSON.parse(localStorage.getItem("items"));

    //   items.forEach((item, i) => {
    //     if (id === item.id) {
    //       items.splice(i, 1);
    //     }
    //   });

    //   localStorage.setItem("items", JSON.stringify(items));
    // },
    // clearItemsFromStorage: function() {
    //   localStorage.removeItem("items");
    // }
  }
})();

export default StorageCtrl;