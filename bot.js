Browser.loadUrl("http://agar.io/");

Browser.loadUrl("http://agar.io/");
Helper.sleep(10);

Browser.loadUrl("http://agar.io/");
Browser.finishLoading();

var click_script = "document.getElementById('play').click();";
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

