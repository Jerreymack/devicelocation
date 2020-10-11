var imeix = imei 

function getPosition(){
    
        navigator.geolocation.getCurrentPosition(showPosition);
        }
  
    getPosition();
    setInterval(getPosition, 5000);
  

    function showPosition(position) {

        var imeiz = imeix

        var gps = position.coords.latitude + ',' + position.coords.longitude
        console.log(position.coords.latitude + ',' + position.coords.longitude);
      
     
$.ajax({
  
  type: "POST",
  url: "https://a81edo05e7.execute-api.ca-central-1.amazonaws.com/Production/update-gps",
  crossDomain: true,
  data: JSON.stringify({"IMEI": imeiz,"GPS": gps}),
  contentType: "application/json",
  dataType: "json",
  success: function(data, status){
    /*alert("Data: " + data + "\nStatus: " + status);*/
     }
}); 
 
      
}
