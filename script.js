// جلوگیری از خروج از صفحه
window.history.pushState(null, "", window.location.href);
window.onpopstate = function() {
    window.history.pushState(null, "", window.location.href);
};

// غیرفعال کردن کلیک و لمس
document.addEventListener('click', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('touchstart', function(event) {
    event.preventDefault();
}, false);

// غیرفعال کردن کلیدهای میانبر و دکمه های خاص
document.addEventListener('keydown', function(event) {
    event.preventDefault();

    //غیر فعال کردن دکمه f12 برای جلوگیری از بازکردن inspect element
    if(event.keyCode == 123){
        event.preventDefault();
    }
});

// تمام صفحه کردن صفحه
function launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

launchIntoFullscreen(document.documentElement); //صفحه تمام صفحه میشود

// پخش صدا با حداکثر ولوم
window.onload = function() {
    var alarmSound = document.getElementById("alarm-sound");
    alarmSound.volume = 1;
    alarmSound.play();
    alarmSound.addEventListener('ended', function() {
        alarmSound.play();
    });
}