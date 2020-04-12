/**
 * 控制bgm的播放与暂停
 */
function playPause() {
    var music = document.getElementById("music");
    var music_btn = document.getElementById("music_btn");
    if (music.paused){
        music.play();
        music_btn.src = "images/play.png";
    }
    else{
        music.pause();
        music_btn.src = "images/pause.png";
    }
}