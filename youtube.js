function myfun() {

    var x = document.getElementById("value").value;
    var y = extractVideoID(x);
    // if (!x) {
        document.getElementById("videoplayer").src = "https://www.youtube.com/embed/" + y;
    // }
    // else if (x == !) {
    //     document.getElementById("videoplayer").src = "https://www.youtube.com/embed" + " https://www.youtube.com/watch?v=SN1JI3bEBSQ&t=19s";
    // }

}

function extractVideoID(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return 'Invalid YouTube URL';
    }
}
