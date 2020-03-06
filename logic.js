$("#buttoncontainer").on("click", ".animals", function(event) {
    event.preventDefault();
    console.log("animal button clicked");
      var searchTerm = $(this).attr("id")
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" + searchTerm;

    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {

        var imageUrl = response.data.image_original_url;

        var Image = $("<img>");

        Image.attr("src", imageUrl);
        Image.attr("alt", "image");

        $("#images").prepend(Image);
      });
  });
$("#searchbutton").on("click", function(event){
    event.preventDefault();
    console.log("search button clicked");
    var searchInput = $("#input").val().trim()
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" + searchInput;

    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {

        var imageUrl = response.data.image_original_url;

        var Image = $("<img>");

        Image.attr("src", imageUrl);
        Image.attr("alt", "image");

        $("#images").prepend(Image);

        var button = $("<button>");
            button.attr("class", "animals")
            button.attr("id", searchInput)
            button.html(searchInput)

            $("#buttoncontainer").prepend(button);
      });

})