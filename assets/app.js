var gifOptions = ["dog", "fish", "cat"];





// create the button from the array 
function createButtons() {

  $("#gifButton").empty();

  for (i = 0; i < gifOptions.length; i++) {
    var a = $("<button>");

    a.addClass("gifSubject");
    a.attr("data-name", gifOptions[i]);
    a.text(gifOptions[i]);
    $("#gifButton").append(a);
    // console.log(gifOptions);
  }

  // get api info with details for gif 
  $("button").on("click", function getGIF() {
    $("#gifView").empty();

    var gifName = $(this).attr("data-name");
    console.log(gifName);
    // can change the number at the end of the url to control the amount of responses
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      var results = response.data;

      for (i = 0; i < results.length; i++) {
        // creates the div for the image and rating 
        var resultsDiv = $("<div id='results'>");
        // generates the rating 
        var p = $("<p>").text("Rating: " + results[i].rating);
        // this generates the image 
        var image = $("<img class='gifPic' data-state='still'>");
        image.attr("src", results[i].images.downsized_still.url);

        resultsDiv.append(image);
        resultsDiv.append(p);

        $("#gifView").append(resultsDiv);


        $(".gifPic").on("click", function () {
          var state = $(this).attr("data-state");
          console.log(state);
          console.log(this);
          if (state === "still") {
            $(this).attr("src", results[i].images.downsized_medium.url);
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", results[i].images.downsized_still.url);
            $(this).attr("data-state", "still");
          }

        })
      }

    })
  })

};

// $("#gifPic").on("click", function () {
//   var state = $(this).attr("data-state");
//   console.log(state);



// url for gif that moves =====
// image.attr("src", results[i].images.downsized_medium.url);


// push any new option into the array and create a button 
$("#add-gif").on("click", function (event) {
  event.preventDefault();

  var gifOption = $("#gif-input").val().trim();
  gifOptions.push(gifOption);
  createButtons();




});



createButtons();