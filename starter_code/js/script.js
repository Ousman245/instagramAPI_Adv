// YOUR CODE GOES HERE
var clientID = "3565fe59fc166cb7f5a0ab9b7c982cc8";

$(document).ready(function() {

    $("#reset").click(function() {
        $("#search-results").empty();
    });
    $("#search-btn").click(function() {
        var userChoice = $("#search-query").val();
        searchFlickr(clientID, userChoice, 10, function(photos) {
            for (var i = 0; i < photos.photo.length; i++) {
                photos.photo[i];
                console.log(photos.photo[i]);
                insertIntoPage(photos.photo[i]);
                console.log();
            }


        });

    });
});

function insertIntoPage(photoInfo) {
    var url = '//www.flickr.com/photos/' + photoInfo.owner + '/' + photoInfo.id;
    
    $('#search-results').append("<a href=" + url + ">" + "<img src=" + photoInfo.url_m + ">  </img></a>");
    
}
// + sign with .append
