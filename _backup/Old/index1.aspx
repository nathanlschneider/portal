<!DOCTYPE html>
<html lang="en">
<head>
   <title>IT HelpDesk Portal</title>
   <meta charset="utf-8">
   <meta content="width=device-width, initial-scale=1" name="viewport">
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   <link href="css/style.css" rel="stylesheet">
</head>
<body>

      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
         <div class="navbar-header">
            <p class="navbar-text" id="brad">IT HelpDesk Portal</p>
            <div class="headerDivider"></div>
         </div>
         <ul class="nav navbar-nav">
            <li><a href="http://mhg-heat-web/HEAT/?Scope=SelfService&CommandId=New&Tab=MyItems&frameless=true" target="bodyIframe">Create New Ticket</a>
            </li>
            <li>
               <a href="http://mhg-heat-web/HEAT/?Scope=SelfService&CommandId=Open&Tab=MyItems&frameless=true" target="bodyIframe">View Current Tickets</a>
            </li>
            <li>
               <a href="http://mhg-heat-web/HEAT/?Scope=SelfService&CommandId=Open&Tab=Knowledge&frameless=true" target="bodyIframe">Knowledge Base</a>
            </li>
            <li class="dropdown">
               <a class="dropdown-toggle" data-toggle="dropdown" href="#">Links <span class="caret"></span></a>
               <ul class="dropdown-menu">
                  <li>
                     <a href="https://email.mhgi.net/owa" target="_blank">Email</a>
                  </li>
                  <li>
                     <a href="#">We-Learn</a>
                  </li>
                  <li>
                     <a href="#">Navicus</a>
                  </li>
                  <li>
                     <a href="#">Camera System</a>
                  </li>
                  <li>
                     <a href="#">....</a>
                  </li>
                  <li>
                     <a href="#">....</a>
                  </li>
                  <li>
                     <a href="#">....</a>
                  </li>
                  <li>
                     <a href="#">....</a>
                  </li>
                  <li>
                     <a href="#">Nate RULES!!</a>
                  </li>
               </ul>
            </li>
            <li>
               <a href="http://mhg-heat-web/HEAT/?Scope=SelfService&CommandId=Open&Tab=Alert&frameless=true" id="alertLink" onclick="invis()" target="bodyIframe">Alerts <span class="label label-danger" id="alterNotice">NEW </span></a>
            </li>
            </ul>
         <ul class="nav navbar-nav navbar-right">
            
            <div class="navbar-text" id="userInfo">Hello <%:Session["login"]%></div>
            
            <li>
                <a id="loglink" href="#" onclick="logout();"><span class="glyphicon glyphicon-log-in"></span> Logout</a>
            </li>
         </ul>
      </div>
   </nav>
      
    <iframe id="bodyIframe" name="bodyIframe" src="http://mhg-heat-web/HEAT/?Scope=SelfService&CommandId=Open&Tab=MyItems&frameless=true"></iframe> 
   
<!-- <script src = 'http://mhg-heat-web/HEAT/Modules/HEATAPI/HEATApiClient?clientId=PORTAL&clientKey==8FRPgaPuPhuGwxK9mwfVX4PHVP0t24PwpgxL3ou3lw='> </script> -->


 <script> HEATAPI.MyItems.GetMyItemsList(1, function(data) {} ); </script>

<script>
HEATAPI.Auth.getSignInfo(function (data) { var datStr = data.login;
HEATAPI.Auth.isSigned(function (data) {    
if (data == true) { document.getElementById('userInfo').innerHTML = '<li><span class="glyphicon glyphicon-user"></span> Hello ' + datStr + '!</li>'
} } ) } )
</script>

<script> function recheck() {
    location.reload();
    location.reload();
}
</script>

  <script>
   function logout() {
   HEATAPI.Auth.signOut(function (data) {
   if (window.confirm('Do you really want to log out?'))
   {
   location.reload();
   }
   else
   {
   // They clicked no
   } 

   })}
   </script>



</body>
</html>