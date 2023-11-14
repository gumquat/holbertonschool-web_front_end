/* a module is a function or group of similar \
functions that are grouped together within a file.
Modules contain the code to execute a specific
task when called into a larger application.
They are used to better organize and structure
your codebase, breaking down large programs into
smaller, more manageable, and more independent chunks.*/
var studentHogwarts = (

  /* this makes everything below 
  contained within studentHogwarts (a module) */
  function() {

  var privateScore = 0;
  var name = null;

  /* private methods can obly be accessed within the class
  or objects its defined in*/
  function changeScoreBy(points) {
      privateScore += points;
  }

  var publicMethods = {

      setName: function(newName) {
          name = newName;
      },
      rewardStudent: function() {
          changeScoreBy(1);
      },
      penalizeStudent: function() {
          changeScoreBy(-1);
      },
      getScore: function() {
          return name + ": " + privateScore;
      }
    };

  return publicMethods;

  }
)();

//Harry
var harry = Object.create(studentHogwarts);
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// Draco
var draco = Object.create(studentHogwarts);
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
