function getTheGlassiesRightNow() {
var http = require("http");
var options = {
    host: "www.cradlepointecm.com",
    path: "/api/v2/routers/?fields=stat&limit=50&offset=50",
    method: "GET",
};
var req = http.request(options, function (res) {
    var responseString = "";

    res.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    res.on("end", function () {
        console.log(responseString); 
        // print to console when response ends
    });
});

req.write();
req.end();
}