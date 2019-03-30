
// Below gets the post on start up.
//$(document).ready(function () {
//    $.ajax({
//        url: "https://jsonplaceholder.typicode.com/Posts/6"
//    }).then(function (data) {
//        $('#postid').html(data.id);
//        $('#postcontent').html(data.body);
//    });
//});

$("#btngetposts").click(function () {
    var postid = inputpostid.value;
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/Posts/' + postid
    }).then(function (data) {
        $('#postid').html(data.id);
        $('#posttitle').html(data.title);
        $('#postcontent').html(data.body);
    });
});