/* Spy Test */
/* http://www.buildinsider.net/web/bookjslib111/109 */

describe ("Spy Test", function () {
  var greeter;

  beforeEach (function (){
    greeter = new Greeter();
  });

  it ("Create Spy", function (){
    var spyObject = spyOn (greeter, "makeGreeting");
    expect (spyObject).toBe (greeter.makeGreeting);
    expect (greeter.makeGreeting(5, "Sho")).toEqual(undefined);
  });

  it ("Test private value test", function () {
    spyOn (greeter, "getTestValue").and.callThrough();
    spyOn (greeter, "setTestValue").and.callThrough();
    expect (greeter.getTestValue()).toBeUndefined();
    expect (greeter.setTestValue(5)).toBeTruthy();
    expect (greeter.getTestValue()).toEqual (5);

  });

  it ("return Good morning", function (){
    spyOn (greeter, "makeGreeting").and.callThrough();
    expect (greeter.makeGreeting(5, "Sho")).toEqual ("Good morning, Sho");
  });

  it ('return Hello', function () {
    spyOn (greeter, "makeGreeting").and.callThrough();
    expect (greeter.makeGreeting (12, "Sho")).toEqual ("Hello, Sho");
  });

  it ('return Good evening', function () {
    spyOn (greeter, "makeGreeting").and.callThrough();
    expect (greeter.makeGreeting (18, "Sho")).toEqual ("Good evening, Sho");
  });

  it ("return certain value", function () {
    spyOn (greeter, "getCurrentHours").and.returnValue (5);
    expect (greeter.getCurrentHours()).toEqual(5);
  });

  it ("return certain function", function () {
    var called = false;
    spyOn (greeter, "makeGreeting").and.callFake (function (hour, name) {
      called = true;
      expect (hour).toEqual (5);
      expect (name).toEqual ("Sho");
      return "Greeting";
    });

    expect (greeter.makeGreeting (5, "Sho")).toEqual ("Greeting");
    expect (called).toEqual (true);
  });

  it ("throw exception", function () {
    spyOn(greeter, "getCurrentHours").and.throwError ("Exception");
    expect (greeter.getCurrentHours).toThrowError ("Exception");
  });

  it ("test methods call", function (){
    spyOn (greeter, "getCurrentHours").and.returnValue (5);
    spyOn (greeter, "makeGreeting").and.callThrough();

    expect (greeter.greet ("Sho")).toEqual ("Good morning, Sho");

    expect (greeter.getCurrentHours).toHaveBeenCalled ();
    expect (greeter.makeGreeting).toHaveBeenCalledWith (5, "Sho");
    expect (greeter.makeGreeting).toHaveBeenCalledWith (jasmine.any(Number), jasmine.any(String));

  });

  it ("getCurrentHours test", function () {
    spyOn (greeter, "getCurrentHours").and.callThrough();
    expect (greeter.getCurrentHours()).toEqual (new Date().getHours());
  });

});