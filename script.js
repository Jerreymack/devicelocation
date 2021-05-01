
function getPosition(imei){
    
        navigator.geolocation.getCurrentPosition(showPosition);
        }
  
    getPosition();
    setInterval(getPosition, 500);
  

    function showPosition(position) {

        var imeix = window.IMEI;
        
        console.log('windows IMEI >> ',  window.IMEI)
        var gps = position.coords.latitude + ',' + position.coords.longitude
        console.log(position.coords.latitude + ',' + position.coords.longitude);
        
$.ajax({
  
  type: "POST",
  url: "https://a81edo05e7.execute-api.ca-central-1.amazonaws.com/Production/update-gps",
  crossDomain: true,
  data: JSON.stringify({"IMEI": "355757082516672","GPS": gps}),
  contentType: "application/json",
  dataType: "json",
  success: function(data, status){
    /*alert("Data: " + data + "\nStatus: " + status);*/
     }
}); 
 
      
}
