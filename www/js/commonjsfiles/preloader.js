Game.preloader = function (game) {

};
var fx;

Game.preloader.prototype = {

    // init: function ()
    // {

    // },

    preload: function () {
        console.log("I am in preloader.js");

        _this = this;

        // var levelParameter = this.game.myParameter.level;
        // _this.app_mode = window.app_mode; 

        // console.log(_this.game.app_mode,"_this.game.app_mode");

        _this.bg = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'loadingBg1');

        _this.loadingSound = document.createElement('audio');
        _this.loadingSoundSrc = document.createElement('source');
        _this.loadingSoundSrc.setAttribute("src", "sounds/LoadingSound.mp3");
        _this.loadingSound.appendChild(_this.loadingSoundSrc);
        _this.loadingSound.loop = true;
        _this.loadingSound.play();
        _this.once = true;
        var preloadGrp = _this.add.group();
        _this.preloadBarOutline = _this.add.sprite(_this.world.centerX, _this.world.centerY, 'prgressbarOutLine');
        _this.preloadBars = _this.add.sprite(_this.world.centerX, _this.world.centerY, 'preloadBar');
        _this.time.advanceTiming = true;
        _this.load.setPreloadSprite(_this.preloadBars);
        preloadGrp.add(_this.preloadBarOutline);
        preloadGrp.add(_this.preloadBars);

        preloadGrp.x -= 105;
        //preloadGrp.y += 150;

        this.loadjscssfile("js/videoSkip.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/practice.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/selectgrade6MicroConceptScreen.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/grade6Algebra.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/grade6Geometry.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/grade6NumberSystems.js", "js");

        //** grade 8 */
        this.loadjscssfile("js/gradeSelectionScreenJS/selectgrade8MicroConceptScreen.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/grade8Algebra.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/grade8Geometry.js", "js");
        this.loadjscssfile("js/gradeSelectionScreenJS/grade8NumberSystems.js", "js");

        this.loadjscssfile("js/commonjsfiles/score.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_Score.js", "js");

        //*Grade 8 Scripts here
        this.loadjscssfile("js/commonjsfiles/preloader_AL_DIV_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_AL_ES1_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_AL_IDE_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_AL_MUL_2_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_AL_MUL1_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_AL_MUL3_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMM_03_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMSS_01_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_AL_FACT_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_NS_RN_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMSS_03_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_NS_DIN_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_NS_RN_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMM_01_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMM_02_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMM_04_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMM_05_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_GMSS_02_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/preloader_NS_SQ_CUB_G8.js", "js");

        this.loadjscssfile("js/commonjsfiles/loadJson_AL_DIV_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_AL_ES1_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_AL_IDE_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_AL_MUL_2_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_AL_MUL1_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_AL_MUL3_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMM_03_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMSS_01_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_NS_RN_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_AL_FACT_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMSS_03_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_NS_DIN_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_NS_RN_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMM_01_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMM_02_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMM_04_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMM_05_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_GMSS_02_G8.js", "js");
        this.loadjscssfile("js/commonjsfiles/loadJson_NS_SQ_CUB_G8.js", "js");
        //*
        this.loadjscssfile("js/gradejs/AL-FACT-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/NS-RN-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/AL-DIV-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/AL-ES1-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/AL-IDE-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/AL-MUL-2-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/AL-MUL3-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/AL-MUL1-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMM-03-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMSS-01-G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMSS_02_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMM_05_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMM_04_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMM_02_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMM_01_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/NS_RN_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/NS_DIN_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/GMSS_03_G8/level1.js", "js");
        this.loadjscssfile("js/gradejs/NS_SQ_CUB_G8/level1.js", "js");
        //*level,json,preloader

        //// ***************************** loading the video files *****************************************//
        this.load.video('demo7_1_1', './demo.mp4');
        this.load.video('demo', './demo.mp4');

        _this.addgradeSelectionAssets();
        _this.addAllgradeSelectionAssets();
        _this.loadCommonAssets();

        _this.load.audio('ClickSound', 'sounds/ClickSound.mp3');

        this.loadCommonAssets1();
        _this.selectLang();
    },

    selectLang: function (lang) {
        console.log(lang, "langggggg")
    },

    progress: function (progress, cacheKey, success, totalLoaded, totalFiles) {
        _this.preloadBar.frame = progress;
    },

    progress1: function (progress, cacheKey, success, totalLoaded, totalFiles) {

        if (progress == 8) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 120 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 25) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 240 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 37) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 360 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 50) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 480 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 62) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 600 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 75) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 720 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 85) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 820 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 92) {
            _this.tween = _this.add.tween(_this.preloadBar);
            _this.tween.to({ x: 1000 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
        }
        else if (progress == 97) {
            _this.preloadBar.x = 1000;
        }

    },

    addgradeSelectionAssets: function () {
        _this.load.atlas('MicroConceptTree', window.baseUrl + 'assets/gradeSelectionScreenAssets/microConceptTree.png', window.baseUrl + 'json/gradeSelectionScreenJson/microConceptTree.json');
        _this.load.image('McBg', window.baseUrl + 'assets/gradeSelectionScreenAssets/McBg.png');
        _this.load.image('gameselectBg', window.baseUrl + 'assets/gradeSelectionScreenAssets/gradeSelectBg.png');
        _this.load.image('gradeSceneBackBtn', window.baseUrl + 'assets/gradeSelectionScreenAssets/gradeSceneBackBtn.png');
        _this.load.atlas('gradeCloud', window.baseUrl + 'assets/gradeSelectionScreenAssets/grade1Cloudnew.png', window.baseUrl + 'assets/gradeSelectionScreenAssets/grade1Cloudnew.json');

    },

    addAllgradeSelectionAssets: function () {

        //* Grade 8 Game icons
        _this.load.image('AL_MUL3_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/AL-MUL3-G8.png');
        _this.load.image('GMM_1_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMM-01-G8.png');
        _this.load.image('GMM_2_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMM-02-G8.png');
        _this.load.image('AL_DIV_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/AL-DIV-G8.png');
        _this.load.image('AL_ES1_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/AL-ES1-G8.png');
        _this.load.image('AL_FACT_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/AL-FACT-G8.png');
        _this.load.image('AL_IDE_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/AL-IDE-G8.png');
        _this.load.image('AL_MUL1_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/AL-MUL1-G8.png');
        _this.load.image('AL_MUL2_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/AL-MUL2-G8.png');
        _this.load.image('GMM_3_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMM-03-G8.png');
        _this.load.image('GMM_4_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMM-04-G8.png');
        _this.load.image('GMM_5_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMM-05-G8.png');
        _this.load.image('GMSS_01_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMSS_01_G8.png');
        _this.load.image('GMSS_02_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMSS_02_G8.png');
        _this.load.image('GMSS_03_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/GMSS-03-G8.png');
        _this.load.image('NS_DIN_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/NS_DIN_G8.png');
        _this.load.image('NS_SQ_CUB_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/NS_SQ_CUB_G8.png');
        _this.load.image('NS_RN_Screen', window.baseUrl + 'assets/gradeSelectionScreenAssets/NS-RN-G8.png');

    },

    loadCommonAssets: function () {

        this.load.image("shareIcon", "assets/shareIcon.png");
        this.load.image("timeIcon", "assets/timeIcon.png");
        this.load.image("userProgressIcon", "assets/userProgressIcon.png");
        _this.load.atlas("progressCircle", "assets/progressCircle.png", "assets/progressCircle.json");

        this.load.image("shareIconScore", "assets/shareIconScore.png");
        _this.load.atlas('newCommonBackBtnForAll', window.baseUrl + 'assets/commonAssets/newBackBtn.png', window.baseUrl + 'assets/commonAssets/newBackBtn.json');

        _this.load.image('gameModeBg', window.baseUrl + 'assets/gradeSelectionScreenAssets/gameModeBg.png');
        _this.load.image('gameModeNavBar', window.baseUrl + 'assets/gradeSelectionScreenAssets/gameModeNavBar.png');


        _this.load.image('gameModeBackBtn', window.baseUrl + 'assets/gradeSelectionScreenAssets/gameModeBackBtn.png');
        _this.load.image('skipDemoVideos', window.baseUrl + 'assets/commonAssets/skipArrow.png');

        _this.load.image('commonBg1', window.baseUrl + 'assets/commonAssets/commonBg1.png');
        _this.load.image('commonBg2', window.baseUrl + 'assets/commonAssets/commonBg2.png');
        _this.load.image('bottomBar', window.baseUrl + 'assets/commonAssets/bottomBar.png');
        _this.load.atlas('CommonStarAnim', window.baseUrl + 'assets/commonAssets/starAnim.png', window.baseUrl + 'json/commonJson/starAnim.json');

        //load common assets.
        _this.load.atlas('CommonBackBtn', window.baseUrl + 'assets/commonAssets/backbtn.png', window.baseUrl + 'json/commonJson/backbtn.json');
        _this.load.atlas('CommonSpeakerBtn', window.baseUrl + 'assets/commonAssets/speaker.png', window.baseUrl + 'json/commonJson/speaker.json');

        _this.load.atlas('starAnim1', window.baseUrl + 'assets/commonAssets/starAnim1.png', window.baseUrl + 'json/commonJson/starAnim1.json');
    },

    loadCommonAssets1: function () {

        this.load.image("mcIconNumber", window.baseUrl + "assets/commonAssets/number.png");
        this.load.image("mcIconInteger", window.baseUrl + "assets/commonAssets/icon 1.png");
        this.load.image("mcIconFraction", window.baseUrl + "assets/commonAssets/fraction.png");
        this.load.image("mcIconAlgebra", window.baseUrl + "assets/commonAssets/icon 4.png");
        //this.load.image("mcIconPatterns",window.baseUrl+"assets/commonAssets/");
        this.load.image("mcIconShapes", window.baseUrl + "assets/commonAssets/icon 5.png");
        this.load.image("mcIconMensuration", window.baseUrl + "assets/commonAssets/icon 6.png");
        this.load.image("mcIconDecimal", window.baseUrl + "assets/commonAssets/icon 2.png");
        this.load.image("mcIconRatioProportion", window.baseUrl + "assets/commonAssets/icon 3.png");
        this.load.image("speakerBtn", window.baseUrl + "assets/commonAssets/speakerBtn.png");
        this.load.image("timerBg", window.baseUrl + "assets/commonAssets/timerBg.png");
        this.load.image("navBar", window.baseUrl + "assets/commonAssets/Nv bar.png");
        this.load.image("hand", window.baseUrl + "assets/commonAssets/hand.png");
        this.load.image("transparent", window.baseUrl + "assets/commonAssets/transparent.png");
        this.load.image("bottomBar", window.baseUrl + "assets/commonAssets/bottomBar.png");
        this.load.image("skipDemoVideos", window.baseUrl + "assets/commonAssets/skipArrow.png");
    },

    create: function (game) {

        game.state.add('practiceModegradeSelectionScreen', Game.practiceModegradeSelectionScreen);

        game.state.add('selectgrade6MicroConceptScreen', Game.selectgrade6MicroConceptScreen);
        game.state.add('selectgrade7MicroConceptScreen', Game.selectgrade7MicroConceptScreen);
        game.state.add('selectgrade8MicroConceptScreen', Game.selectgrade8MicroConceptScreen);

        game.state.add('score', Game.score);

        game.state.add('grade8Geometry', Game.grade8Geometry);
        game.state.add('grade8NumberSystems', Game.grade8NumberSystems);
        game.state.add('grade8Algebra', Game.grade8Algebra);

        //*Grade 8 
        //* preloader, level
        game.state.add('preloader_AL_DIV_G8', Game.preloader_AL_DIV_G8);
        game.state.add('AL_DIV_G8level1', Game.AL_DIV_G8level1);
        game.state.add('preloader_AL_ES1_G8', Game.preloader_AL_ES1_G8);
        game.state.add('AL_ES1_G8level1', Game.AL_ES1_G8level1);
        game.state.add('preloader_AL_IDE_G8', Game.preloader_AL_IDE_G8);
        game.state.add('AL_IDE_G8level1', Game.AL_IDE_G8level1);
        game.state.add('preloader_AL_MUL3_G8', Game.preloader_AL_MUL3_G8);
        game.state.add('AL_MUL3_G8level1', Game.AL_MUL3_G8level1);
        game.state.add('preloader_AL_MUL_2_G8', Game.preloader_AL_MUL_2_G8);
        game.state.add('AL_MUL_2_G8level1', Game.AL_MUL_2_G8level1);
        game.state.add('preloader_AL_MUL1_G8', Game.preloader_AL_MUL1_G8);
        game.state.add('AL_MUL1_G8level1', Game.AL_MUL1_G8level1);
        game.state.add('preloader_GMM_03_G8', Game.preloader_GMM_03_G8);
        game.state.add('GMM_03_G8level1', Game.GMM_03_G8level1);
        game.state.add('preloader_GMSS_01_G8', Game.preloader_GMSS_01_G8);
        game.state.add('GMSS_01_G8level1', Game.GMSS_01_G8level1);
        game.state.add('preloader_NS_RN_G8', Game.preloader_NS_RN_G8);
        game.state.add('NS_RN_G8level1', Game.NS_RN_G8level1);
        game.state.add('preloader_AL_FACT_G8', Game.preloader_AL_FACT_G8);
        game.state.add('AL_FACT_G8level1', Game.AL_FACT_G8level1);

        game.state.add('preloader_NS_DIN_G8', Game.preloader_NS_DIN_G8);
        game.state.add('NS_DIN_G8level1', Game.NS_DIN_G8level1);
        game.state.add('preloader_GMSS_03_G8', Game.preloader_GMSS_03_G8);
        game.state.add('GMSS_03_G8level1', Game.GMSS_03_G8level1);
        game.state.add('preloader_GMSS_02_G8', Game.preloader_GMSS_02_G8);
        game.state.add('GMSS_02_G8level1', Game.GMSS_02_G8level1);
        game.state.add('preloader_GMM_05_G8', Game.preloader_GMM_05_G8);
        game.state.add('GMM_05_G8level1', Game.GMM_05_G8level1);
        game.state.add('preloader_GMM_04_G8', Game.preloader_GMM_04_G8);
        game.state.add('GMM_04_G8level1', Game.GMM_04_G8level1);
        game.state.add('preloader_GMM_02_G8', Game.preloader_GMM_02_G8);
        game.state.add('GMM_02_G8level1', Game.GMM_02_G8level1);
        game.state.add('preloader_GMM_01_G8', Game.preloader_GMM_01_G8);
        game.state.add('GMM_01_G8level1', Game.GMM_01_G8level1);
        game.state.add('preloader_NS_SQ_CUB_G8', Game.preloader_NS_SQ_CUB_G8);
        game.state.add('NS_SQ_CUB_G8level1', Game.NS_SQ_CUB_G8level1);

        this.game.cache.removeImage('loadingBg1');
        this.game.cache.removeImage('loadingBg2');

        commonNavBar.addvideo(game);

        window.prevScreen = "practiceModegradeSelectionScreen";
        window.currScreen = "practiceModegradeSelectionScreen";

        if (window.userProgress == "true") {
            this.state.start('userprogress', true, false);
        } else {
            // 12-01-2023
            //if (localStorage.getItem("downloadComplete") == "true") {
            // window.baseUrl = cordova.file.externalRootDirectory + "Android/data/
            //com.Akshara.ENBBplusplus/Files/Download/.gameFilesBB++V10_2/www/";//cordova.file.externalDataDirectory + 
            if (window.app_Mode == "online") {
                console.log("Online app - its Preload", window.user);

                window.baseUrl = "https://abbmath.klp.org.in/bbplusplus/assets1/";
                _this.state.start('practiceModegradeSelectionScreen', true, false);
            } else {
                console.log("Offline app - its Preload");
                window.baseUrl = cordova.file.externalRootDirectory + "Android/data/com.Akshara.BBplusplusOffOdiG8/Files/Download/.gameFilesBB++V10_2/www/";
                _this.state.start('practiceModegradeSelectionScreen', true, false);
            }
        }
    },

    loadjscssfile: function (filename, filetype) {
        if (filetype == "js") { //if filename is a external JavaScript file
            var fileref = document.createElement('script')
            fileref.setAttribute("type", "text/javascript")
            fileref.setAttribute("src", filename)
        }
        else if (filetype == "css") { //if filename is an external CSS file
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    },

    shutdown: function () {
        _this.preloadBar = null;
        if (_this.loadingSound) {
            if (_this.loadingSound.contains(_this.loadingSoundSrc)) {
                _this.loadingSound.removeChild(_this.loadingSoundSrc);
                _this.src = null;
            }
            if (!_this.loadingSound.paused) {
                //console.log("here");
                _this.loadingSound.pause();
                _this.loadingSound.currentTime = 0.0;
            }
            _this.loadingSound = null;
            _this.loadingSoundSrc = null;
        }


        /*if(window.score==0)
        {
              window.score = 50;
        }*/

        window.score = parseInt(localStorage.getItem(window.avatarName + "Score"));
        // remove an item
        //alert(Number.isNaN(window.score));
        if (window.score == null || window.score == undefined || window.score == "" || Number.isNaN(window.score)) {
            //alert("here");
            localStorage.setItem(window.avatarName + "Score", 50);
            window.score = parseInt(localStorage.getItem(window.avatarName + "Score"));
        }
        //alert(window.score);
    }
}