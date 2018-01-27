var currentjsindex = 1;
document.getElementById('jseditor').addEventListener('keydown', function (e) {
    let key = e.keyCode;
    if (key === 13) {
        currentjsindex = currentjsindex + 1;
        document.getElementById('jsindex').innerHTML = document.getElementById('jsindex').innerHTML + currentjsindex + " ";
    }
    if (key === 8) {
        if (currentjsindex !== 1) {
            let temp = document.getElementById('jsindex').innerHTML;
            let curr = temp.substr(0, temp.length - 2);
            document.getElementById('jsindex').innerHTML = curr;
            currentjsindex = currentjsindex - 1;
        }
    }
})


var currentpyindex = 1;
document.getElementById('pyeditor').addEventListener('keydown', function (e) {
    let key = e.keyCode;
    if (key === 13) {
        currentpyindex = currentpyindex + 1;
        document.getElementById('pyindex').innerHTML = document.getElementById('pyindex').innerHTML + currentpyindex + " ";
    }
    if (key === 8) {
        if (currentpyindex !== 1) {
            let temp = document.getElementById('pyindex').innerHTML;
            let curr = temp.substr(0, temp.length - 2);
            document.getElementById('pyindex').innerHTML = curr;
            currentpyindex = currentpyindex - 1;
        }
    }
})


function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');

    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            $(element).append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

$(document).ready(function () {
    var speed = 75;
    var delay = $('#text').text().length * speed + speed;
    typeEffect($('#text'), speed);
});

