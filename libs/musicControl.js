var playPause;
var changeBGM;
// 控制按钮
var music_btn = document.getElementById("music_btn");
// 控制按钮点按次数
var times = 0;
// 是否停止bgm
var shouldStop = false;

(function() {
    // 背景音乐
    var music = document.getElementById("music");

    /**
     * 控制bgm的播放与暂停
     */
    playPause = function() {
        if (!shouldStop) {
            times++;
            music.play();
            shouldStop = true;
            music_btn.src = "images/play.png";
        } else {
            times++;
            music.pause();
            shouldStop = false;
            music_btn.src = "images/pause.png";
        }
    };
    /**
     * 切换BGM
     * @param  {String} bgmSrc BGM路径
     * @return {int}           0
     */
    changeBGM = function(bgmSrc) {
        console.log(shouldStop);
        if (!shouldStop) {
            music.src = bgmSrc;
            music.pause();
        } else {
            music.src = bgmSrc;
            music.play();
        }
        return 0;
    };
})();