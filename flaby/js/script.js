let l=undefined;
window.addEventListener("scroll", function (event) {
    
    var scroll = this.scrollY;
    let a = document.getElementById('fixedHaeder');
    let b = document.getElementsByClassName('header-top')[0].style.border;
    if(l===undefined)
        l=a.style.backgroundColor;
    a.style.backgroundColor="rgba(66, 168, 246, 0.9)";
    
    document.getElementsByClassName('header-top')[0].style.border='none';
    if(scroll=='0')
    {
        a.style.backgroundColor=l;
        document.getElementsByClassName('header-top')[0].style.borderBottom='1px solid rgba(255, 255, 255, 0.6)';
    }
});

var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
    });
    
    var navigation = document.querySelector(".navigation");
    hamburger.addEventListener("click", function() {
        navigation.classList.toggle("is-active");
    });
    
    var headerFixed = document.querySelector(".header-fixed");
    hamburger.addEventListener("click", function() {
        headerFixed.classList.toggle("open");
    });