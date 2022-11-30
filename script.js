//QUESTION N0-1:-
//^^^^^^^^^^^^^
//Get all the countries from the Asia continent /region using the Filter function:-

var request = new XMLHttpRequest();
request.open("GET", (url = "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var answer = result.filter((print) => print.continents == "Asia");
  var final = answer.map((print1) =>
    console.log(
      `THE COUNTRY WHICH IS IN ASIA CONTINENT IS - ${print1.name.common}`
    )
  );
};

//-------------------------------------------------------------------------------------------------------------------------------

//QUESTION NO-2:-
//^^^^^^^^^^^^^
//Get all the countries with a population of less than 2 lakhs using Filter function:-

var request = new XMLHttpRequest();
request.open("GET", (url = "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var populationless = result.filter((search) => search.population < 200000);
  var countries = populationless.map((country) =>
    console.log(
      `THIS COUNTRY ${country.name.common} POPULATION ${country.population} IS LESS THAN 2 LAKHS`
    )
  );
};

//---------------------------------------------------------------------------------------------------------------------------

//QUESTION NO-3:-
//^^^^^^^^^^^^^
//Print the total population of countries using reduce function:-

var request = new XMLHttpRequest();
request.open("GET", (url = "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var totalpopulation = result.reduce((acc, add) => acc + add.population, 0);
  console.log(
    `THE TOTAL POPULATION OF ALL REST COUNTRIES IS ${totalpopulation}`
  );
};

//------------------------------------------------------------------------------------------------------------------------

//QUESTION NO-4:-
//^^^^^^^^^^^^^
//Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", (url = "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res1 = result.filter((data) => {
    for (let i in data.currencies) {
      if (data.currencies[i].name === "United States dollar") {
        return data;
      }
    }
  });

  console.log(
    res1.map(
      (ele) => `THE COUNTRIES WHICH HAS CURRENCY AS USD IS ${ele.name.common}`
    )
  );
};

//-------------------------------------------------------------------------------------------------------------

//QUESTION NO-5:-
//^^^^^^^^^^^^^
//Print the following details name, capital, flag using forEach function:-

var request = new XMLHttpRequest();
request.open("GET", (url = "https://restcountries.com/v3.1/all"));
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var details = result.forEach((show) =>
    console.log(
      `THE COUNTRY NAME WAS - ${show.name.common} AND THEIR CAPITAL,FLAG IS ${show.capital},${show.flag}`
    )
  );
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
