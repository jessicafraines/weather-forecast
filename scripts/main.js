
function addItemToList($list, temp){
  var $li = document.createElement('li');
  var $icon = document.createElement('img');
  var $day = document.createElement('p');
  var $high = document.createElement('p');
  var $low = document.createElement('p');
  $icon.src = temp.icon_url;
  $day.innerHTML = temp.date.weekday;
  $high.innerHTML = "high: " + temp.high.fahrenheit + "&deg f";
  $low.innerHTML = "low: " + temp.low.fahrenheit + "&deg f";
  $li.appendChild($icon);
  $li.appendChild($day);
  $li.appendChild($high);
  $li.appendChild($low);
  $list.appendChild($li);
}

function addCity(city){
  var $cityName = document.getElementById('cityName');
  $cityName.innerHTML = city;
}

function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}
function showData(data){
  var forecast = data.forecast.simpleforecast.forecastday;
  var $ul = document.getElementById('forecast');
  $ul.innerHTML = "";
  for(var i = 0; i < 5; i++){
    addItemToList($ul, forecast[i]);
  }
  var city = data.location.city;
  addCity(city);
}
/*document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById('enterZip');
  var $zipBox = $form.querySelector('input[type=text]');
  $form.addEventListener('submit', function(event){
    event.preventDefault();
  var url = 'http://api.wunderground.com/api/067e021a41cde59a/geolookup/forecast10day/q/' + $zipBox.value + '.json';
  getJSONP(url, 'showData')
  });
});*/



//THIS WILL ND TO BE USED IN "ELSE" STATEMENT IF USER SELECTS FIND BY CURRENT LOCATION
//


document.addEventListener('DOMContentLoaded', function(){

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  function success(pos) {
    var crd = pos.coords;
    var lat = crd.latitude;
    var lon = crd.longitude;
    var geoUrl = 'http://api.wunderground.com/api/067e021a41cde59a/geolookup/forecast10day/q/' +lat+ ',' +lon+ '.json';
    getJSONP(geoUrl, 'showData')
  }; 
  function error(err) {
    debugger;
    alert(err);
  };

  var $form = document.getElementById('geoLocation');
  $form.addEventListener('submit', function(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(success, error, options);
  });
});
