var url = 'http://api.wunderground.com/api/067e021a41cde59a/forecast10day/q/TN/Nashville.json';

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


function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}
function showData(data){
  var forecast = data.forecast.simpleforecast.forecastday;
  console.log('forecast', forecast);
  var $ul = document.getElementById('forecast');
  for(var i = 0; i < 5; i++){
    addItemToList($ul, forecast[i]);
    console.log('FC', forecast[i]);
  }
}
document.addEventListener('DOMContentLoaded', function(){
  getJSONP(url, 'showData')
});


