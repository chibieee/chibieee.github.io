$(document).ready(function() {
   
    var controller = new ScrollMagic.Controller();
    
    //pin the intro
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '20%'
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);
    
    
    //loop through each project
    $('.project').each(function() {
        
        // Build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.6,
            //reverse: false  //animation happens once


        })
        .setClassToggle(this, 'fade-in')
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            indent: 200,
            colorStart: '#75C695',
            colorEnd: 'pink'
        })
        .addTo(controller);
    });
    
    
    
    
    
});