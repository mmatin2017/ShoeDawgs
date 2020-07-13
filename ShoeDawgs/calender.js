$(document).ready(function(){
  var url =
         "https://api.thesneakerdatabase.com/v1/sneakers?" +
         "imit=100&releaseYear=2020?";
         $.getJSON(url, function(data) {
             var html = "";
             $.each(data.items, function(i, item){
                html += "<a href=" + item.media.m +  ">" +
                "<img src=" + item.media.m + ">" +
                "</a>";


             });
             $("releases").html(html);
         });

});
