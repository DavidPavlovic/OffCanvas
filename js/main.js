var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('#navbar');

menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});