// globals
var identityProviderUrl = 'https://mhg-heat-web:443/HEAT/Modules/IdentityProvider';
var dataSub = "";
var dataBody = [];
var autoComp = [];
var parms;
var i = 0;
var choices = [];
var sCode;

//functions
// Start/stop scanner


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);

        for (i = 0; data[i] !== undefined; i++) {

        choices.push(data[i].DisplayName);

        }
    }
}

xmlhttp.open("GET", "data/list.json", true);

xmlhttp.send();

function login() {
    if (document.getElementById('loginButton').innerHTML = "Login") {
        HEATAPI.Auth.signIn(function (data) {
            HEATAPIUtils.getJSONP(identityProviderUrl + '/Account/UserInfo', function (response) {
                if (response.authenticated) {
                    document.getElementById('userInfo').innerHTML = response.login;
                    document.getElementById('loginButton').innerHTML = "Logout";
                }
            });
        });
    } else {
        logout();
    }
};

function logout() {
    HEATAPI.Auth.signOut();
    document.getElementById('userInfo').innerHTML = "";
    document.getElementById('loginButton').innerHTML = "Login";
}

function btnType(data) {
    document.getElementById('btnType').innerHTML = data + " <span class=\"glyphicon glyphicon-ok\"></span>";
    if (data == "Register") {
        document.getElementById('brandContent').innerHTML = "<li><a href=\"javascript:btnBrand('NCR');\">NCR</a></li><li><a href=\"javascript:btnBrand('Panasonic');\">Panasonic</a></li>";
        dataBody.splice(0,0,'Register');
    };
    if (data == "Computer") {
        document.getElementById('brandContent').innerHTML = "<li><a href=\"javascript:btnBrand('Acer');\">NCR</a></li><li><a href=\"javascript:btnBrand('Dell');\">NCR</a></li><li><a href=\"javascript:btnBrand('NCR');\">NCR</a></li>";
        dataBody.splice(0,0,'Computer');
    };
    if (data == "Router") {
        document.getElementById('brandContent').innerHTML = "<li><a href=\"javascript:btnBrand('CradlePoint');\">CradlePoint</a></li>";
        dataBody.splice(1,'Router');
    };
    if (data == "Firewall") {
        document.getElementById('brandContent').innerHTML = "<li><a href=\"javascript:btnBrand('Fortinet');\">Fortinet</a></li>";
        dataBody.splice(1,'Firewall');
    };
    if (data == "Training Computer") {
        document.getElementById('brandContent').innerHTML = "<li><a href=\"javascript:btnBrand('Generic');\">NCR</a></li><li><a href=\"javascript:btnBrand('NCR');\">NCR</a></li><li><a href=\"javascript:btnBrand('NCR');\">NCR</a></li>";
        dataBody.splice(1,'Training Computer');
    };
    if (data == "UPS") {
        document.getElementById('brandContent').innerHTML = "<li><a href=\"javascript:btnBrand('CyberPower');\">CyberPower</a></li><li><a href=\"javascript:btnBrand('Triplite');\">Triplite</a></li><li><a href=\"javascript:btnBrand('APC');\">APC</a></li><li><a href=\"javascript:btnBrand('Generic');\">Generic</a></li>";
        dataBody.splice(1,'UPS');
    };
}

function btnBrand(data) {
    document.getElementById('btnBrand').innerHTML = data + " <span class=\"glyphicon glyphicon-ok\"></span>";
    if (data == "NCR") {
        document.getElementById('modelContent').innerHTML = "<li><a href=\"javascript:btnModel('1530');\">1530</a></li><li><a href=\"javascript:btnModel('1560');\">1560</a></li><li><a href=\"javascript:btnModel('1600');\">1600</a></li>";
        dataBody.splice(1,0,'NCR');
    };
}

function btnModel(data) {
    document.getElementById('btnModel').innerHTML = data + " <span class=\"glyphicon glyphicon-ok\"></span>";
    dataBody.splice(2,0,data);
}

function btnLocation(data) {
    document.getElementById('btnLocation').innerHTML = data + " <span class=\"glyphicon glyphicon-ok\"></span>";
    dataBody.splice(3,0,data);
}

function callSubmit() {
   // dataBody.push(document.getElementById('serialNumber').value);
   var pData = document.getElementById('possessor').value;
   //var pParsedA = pData.replace(" ", "%20");
   //var pParsedB = pParsedA.replace("#", "%23")
   //var pParsedC = pParsedB.replace("'", "")
   var pParsedC = pData.replace("Wendy's #", "");
    var data = null;

    var xhr = new XMLHttpRequest();
        
    xhr.addEventListener("readystatechange", function () {
     
        if (xhr.status != 0 && xhr.readyState == 4) {
        console.log("Status Code " + xhr.status);
        }

        if (xhr.status == 500 && xhr.readyState == 4) {
            console.log("Status Code " + xhr.status);
            alert('Submission Error!');
            }
    });
   
    var url = 'https://mhg-lt047:10001/?Type=' + dataBody[0] + '&Brand='+ dataBody[1] + '&Model='+ dataBody[2] +'&Location='+ dataBody[3] + '&Serial='+ sCode + '&Possessor=' + pParsedC;
            xhr.open('POST', url);
            xhr.send();
    //window.location.reload();   
}



   


    

