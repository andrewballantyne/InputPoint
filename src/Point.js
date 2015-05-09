var Point = (function (isAbstract) {
  /* Setup Class Defaults */
  ClassVehicle.setupClass(isAbstract, Point);
  
  /* Tiny References */
  var C = Point;
  var p = C.prototype;
  
  /* ----- Static Variables ----- */
  
  /* ----- Static Methods ----- */

  /**
   * @constructor
   * A simple x/y Point object.
   */
  function Point(x, y) {
    ClassVehicle.checkAbstract.call(this, Point); // Check Abstract-ness

    this.x = x;
    this.y = y;
  }
  
  /* ----- Public Methods ----- */
  
  /* ----- Protected Methods ----- */
  
  /* ----- Private Methods ----- */

  // Return the class, ready for a new ...()
  return Point;
})(false);