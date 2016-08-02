function createCookie(name, value, days){
    var expires;
    var date;
    if(days){
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === " "){
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0){
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function alert_version(last_version){
    jQuery(function( $ ){
        $("#alert-version").click(function( e ){
            e.preventDefault();
            createCookie("cas-alert-version", last_version, 10*365);
        });
        if(readCookie("cas-alert-version") === last_version){
            $("#alert-version").parent().hide();
        }
    });
}
