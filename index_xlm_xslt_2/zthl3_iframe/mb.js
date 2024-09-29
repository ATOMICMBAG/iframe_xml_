var text = document.getElementById("content");

var str = text.innerHTML,
    reg = /Falls|#|test_MB_°-°|Gebrüll|test1|Augen/ig; //g is to replace all occurances

//fixing a bit
var toStr = String(reg);
var color = (toStr.replace('\/g', '|')).substring(1);

//split it baby
var colors = color.split("|");

if (colors.indexOf("Falls") > -1) {
    str = str.replace(/Falls/g, '<span style="color:red;">Falls</span>');
}

if (colors.indexOf("#") > -1) {
    str = str.replace(/#/g, '<span style="color:#637383;">#</span>');
}

if (colors.indexOf("test_MB_°-°") > -1) {
    str = str.replace(/test_MB_°-°/g, '<span style="color:green;">test_MB_°-°</span>');
}

if (colors.indexOf("Gebrüll") > -1) {
    str = str.replace(/Gebrüll/g, '<span style="color:orange;">Gebrüll</span>');
}

if (colors.indexOf("test1") > -1) {
  str = str.replace(/test1/g, '<span style="color:#777777;">MB_test1</span>');
}

if (colors.indexOf("Augen") > -1) {
  str = str.replace(/Augen/g, '<span style="color:#999999;">Augen</span>');
}

document.getElementById("content").innerHTML = str;
