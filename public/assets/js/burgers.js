$(function() {
    $(".devour-it").on("click", function(event) {
      let id = $(this).data("id");
      console.log("ID " + id);
      let newEatenState = {
        devoured: 1
      };
console.log(newEatenState);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".throw-up").on("click", function(event) {
      let id = $(this).data("id");
      console.log("ID " + id);
      let newEatenState = {
        devoured: 0
      };
console.log(newEatenState);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let newBurger = {
          burger_name: $("#hamburger").val().trim(),
          devoured: 0
        };
        newBurger.burger_name = newBurger.burger_name.charAt(0).toUpperCase() + newBurger.burger_name.slice(1).toLowerCase(); 
        
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });
