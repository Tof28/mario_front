$( document ).ready(function() {
    $("#flechedroite").click(function () { //conditionner la  fonction au clic

        var marioposition = $("#mario").position();

        var marioleft = marioposition.left;
        marioleft += 100;
        $("#mario").css("left", marioleft + "px");
    });
        
});
