/* window.onload = init;
 */
function init() {
    if (localStorage.getItem("pdg_theme") === null) {
        localStorage.setItem('pdg_theme', 'light');

    }
    setTheme();
    startTime();
    startDate();
}

function startDate() {
    var d = new Date();
    var months = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    var month = months[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    document.getElementById('date').innerHTML = day + "." + month + "." + year;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function setTheme() {
    var theme = localStorage.getItem('pdg_theme');
    var css_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://assets.peli-di-gatto.de/" + theme + ".css"
    });
    css_link.appendTo('head');
}

function swicthDarkLightModeBTN() {
    //localStorage.removeItem('darkTheme');
    var new_theme = '';
    var theme = localStorage.getItem('pdg_theme');
    if (theme == 'dark') {
        new_theme = 'light';
    } else {
        new_theme = 'dark';
    }
    localStorage.setItem('pdg_theme', new_theme);
    setTheme();
}

function openNav() {
    $('#mySidenav').css('width', '250px');
    $('body').css('marginLeft', '250px');
    $('.overlay').css('display', 'block');
}

function closeNav() {
    $('#mySidenav').css('width', '0');
    $('body').css('marginLeft', '0');
    $('.overlay').css('display', 'none');

}