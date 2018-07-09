
function updateJS() {
    HEATAPI.Auth.getSignInfo(function (data) { alert(data.login) ;
        document.getElementById('userInfo').innerHTML = '<li><span class="glyphicon glyphicon-user"></span> Hello ' + data.login + '!</li>'
} ) } 