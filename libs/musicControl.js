var playPause;
var changeBGM;
// 控制按钮
var music_btn = document.getElementById("music_btn");
// 控制按钮点按次数
var times = 0;

(function() {
    // 背景音乐
    var music = document.getElementById("music");

    /**
     * 控制bgm的播放与暂停
     */
    playPause = function() {
        if (music.paused) {
            times++;
            music.play();
            music_btn.src = "images/play.png";
        } else {
            times++;
            music.pause();
            music_btn.src = "images/pause.png";
        }
    };
    /**
     * 切换BGM
     * @param  {String} bgmSrc BGM路径
     * @return {int}           0
     */
    changeBGM = function(bgmSrc) {
        music.src = bgmSrc;
        return 0;
    };
})();