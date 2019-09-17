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
    var gifName = $(this).attr("data-name");
    console.log(gifName);
    // can change the number at the end of the url to control the amount of responses
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //need to manipulate the array number to pull multiple responses (for loop)
      $("#gifView").text(JSON.stringify(response.data[0].rating));
      console.log(response);
    })
  });
};


// push any new option into the array and create a button 
$("#add-gif").on("click", function (event) {
  event.preventDefault();

  var gifOption = $("#gif-input").val().trim();
  gifOptions.push(gifOption);
  createButtons();


});

createButtons();