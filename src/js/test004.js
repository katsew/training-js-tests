var GetAjaxData = (function (){
  
  function GetAjaxData () {
    this.id = 0;
    this.name = "";
    this.comError = null;
  }

  GetAjaxData.prototype.getData = function (url, id, successCallback, failureCallback){
    $.ajax ({
      url: url,
      type: 'GET',
      data: {
        id: id
      }
    })
    .done (function (data){
      if (data != undefined) {
        successCallback (data);
      }
    })
    .fail (function (data){
        failureCallback (data);
    });
  };

  return GetAjaxData;
})();