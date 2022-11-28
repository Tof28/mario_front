$( document ).ready(function() {
    $("#flechedroite").click(function () { //conditionner la  fonction au clic

        var marioposition = $("#mario").position(); // créer une variable pour récupérer la position de l'image mario

        var marioleft = marioposition.left;
        marioleft += 100; // incrémenter la nouvelle variable de l'image
        $("#mario").css("left", marioleft + "px");
    });
        
});
