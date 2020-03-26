$(function () {
    $('.devour').on('click', function (event) {
        var id = $(this).data('id');
        var updatedBurger = $(this).data('devourstate')
        
        var newBurgerState = {
            devoured: updatedBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(function() {
            console.log("Devoured a burger" + updatedBurger);

            location.reload();
        });
    });

    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#newBurger').val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Created new burger");

            location.reload();
        });
    });
});
