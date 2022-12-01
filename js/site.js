$( document ).ready(function() { //activer une fonction quand la page est chargée
   
    function fd() {
        var marioposition = $("#mario").position(); // créer une variable pour récupérer la position de l'image mario

        var marioleft = marioposition.left; // créer une autre variable à incrémenter

        marioleft += 30; // incrémenter la nouvelle variable de l'image
        if(marioleft<980) {
        $("#mario").css("left", marioleft + "px"); //faire avancer l'image mario modifiant sa position css à chaque clic
        } 
        score += 1;
        $("#score span").html(score);
    };

    function fg() {
       var marioposition = $("#mario").position();

        var marioleft = marioposition.left;

        marioleft -= 30;
        if(marioleft > 0) {
        $("#mario").css("left", marioleft + "px");
        }
        score += 1;
        $("#score span").html(score);
    };

    function ft() {

        var marioposition = $("#mario").position();

        var mariotop = marioposition.top;

        mariotop -= 30;
        if(mariotop>0) {
        $("#mario").css("top", mariotop + "px");
        }
        score += 1;
        $("#score span").html(score);

    };
    function fb() {

        var marioposition = $("#mario").position();

        var mariotop = marioposition.top;

        mariotop += 30;
        if(mariotop<500) {
        $("#mario").css("top", mariotop + "px");
        }
        score += 1;
        $("#score span").html(score);
    
    };
/*
    $("#flechedroite").click(function() { //conditionner la  fonction au clic sur le bouton correspondant
        fd();
         });
    $("#flechegauche").click(function() {
        fg();
    });   
    $("#flechehaute").click(function() {
        ft();       
    }); 
    $("#flechebasse").click(function() {
        fb();
       
    });
    */
    $(document).keydown(function(e){
        switch (e.which){
            
                case 37:    //flèche gauche
                    fg();
                    $("#mario").each(function() {
                        if(local())       
                            {
                            $("#mario-victoire").css('display', 'block');
                            $("#message").css('display', 'block');
                            }
                        if(monstre())
                        {
                        score -=1;
                        $("#score span").html(score);
                        }
                        });
                    break;
                case 38:    //flèche du haut
                    ft();
                    $("#mario").each(function() {
                        if(local())       
                            {
                            $("#mario-victoire").css('display', 'block');
                            $("#message").css('display', 'block');
                            }
                        if(monstre())
                            {
                            score -=1;
                            $("#score span").html(score);
                            }

                        });
                    break;
                case 39:    //flèche droite
                   fd();
                   $("#mario").each(function() {
                    if(local())       
                        {
                        $("#mario-victoire").css('display', 'block');
                        $("#message").css('display', 'block');
                        }
                        if(monstre())
                        {
                        score -=1;
                        $("#score span").html(score);
                        }

                    });
                    break;
                case 40:    //flèche du bas
                   fb();
                   $("#mario").each(function() {
                    if(local())       
                        {
                        $("#mario-victoire").css('display', 'block');
                        $("#message").css('display', 'block');
                        }
                        if(monstre())
                        {
                        score -=1;
                        $("#score span").html(score);
                        }

                    });
                    break;
        };
    });
    
    function points() { // fonction score qui s'incrémente quand mario se déplace
        var score = 0;
          
      
        } 

    //Clique sur le chateau
    $(document).mousemove(function(event){

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        var container_position = $('#main-container').position();
        var container_positionX = container_position.left;
        var container_positionY = container_position.top;

        $('#main').css('left', mouseX-container_positionX-50 + 'px');
        $('#main').css('top', mouseY-container_positionY-50 + 'px');
    });

    $("#zonechateau").click(function() {
        $('#main').css('display', 'none');
        $('#mario').css('visibility', 'visible');
    });

    var score = 0;
    $("#score span").html(score);

    function local() {
        var r1 = $("#mario");
        var r2 = $("#zonechateau");
        
        var r1x = r1.offset().left;
        var r1w = r1.width();
        var r1y = r1.offset().top;
        var r1h = r1.height();
        
        var r2x = r2.offset().left;
        var r2w = r2.width();
        var r2y = r2.offset().top;
        var r2h = r2.height();
        
        if( r1y+r1h < r2y ||
            r1y > r2y+r2h ||
            r1x > r2x+r2w ||
            r1x+r1w < r2x ){
            return false;
        }else{
            return true;   
        }
    };

    function monstre() {
        var r1 = $("#mario");
        var r3 = $(".monstre");
        
        var r1x = r1.offset().left;
        var r1w = r1.width();
        var r1y = r1.offset().top;
        var r1h = r1.height();
        
        var r3x = r3.offset().left;
        var r3w = r3.width();
        var r3y = r3.offset().top;
        var r3h = r3.height();
        
        if( r1y+r1h < r3y ||
            r1y > r3y+r3h ||
            r1x > r3x+r3w ||
            r1x+r1w < r3x ){
            return false;
        }else{
            return true;   
        }
    };
});
