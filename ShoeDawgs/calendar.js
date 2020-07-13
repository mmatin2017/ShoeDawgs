$(document).ready(function(){
    $.getJSON("calendar.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#releases").append(
                    "<h2>" + value.title + "</h2>" +
                    "<p>" + value.releaseDate + "</p>" +
                    "<p>" + value.brand + "</p>" +
                    "<p>" + value.colorway + "</p>"

                );
            });
        });
    });
});
