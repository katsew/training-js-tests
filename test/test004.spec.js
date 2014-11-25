describe ("Test Ajax Communication", function (){
  
  var Tester;
  var flag;
  var successCallback = function (data) {
    flag = true;
  };

  var failureCallback = function (data) {
    flag = false;
  };

  beforeEach (function (){
    Tester = new GetAjaxData();
  });

  it ("GetAjaxData success callback called.", function (){

    spyOn ($, "ajax").and.callFake (function (){
      var d = $.Deferred();
      d.resolve ({
        id: 1,
        name: "Sho",
        comError: null
      });
      return d.promise();
    });

    Tester.getData("http://test.com/", 1, successCallback, failureCallback);
    expect (flag).toBeTruthy();
    flag = null;

  });

  it ("GetAjaxData failure", function (){

    spyOn ($, "ajax").and.callFake (function (){
      var d = $.Deferred();
      d.reject ({
        id: null,
        name: null,
        comError: "No matching ID found Error"
      });
      return d.promise();
    });

    Tester.getData("http://test.com/", 999, successCallback, failureCallback);
    expect (flag).toBeFalsy();
    flag = null;
    
  });

});