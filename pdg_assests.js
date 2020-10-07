window.onload = init;
function init() {
	if (localStorage.getItem("pdg_theme") === null) {
		localStorage.setItem('pdg_theme', 'light');

	}
	setTheme();
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