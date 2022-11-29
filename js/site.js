$( document ).ready(function() { //activer une focntion quand la page est chargée
    //var marioposition = $("#mario").position();

    function fd() {
        var marioposition = $("#mario").position(); // créer une variable pour récupérer la position de l'image mario

        var marioleft = marioposition.left; // créer une autre variable à incrémenter

        marioleft += 100; // incrémenter la nouvelle variable de l'image
        if(marioleft<950) {
        $("#mario").css("left", marioleft + "px"); //faire avancer l'image mario modifiant sa position css à chaque clic
        }
    };

    function fg() {
        var marioposition = $("#mario").position();

        var marioleft = marioposition.left;

        marioleft -= 50;
        if(marioleft > 0) {
        $("#mario").css("left", marioleft + "px");
        }
    }

    function ft() {

        var marioposition = $("#mario").position();

        var mariotop = marioposition.top;

        mariotop -= 50;
        if(mariotop>0) {
        $("#mario").css("top", mariotop + "px");
        }
    }
    function fb() {

        var marioposition = $("#mario").position();

        var mariotop = marioposition.top;

        mariotop += 50;
        if(mariotop<500) {
        $("#mario").css("top", mariotop + "px");
        }
    }
    $("#flechedroite").click(function () { //conditionner la  fonction au clic sur le bouton GO
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
            
                case 37:    //left arrow key
                    fg();
                    break;
                case 38:    //up arrow key
                    ft();
                    break;
                case 39:    //right arrow key
                   fd();
                    break;
                case 40:    //bottom arrow key
                   fb();
                    break;
        };
    });
}); 
