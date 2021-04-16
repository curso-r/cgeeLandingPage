$( document ).ready(function() {
    console.log( "ready!" );
    var shines = $('.shine');
    var texts = $('.text-animated');
    for (let index = 0; index < shines.length; index++) {
        var el = shines[index];
        const delay = (Math.random() * (20 - 1) + 1) + 's';
        el.classList.add("glitter-animate");
        el.style.animationDelay       = delay;
        el.style.webkitAnimationDelay = delay;
        el.style.msAnimationDelay     = delay;
        el.style.monAnimationDelay    = delay;
    }
    for (let index = 0; index < texts.length; index++) {
        const element = texts[index];
        const delay = (index%5 === 0) ? '0s' : (Math.random() * (20 - 1) + 1) + 's';
        el.classList.add("text-animate");
        el.style.animationDelay       = delay;
        el.style.msAnimationDelay     = delay;
        el.style.webkitAnimationDelay = delay;
        el.style.monAnimationDelay    = delay;
    }
  
});