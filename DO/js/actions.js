var choices = [];

function checkAuth() {
    HEATAPI.Auth.getSignInfo(function (data) {
        if (data.authenticated) {
            document.getElementById('logButton').innerText = "Logout";
            getContact();
        } else {
            document.getElementById('logButton').innerText = "Login";
        }
    });
}

function doLog() {
    var a = document.getElementById('logButton').innerText;
    if (a === 'Login') {
        HEATAPI.Auth.signIn(function (data) {
            console.log(data);
        })
    } else {
        HEATAPI.Auth.signOut(function (data) {
            alert("You have been logged out.");
            location.reload();

        });
    }
};

function getContact() {
    HEATAPI.Search.SearchBusinessObject("Frs_CompositeContract_Contact", '',
        "DisplayName",
        "LastModDateTime",
        "DESC",
        500,
        contactCallback);
}

function contactCallback(dataArray) {

    for (i = 0; dataArray.data[i] !== undefined; i++) {
        choices.push(dataArray.data[i].DisplayName);
        //console.log(dataArray.data[i].DisplayName);
    }
}

function makeApiCall() {
    var columnArray = ["RecId", "Category", "Priority", "Status", "Symptom", "Owner", "IncidentNumber", "Subject"];
    HEATAPI.Search.SearchBusinessObject("Incident", '',
        columnArray,
        "LastModDateTime",
        "DESC",
        null,
        processResult);
}

function processResult(array) { //array.data
    console.log(array.data);
    var c = document.getElementById('content');
    var toAdd = document.createDocumentFragment();
    for (var i = 0; i < 11; i++) {
        var newDiv = document.createElement('div');
        var divAtt = document.createAttribute('onclick');
        var classAtt = document.createAttribute('class');

        divAtt.value = "showTicket()";
        classAtt.value = "incidentBox";
        newDiv.setAttributeNode(classAtt);
        newDiv.setAttributeNode(divAtt);
        newDiv.innerHTML = "<span id='rarrow' class='glyphicon glyphicon-menu-right'></span><b>Incident:</b> #" +
            array.data[i].IncidentNumber + "<br><b>Priority: </b> " +
            array.data[i].Priority + "<br><b>Status: </b>" +
            array.data[i].Status + "<br><b>Subject: </b>" +
            ts(array.data[i].Subject);

        toAdd.appendChild(newDiv);
    }
    c.appendChild(toAdd);
}

function showTicket(data) {
    hideNodes();
    var c = document.getElementById('ticket');
    c.style.display = "block";
    var toAdd = document.createDocumentFragment();
    var newDiv = document.createElement('div');
    newDiv.id = 'ticketContents';
    newDiv.innerHTML = "<b>Description</b><br>" + data;
    toAdd.appendChild(newDiv);
    c.appendChild(toAdd);
}

function hideTicket() {
    showNodes();
    var c = document.getElementById('ticket');
    c.style.display = "none";
    var tc = document.getElementById('ticketContents');
    tc.remove();
}

function clearNodes() {
    var myNode = document.getElementById("content");
    myNode.innerHTML = '';
}

function hideNodes() {
    var parent = document.getElementById('content');
    if (parent.hasChildNodes) {
        var kids = parent.childNodes;
        for (var c = 0; c < kids.length; c++) {
            if (kids[c].style) {
                kids[c].style.display = 'none';
            }
        }
    }
}

function showNodes() {
    var parent = document.getElementById('content');
    if (parent.hasChildNodes) {
        var kids = parent.childNodes;
        for (var c = 0; c < kids.length; c++) {
            if (kids[c].style) {
                kids[c].style.display = 'block';
            }
        }
    }
}

function ts(string) {
    var length = 35;
    var trimmedString = string.length > length ?
        string.substring(0, length - 3) + "..." :
        string;
    return trimmedString;
}

function fullScreen() {
   
}


/*
function () {
    HEATAPIUtils.getJSONP(identityProviderUrl + '/Account/UserInfo', function (response) {
        if (!response.authenticated) {
            HEATAPI.Auth.signIn();
        } else {
            document.getElementById('logoutButton').innerText = "Logout";
            getList();
        }
    });
}

function getList() {
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
};

*/
