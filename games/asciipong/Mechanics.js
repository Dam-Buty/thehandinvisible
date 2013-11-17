
var bootstrap = function() {
    Core.load_bg("game");

    Core.load_sprite({ sprite: "paddle", id: "me" })
    .setPosition({
        short: "centerleft"
    });
    
    Core.load_sprite({ sprite: "paddle", id: "him" })
    .setPosition({
        short: "centerright"
    });
    
    Core.load_sprite({ sprite: "ball" })
    .setPosition({
        animate: true,
        short: "center"
    });
    
    bind_paddle();
    animate_ball();
};

var bind_paddle = function() {
    $("#screen pre")
    .on("mousemove", function(e) { 
         Core.sprites.me.setPosition({
            animate: true,
            css: { top: Math.max(Math.min(e.pageY, Core.screen.offset().bottom - Core.sprites.me.height()), 0) },
            time: 10
         });
    });
};

var animate_ball = function() {
    Core.sprites.ball.setPosition({
        animate: true,
        css: { left: 0, top: Math.random() * Core.screen.height() },
        progress: function(animation) {
            // Collision detection
            console.log(animation);
            
            
        }
    });
    
    
};