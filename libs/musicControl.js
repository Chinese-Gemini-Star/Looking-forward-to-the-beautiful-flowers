var music = document.getElementById("music");
var music_btn = document.getElementById("music_btn");

/**
 * 控制bgm的播放与暂停
 */
function playPause() {
    if (music.paused) {
        music.play();
        music_btn.src = "images/play.png";
    } else {
        music.pause();
        music_btn.src = "images/pause.png";
    }
}
/**
 * 切换BGM
 * @param  {String} bgmSrc BGM路径
 * @return {int}           0
 */
function changeBGM(bgmSrc) {
    music.src = bgmSrc;
    return 0;
}

document.addEventListener("DOMContentLoaded", function() {
    music.play();
});