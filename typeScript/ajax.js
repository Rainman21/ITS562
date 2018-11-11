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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsU0FBUyxzQkFBc0I7SUFHM0IsSUFBSSxZQUFZLEdBQXdCLEVBQUUsQ0FBQztJQUkzQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUUxQixZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixZQUFZLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFLE1BQU07UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUE7SUFFRCxZQUFZLENBQUMsV0FBVyxHQUFHLGtEQUFrRCxDQUFDO0lBRTlFLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBSWhDLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQy9CLFlBQVksQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQztJQUNGLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBTzNCLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBVzVCLFlBQVksQ0FBQyxPQUFPLEdBQUcsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUVsRCxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3BDLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNwQyxDQUFDLENBQUE7SUFHRCxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUM1QixZQUFZLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUVqQyxZQUFZLENBQUMsR0FBRyxHQUFHLHdHQUF3RyxDQUFDO0lBRzVILE9BQU8sWUFBWSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxTQUFTLElBQUk7SUFFVCxJQUFJLFlBQVksR0FBRyxzQkFBc0IsRUFBRSxDQUFDO0lBRTVDLFlBQVksQ0FBQyxHQUFHLEdBQUcsd0dBQXdHLENBQUM7SUFDNUgsWUFBWSxDQUFDLEdBQUcsR0FBRyxtREFBbUQsQ0FBQztJQUV2RSxZQUFZLENBQUMsR0FBRyxHQUFHLG1EQUFtRCxDQUFDO0lBR3ZFLFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQU16QixDQUFDO0FBSUQsQ0FBQztJQWdCRyxJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==