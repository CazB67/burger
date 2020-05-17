$(function() {
    $(".devour-it").on("click", function(event) {
      let id = $(this).data("id");
      let newEatenState = {
        devoured: 1
      };

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
      let newEatenState = {
        devoured: 0
      };

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

    $(".delete").on("click", function(event) {
      // Send the DELETE request.
      $.ajax("/api/delete", {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
        let newBurger = {
          burger_name: $("#hamburger").val().trim(),
          devoured: 0
        };
        
        newBurger.burger_name = newBurger.burger_name.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        if(newBurger.burger_name.length > 0  ){
          $.ajax("/api/duplicates", {
            type: "POST",
            data: newBurger
          }).then(
            function(res) {
              if(res.duplicate === 0){
                $.ajax("/api/burgers", {
                  type: "POST",
                  data: newBurger
                }).then(
                  function() {
                    // Reload the page to get the updated list
                    location.reload();
                  });
              }
              else {
                location.reload();
              }
            });
          }
    });
  });

    
