$(() => {
  $(".devour_burger").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(() => {
      location.reload();
    }
    );
  });
});