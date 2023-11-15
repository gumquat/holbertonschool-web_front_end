/* this is an object with two attributes and
a function within it */
let roomDimensions = {
  width: 50,
  length: 100,
  getArea: function() {
    return this.width * this.length;
  }
 };

 /* bind() method creates a new function that, when called,
 has its 'this' keyword set to the provided value, which here is roomDimensions */
 let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

 console.log(boundGetArea());
