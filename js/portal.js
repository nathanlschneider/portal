//portal js
       function logout(){sessionStorage.username="Please Login";HEATAPI.Auth.signOut(function(a){window.confirm("Do you really want to log out?")&&location.reload()})};
       function uppercase(a){a=a.split(" ");for(var c=[],b=0;b<a.length;b++)c.push(a[b].charAt(0).toUpperCase()+a[b].slice(1));return c.join(" ")};
       function invis(){document.getElementById("nate").style.display="none"};
       function doName(){ 
           void 0===sessionStorage.username?document.getElementById("user").innerHTML="Please Login":document.getElementById("user").innerHTML=uppercase(sessionStorage.username);
                checkAlert2(); checkLinks(); $.get("lte/lteData.txt",parseData);}

 function parseData(data){
        //do something with the data
       if (data.includes(sessionStorage.username.toUpperCase())) { document.getElementById('sigIco').style.color = 'red'} 
       if (!data.includes(sessionStorage.username.toUpperCase())) { document.getElementById('sigIco').style.color = 'lime'}
       if (sessionStorage.username == "Please Login") { document.getElementById('sigIco').style.color = 'grey'}
    };
     
   
       function checkAlert2() { 
$(document).ready(function () { // load xml file using jquery ajax
    $.ajax({
        type: "GET",
        url: "data.xml",
       
        success: function(xml) {
            var output = '<ul>';
            $(xml).find('XMLdata').each(function(){
                var store = $(this).find('store').text();
                var message = $(this).find('message').text();
                var level = $(this).find('level').text();
               
                if (store == sessionStorage.username) {
                  if (level == "1") {document.getElementById('alertBox').innerHTML= "<div class='alert alert-info alert-dismissable'><br><strong><h3><span class='glyphicon glyphicon-info-sign'></span> Info Alert </h3></strong><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>" + message + "</div>";};
                  if (level == "2") {document.getElementById('alertBox').innerHTML= "<div class='alert alert-warning alert-dismissable'><br><strong><h3><span class='glyphicon glyphicon-exclamation-sign'></span> Alert </h3></strong><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>" + message + "</div>";};
                  if (level == "3") {document.getElementById('alertBox').innerHTML= "<div class='alert alert-danger alert-dismissable' style='background: #ac2a28; color: white;'><br><strong><h3><span class='glyphicon glyphicon-alert'></span> Warning! </h3></strong><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a>" + message + "</div>";};
                                
                                 document.getElementById('alertBox').style.display = "block"; }
                
            });
         } 
    });
});

};
       
           
           function checkLinks() { 
           if (sessionStorage.username === undefined || "Please Login") { document.getElementById("marketLinks").innerHTML = "Please login to see your links"; } 
           if (sessionStorage.username.includes("wen" || "Wen")) {

           document.getElementById("marketLinks").innerHTML = ' <li> <a href="https://helpdesk.mhg.net/" target="_blank"><b>Maintenance Tickets</b></a> </li> <li> <a href="https://email.mhgi.net/owa" target="_blank"><img src="images/email.png" alt="pic"> Email</a> </li> <li> <a href="#"><img src="images/navicus.png" onclick="doPop()" alt="pic"> Camera System</a> </li> <li> <a href="http://10.90.254.99/" target="_blank"><img src="images/navicus.png" alt="pic"> Zoom Timer</a> </li> <li> <a href="http://web.mhgi.net/wendys/SitePages/Home.aspx" target="_blank"><img src="images/sharepoint/favicon.ico" height="16" width="16" alt="pic"> Sharepoint</a> </li> <li> <a href="https://reporting.smg.com/index.aspx" target="_blank"><img src="images/SMG.png" alt="pic" height="16" width="16"> SMG</a> </li> <li> <a href="http://wenfran.frontlinesales.com/" target="_blank"><img src="images/front.jpg" alt="pic" height="16" width="16"> Front Line Sales</a> </li> <li> <a href="https://wendys.csod.com/client/wendys/default.aspx" target="_blank"><img src="images/front.jpg" alt="pic" height="16" width="16"> WeLearn 2.0</a> </li> <li> <a href="https://wenet.wendys.com/login.aspx?TYPE=33554433&REALMOID=06-8ebe4634-0dff-45b4-b10c-6da2fda25ebd&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-xkwnlOOVXq5kpLEpqkzt2fff1L0MteHLG4%2b6oB9EvPVmzM4yVxIMu1DqJjCPA0L%2f&TARGET=-SM-HTTPS%3a%2f%2fwenet%2ewendys%2ecom%2fhomecorpfran%2f" target="_blank"><img src="images/front.jpg" alt="pic" height="16" width="16"> WeNet</a> </li> <li> <a href="http://wendys.barcouniforms.com/WENDYS/default.asp" target="_blank"><img src="images/barco.png" alt="pic"> Barco</a> </li> <li> <a href="https://gportal.givex.com/portal/login.py" target="_blank"><img src="images/givex.png" alt="pic"> Givex</a> </li> <li> <a href="https://ats.navicus.com/Login.aspx" target="_blank"><img src="images/navicus.png" alt="pic"> Navicus</a> </li> <li> <a href="https://ats.navicus.com/portal/login.aspx?CompanyID=meritage&CurrentCompany=4&AspxAutoDetectCookieSupport=1" target="_blank"><img src="images/navicus.png" alt="pic"> Navicus Employee Portal</a> </li> <li> <a href="http://www.servsafe.com/home" target="_blank"><img src="images/safeserve.png" alt="pic"> ServSafe</a> </li> <li> <a href="http://www.staplesadvantage.com/index.page" target="_blank"><img src="images/staples.png" alt="pic"> Staples</a> </li> <li> <a href="https://www.globalcashcard.com/" target="_blank"><img src="images/globalcashcard.png" alt="pic"> Global Cash Card</a> </li> <li> <a href="https://www.campusship.ups.com/login/wendysofmi" target="_blank"><img src="images/ups.png" alt="pic"> UPS</a> </li> <li> <a href="http://www.wasserstrom.com/" target="_blank"><img src="images/wass.png" alt="pic"> Wasserstrom</a> </li> <li> <a href="http://www.cerepairs.com/?pg=SendRepair" target="_blank"><img src="images/ce.png" alt="pic"> CE Repair</a> </li> <li> <a href="https://www.walkerenterprises.com/" target="_blank"><img src="images/navicus.png" alt="pic"> Walker Enterprises</a> </li> <li> <a href="http://www.meritagecareers.com/" target="_blank"><img src="images/mhgi.png" alt="pic"> Meritage Careers</a> </li> <li> <a href="https://app.questarinsight.com/portal" target="_blank"><img src="images/navicus.png" alt="pic"> Questar</a> </li> <li> <a href="https://www.wyckwyrejobs.com/admin/" target="_blank"><img src="images/navicus.png" alt="pic"> WyckWyre</a> </li> ';}}
           
     