Browser.loadUrl("https://imsolo.pro/2017");
Helper.sleep(10);
Browser.loadUrl("https://imsolo.pro/2017");
Browser.finishLoading();
var click_script = "document.getElementById('play-btn').click();";
Browser.executeJavscript(click_script);
var screenshot = Browser.takeScreenshot();
var template = new Image("play_button.png");
var match = Vision.findMatch(screenshot, template, 0.95);
var screenshot = Browser.takeScreenshot();
var template = new Image("play_button.png");
var match = Vision.findMatch(screenshot, template, 0.95);
if (match.isValid()) {
    var play_button_position = match.getRect().getCenter();
    Browser.leftClick(play_button_position);
}

