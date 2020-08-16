$(() => {
  // When page reloads or devour button is clicked, change image to gif for 2200ms
  const changeToGif = () => {
    const state = $(".gif").attr("data-state");
    if (state === "still") {
      $(".gif").attr("src", $(".gif").attr("data-animate"));
      $(".gif").attr("data-state", "animate");
      setTimeout(() => {
        $(".gif").attr("src", $(".gif").attr("data-still"));
        $(".gif").attr("data-state", "still");
      }, 750)
    }
  }

  changeToGif();

  // API call to update devoured column to true when button is clicked
  $(".devour_burger").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(() => {
      location.reload();
    });
  });

  // API call to post new burger into database
  $("#addBurger").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger_name").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      location.reload();
    });
  });
});