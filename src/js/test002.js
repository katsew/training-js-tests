/*
* Greeter Class
**/
var Greeter = (function (){
  function Greeter () { }


  var test;
  Greeter.prototype.getTestValue = function () {
    return test;
  };

  Greeter.prototype.setTestValue = function (val) {
    test = val;
    return true;
  };

  Greeter.prototype.getCurrentHours = function (){
    return new Date().getHours();
  };

  Greeter.prototype.makeGreeting = function (hours, name){
    var greeting;
    if (4 < hours && hours < 12) {
      greeting = "Good morning";
    } else if (12 <= hours && hours < 18) {
      greeting = "Hello";
    } else {
      greeting = "Good evening";
    }
    return greeting + ', ' + name;
  };

  Greeter.prototype.greet = function (name) {
    var hours = this.getCurrentHours();
    return this.makeGreeting(hours, name);
  };

  return Greeter;
})();

