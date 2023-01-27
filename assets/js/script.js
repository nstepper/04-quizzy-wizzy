(function() {
    var editButton = document.querySelector( ".start"),
        form = document.querySelector("form");
  
    editButton.addEventListener( "click", function() {
        document.getElementById("instructions").style.display = "none";
        form.classList.remove("display");
        form.classList.add("editing");
    });
    
}());
