function getDefaultAjaxSettings() {
    var ajaxSettings = {};
    ajaxSettings.async = true;
    ajaxSettings.cache = false;
    ajaxSettings.complete = function (xhr, status) {
        console.log(status);
    };
    ajaxSettings.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
    ajaxSettings.crossDomain = true;
    ajaxSettings.dataType = "json";
    ajaxSettings.error = function (xhr, status, error) {
        console.log(status + " :" + error);
    };
    ajaxSettings.global = true;
    ajaxSettings.method = "GET";
    ajaxSettings.success = function (data, status, xhr) {
        console.log(status);
        var prettyText = JSON.stringify(data, null, 2);
        console.log(prettyText);
        var responseHeaders = xhr.getAllResponseHeaders();
        var responseText = xhr.responseText;
        var responseCode = xhr.status;
        var statusText = xhr.statusText;
    };
    ajaxSettings.timeout = 5000;
    ajaxSettings.traditional = false;
    ajaxSettings.url = "https://api.usaspending.gov/api/v2/financial_balances/agencies/?funding_agency_id=775&fiscal_year=2017";
    return ajaxSettings;
}
function test() {
    var callSettings = getDefaultAjaxSettings();
    callSettings.url = "https://api.usaspending.gov/api/v2/financial_balances/agencies/?funding_agency_id=775&fiscal_year=2017";
    callSettings.url = "http://vus-glems-02:21212/commits/v1/approvers/me";
    callSettings.url = "http://ems.amat.com:21212/commits/v1/approvers/me";
    callSettings.xhrFields = { withCredentials: true };
    $.ajax(callSettings);
}
(function () {
    test();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7SUFHSSxJQUFJLFlBQVksR0FBd0IsRUFBRSxDQUFDO0lBSTNDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBRTFCLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzNCLFlBQVksQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUUsTUFBTTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQTtJQUVELFlBQVksQ0FBQyxXQUFXLEdBQUcsa0RBQWtELENBQUM7SUFFOUUsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFJaEMsWUFBWSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDL0IsWUFBWSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFDO0lBQ0YsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFPM0IsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFXNUIsWUFBWSxDQUFDLE9BQU8sR0FBRyxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRWxELElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDcEMsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3BDLENBQUMsQ0FBQTtJQUdELFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzVCLFlBQVksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBRWpDLFlBQVksQ0FBQyxHQUFHLEdBQUcsd0dBQXdHLENBQUM7SUFHNUgsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDO0FBRUQ7SUFFSSxJQUFJLFlBQVksR0FBRyxzQkFBc0IsRUFBRSxDQUFDO0lBRTVDLFlBQVksQ0FBQyxHQUFHLEdBQUcsd0dBQXdHLENBQUM7SUFDNUgsWUFBWSxDQUFDLEdBQUcsR0FBRyxtREFBbUQsQ0FBQztJQUV2RSxZQUFZLENBQUMsR0FBRyxHQUFHLG1EQUFtRCxDQUFDO0lBR3ZFLFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQU16QixDQUFDO0FBSUQsQ0FBQztJQWdCRyxJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==