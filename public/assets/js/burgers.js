$(function() {
    $(".devour-it").on("click", function(event) {
      let id = $(this).data("id");
      let eatenBurger = $(this).data("eatenBurger");
  
      let newEatenState = {
        devoured: eatenBurger
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devoured to", eatenBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        const newBurger = {
          burger_name: $("#hamburger").val().trim(),
        };
        
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });
