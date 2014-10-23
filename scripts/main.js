


function addItemToList($list, temp){
  var $li = document.createElement('li');
  var $city = document.createElement('p');
  var $icon = document.createElement('img');
  var $day = document.createElement('p');
  var $high = document.createElement('p');
  var $low = document.createElement('p');
  //$city.innerHTML = .location.city;
  $icon.src = temp.icon_url;
  $day.innerHTML = temp.date.weekday;
  $high.innerHTML = "high: " + temp.high.fahrenheit + "&deg f";
  $low.innerHTML = "low: " + temp.low.fahrenheit + "&deg f";
  $li.appendChild($city);
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
document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById('enterZip');
  var $zipBox = $form.querySelector('input[type=number]');
  $form.addEventListener('submit', function(event){
    event.preventDefault();
  var url = 'http://api.wunderground.com/api/067e021a41cde59a/geolookup/forecast10day/q/' + $zipBox.value + '.json';
  getJSONP(url, 'showData')
  });
});


