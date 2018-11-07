//npm install jquery  --save               <--installs jquery to the node-modules\jquery
//npm install @types/jquery --save       <--installs jquery typings (d.ts files) to  node-modules\@types\jquery
//You access the typings through the JQuery.  namespace  (so to get the AjaxSettings, you type JQuery.AjaxSettings)

// note that when you put :JQuery.AjaxSettings after the function declaration, you are saying it returns a type that is like AjaxSettings
function getDefaultAjaxSettings():JQuery.AjaxSettings {

   // jQuery.ajaxSettings ajaxSettings;
    var ajaxSettings: JQuery.AjaxSettings = {};



    ajaxSettings.async = true;
    //;ajaxSettings.beforeSend = function(jqXHR, settings)
    ajaxSettings.cache = false;
    ajaxSettings.complete = function (xhr, status) {
        console.log(status);
    }
    //ajax.contents = 
    ajaxSettings.contentType = 'application/x-www-form-urlencoded; charset=UTF-8'; //this is the default
    //ajaxSettings.context = 
    ajaxSettings.crossDomain = true;
    //ajaxSettings.data = object of key value pairs for creating query string in GET requests
    //ajaxSettings.dataFilter = function(data, filtertyp) - for processing raw data response
    //ajaxSettings.dataType = "jsonp text json"; // or xml, html, script, json,jsonp or text
    ajaxSettings.dataType = "json";
    ajaxSettings.error = function (xhr, status, error) {
        console.log(status + " :" + error)
    };
    ajaxSettings.global = true;  // trigger ajaxstart, ajaxstop
    //ajaxSettings.headers = {};
    //ajaxSettings.headers.
    //ajaxSettings.ifModified = false;
    //ajaxSettings.isLocal = true; // for getting local file system data
    //ajaxSettings.jsonp = onJsonPLoad; //function name - don't do this
    //ajaxSettings.jsonCallback  - function() to call on JSONP request
    ajaxSettings.method = "GET";
    //ajaxSettings.mimeType
    //ajaxSettings.password = 
    //ajaxSettings.processData = true;  do you parse the object into a query string...
    //ajaxSettings.scriptCharset = charset for script requeetss
    //ajaxSettings.statusCode  -- cool , for overriding status code response type
    // ajaxSetting.statusCode = {
    //      404: function() {
    //              alert( "page not found" );
    //     }
    // };
    ajaxSettings.success = function (data, status, xhr) {
        console.log(status);

        let prettyText = JSON.stringify(data, null, 2);
        console.log(prettyText);
        let responseHeaders = xhr.getAllResponseHeaders();
        //   let responseHeader = xhr.getResponseHeader();
        let responseText = xhr.responseText;
        let responseCode = xhr.status;
        let statusText = xhr.statusText;
    }

    //ajaxSettings
    ajaxSettings.timeout = 5000; //timeout in millieseconds
    ajaxSettings.traditional = false; // set to true to use traditional param serialization
    //ajaxSettings.type = "GET"; // same as method for backward compat (< 1.10)
    ajaxSettings.url = "https://api.usaspending.gov/api/v2/financial_balances/agencies/?funding_agency_id=775&fiscal_year=2017";
    //ajaxSettings.xhr = function (xhr){}  for overrideing xhr object
    //  ajaxSettings.xhrFields = {withCredentials:true};
    return ajaxSettings;
}

function test() {

    let myObject = {};
    // myObject.DataType = 4;
    // myObject.urL="sdfaskjdf";


    //see http://api.jquery.com/jQuery.ajax/#jqXHR  as well as https://zinoui.com/blog/cross-domain-ajax-request
    let callSettings = getDefaultAjaxSettings();
    callSettings.dataType = "json";
    callSettings.url = "https://api.usaspending.gov/api/v2/financial_balances/agencies/?funding_agency_id=775&fiscal_year=2017";
    callSettings.url = "http://vus-glems-02:21212/commits/v1/approvers/me";
    //callSettings.url = "http://dca-db-407:21212/commits/v1/approvers/me";
    callSettings.url = "http://ems.amat.com:21212/commits/v1/approvers/me";
    //   callSettings.url = "http://vus-glems-02.amat.com:21212/commits/v1/approvers/me";
    //callSettings.dataType = "jsonp text json";
    callSettings.xhrFields = { withCredentials: true };
    // var promise = $.ajax(ajaxSettings);
    // promise.done(function( data ){
    //     console.log(data);
    // });

}



(function () {
    //   var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //   $.getJSON( flickerAPI, {
    //     tags: "mount rainier",
    //     tagmode: "any",
    //     format: "json"
    //   })
    //     .done(function( data ) {
    //       $.each( data.items, function( i, item ) {
    //         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
    //         if ( i === 20 ) {
    //           return false;
    //         }
    //       });
    //     });

    test();
})();