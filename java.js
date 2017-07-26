$( document ).ready(function() {
$.get("https://api.twitch.tv/kraken/channels/mohammadabddk?client_id=jq4t5b9sqhomu072x28k048brus9ra&name=ttv-165166566", function(chanele){
  console.log(chanele);
  $("#container").html($("#container").html() + "<div class='users'><div class='title'>" + chanele.display_name + "<div><div class=''" );

});
});
