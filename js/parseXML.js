function checkAlert2() { alert();
$(document).ready(function () { // load xml file using jquery ajax
    $.ajax({
        type: "GET",
        url: "data.xml",
        dataType: "xml",
        success: function(xml) {
         
            $(xml).find('Stores').each(function(){
                var store = $(this).find('store').text();
                var message = $(this).find('message').text();
                var level = $(this).find('level').text();
                
                if (store == sessionStorage.username) {alert("!");} else {alert("?");};
                
            });
        }
    });
});}