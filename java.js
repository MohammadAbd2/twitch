$( document ).ready(function() {
$.getJSON( "https://api.twitch.tv/kraken/channels/mohammadabddk?client_id=jq4t5b9sqhomu072x28k048brus9ra&name=ttv-165166566", function (data) {
console.log(data);
    function image(){
     if(data.logo == null){
        return data.logo = "/img/profile-image.png";
      };
    };
   image();
   //data[1].forEach(function (data2){
     $("#container").html($("#container").html() + "<div class='users'><div class='title'>"
      + data.display_name + "   - language: "+ data.language + "</div><img class='profile-image' src='" + data.logo + "'></div>" );
   //});
});
});
