// ./app.js

const ChauvelotPath =
  "https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/95/chauvelot/R";

const rennesPath95 =
  "https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/95/rennes-littr%C3%A9/A";

const rennesPath89 =
  "https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/89/rennes-littr%C3%A9/A";

const pantheonPath89 =
  "https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/89/panth%C3%A9on/R";

// Performing a GET request
function routine() {
  axios.get(ChauvelotPath).then(function(response) {
    var time_first = response.data.result.schedules[0].message;
    var time_second = response.data.result.schedules[1].message;
    // console.log('prochain bus 1 dans '+time_first);
    // console.log('prochain bus 2 dans '+time_second);
    //REFACTOR : myText-1
    document.getElementById("myText-1").innerHTML = time_first;
    document.getElementById("myText-2").innerHTML = time_second;
  });

  axios.get(rennesPath95).then(function(response) {
    var time_first = response.data.result.schedules[0].message;
    var time_second = response.data.result.schedules[1].message;
    document.getElementById("95rennes-1").innerHTML = time_first;
    document.getElementById("95rennes-2").innerHTML = time_second;
  });

  axios.get(rennesPath89).then(function(response) {
    var time_first = response.data.result.schedules[0].message;
    var time_second = response.data.result.schedules[1].message;
    document.getElementById("89rennes-1").innerHTML = time_first;
    document.getElementById("89rennes-2").innerHTML = time_second;
  });

  axios.get(pantheonPath89).then(function(response) {
    var time_first = response.data.result.schedules[0].message;
    var time_second = response.data.result.schedules[1].message;
    document.getElementById("89pantheon-1").innerHTML = time_first;
    document.getElementById("89pantheon-2").innerHTML = time_second;
  });
}

routine();
var myVar = setInterval(routine, 20000);

function myStopFunction() {
  clearInterval(myVar);
  console.log("timer has stopped");
}

function test() {
  console.log("out the of the loop");
}

test();
