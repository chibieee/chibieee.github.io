document.addEventListener('DOMContentLoaded', function() {
    var navBar = document.getElementsByTagName('nav');
    console.log(navBar);
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 0) {
            navBar[0].classList.add('scrolled');
        } else {
            navBar[0].classList.remove('scrolled');
        }
    });
});