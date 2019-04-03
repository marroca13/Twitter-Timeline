var params = {
	url: 'http://turiscam.comunitatvalenciana.com/calpec.jpg',
	interval: 2000,
	width: 'auto',
	collapsed: false
};

var newUrl = getParameterByName("url");
params.url = newUrl? newUrl : params.url;

var newInterval = getParameterByName("interval");
params.interval = newInterval? parseInt(newInterval) : params.interval;

var newWidth = getParameterByName("width");
params['width'] = newWidth? parseInt(newWidth) : params['width'];

if(getParameterByName("collapsed")){
	document.querySelector('body').className="collapsed"
}
if(params['width'] != 'auto'){
	document.querySelector('canvas').style.width = params['width'] + 'px';
}
// Code from: https://stackoverflow.com/a/30209810

var url = params.url; //url to load image from
var refreshInterval = params.interval; //in ms
var drawDate = true; //draw date string
var img;

function init() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    img = new Image();
    img.onload = function() {
        canvas.setAttribute("width", img.width)
        canvas.setAttribute("height", img.height)
        context.drawImage(this, 0, 0);
        if(drawDate) {
            var now = new Date();
            var text = now.toLocaleDateString() + " " + now.toLocaleTimeString();
            var maxWidth = 100;
            var x = img.width-10-maxWidth;
            var y = img.height-10;
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            context.strokeText(text, x, y, maxWidth);
            context.fillStyle = 'white';
            context.fillText(text, x, y, maxWidth);
        }
    };
    refresh();
}
function refresh()
{
    img.src = url + "?t=" + new Date().getTime();
    setTimeout("refresh()",refreshInterval);
}
