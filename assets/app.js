var gifOptions = ["dog", "fish", "cat"];

// get api info with details for gif 
$("button").on("click", function () {
    var gifName = $(this).attr("data-name");
    console.log(gifName);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    console.log(gif);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#gifView").text(JSON.stringify(response));
    })
  });





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

};

// push any new option into the array and create a button 
$("#add-gif").on("click", function (event) {
  event.preventDefault();

  var gifOption = $("#gif-input").val().trim();
  gifOptions.push(gifOption);
  createButtons();


});

createButtons();