$( document ).ready(function() { //activer une fonction quand la page est chargée
  
    function fd() {
        var marioposition = $("#mario").position(); // créer une variable pour récupérer la position de l'image mario

        var marioleft = marioposition.left; // créer une autre variable à incrémenter

        marioleft += 30; // incrémenter la nouvelle variable de l'image
        if(marioleft<980) {
        $("#mario").css("left", marioleft + "px"); //faire avancer l'image mario modifiant sa position css à chaque clic
        }
    };

    function fg() {
       var marioposition = $("#mario").position();

        var marioleft = marioposition.left;

        marioleft -= 30;
        if(marioleft > 0) {
        $("#mario").css("left", marioleft + "px");
        }
    }

    function ft() {

        var marioposition = $("#mario").position();

        var mariotop = marioposition.top;

        mariotop -= 30;
        if(mariotop>0) {
        $("#mario").css("top", mariotop + "px");
        }
    }
    function fb() {

        var marioposition = $("#mario").position();

        var mariotop = marioposition.top;

        mariotop += 30;
        if(mariotop<500) {
        $("#mario").css("top", mariotop + "px");
        }
    }
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
    
    $(document).keydown(function(e){
        switch (e.which){
            
                case 37:    //flèche gauche
                    fg();
                    break;
                case 38:    //flèche du haut
                    ft();
                    break;
                case 39:    //flèche droite
                   fd();
                    break;
                case 40:    //flècehe du bas
                   fb();
                    break;
        };
    });

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
        $('#mario').css('display', 'block');
    });

    /*$("#victoire").click(function() {

       // var message = ("Vous avez gagné!");
        
        $("#mario-victoire").css('display', 'block');
        $("#message").css('display', 'block');

    });*/

    $("#victoire").css(function(event) {
        var marioposition = $("#mario").position();

        var chateauposition = $("#zonechateau").position();

        var marioPositionX = marioposition.left;
        var marioPositionY = marioposition.top;

        var chateauPositionX = chateauposition.left;
        var chateauPositionY = chateauposition.top;

        if(marioPositionX <= chateauPositionX && marioPositionY <= chateauPositionY) {
            $("#mario-victoire").css('display', 'block');
            $("#message").css('display', 'block');
        }

    });

});
