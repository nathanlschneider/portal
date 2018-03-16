 function checkAlert2() { alert();
$(document).ready(function () { // load xml file using jquery ajax
    $.ajax({
        type: "GET",
        url: "data.xml",
        dataType: "xml",
        success: function(xml) { 
            var output = '<ul>';
            $(xml).find('XMLdata').each(function(){
                var store = $(this).find('store').text();
                var message = $(this).find('message').text();
                var level = $(this).find('level').text();
                alert();
                if (store == sessionStorage.username) {
                  if (level == "1") {document.getElementById('modalTitle').innerHTML= "Attention!";}
                  if (level == "2") {document.getElementById('modalTitle').innerHTML= "Warning!";}
                  if (level == "3") {document.getElementById('modalTitle').innerHTML= "Critical!";}
                  document.getElementById('modalText').innerHTML = store + "," + message;                 
                  
                  $("#myModal").modal();}
                
            });
         } 
    });
});}