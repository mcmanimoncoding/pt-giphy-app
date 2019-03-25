//Creating topics array for buttons
var topics = [];

//add button click to push search-input value to array 


giphyKey = "CPa64FA9Oy10gVnjK3t1NqrMHvDI8ADD";
var q = "black dynamite";
queryURL = "https://api.giphy.com/v1/gifs/search?api_key=CPa64FA9Oy10gVnjK3t1NqrMHvDI8ADD&q="+q+"&limit=25&offset=0&rating=G&lang=en"


$("#input-btn").on("click", function () {
    topics.unshift($("#search-input").val().trim());
    console.log(topics);
    $("#buttons-div").empty();
    for (i = 0; i < topics.length; i++) {
        $("#buttons-div").append("<button class='btn btn-secondary' value='"+topics[i]+"+ id='btn-"+topics[i]+"'>"+topics[i]+"</button>");
    }
})


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(queryURL);
    console.log(response);


})