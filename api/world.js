const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d58ddb8cfbmsh126e6d03322f2f1p12f43bjsn15cb86d6c87d",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};
const url = "https://covid-19-statistics.p.rapidapi.com/reports/total";

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    const total = document.querySelector(".total-world-cases");
    const active = document.querySelector(".cardone-nums");
    const recovered = document.querySelector(".recover-nums");
    const deaths = document.querySelector(".deaths-nums");
    const fatality = document.querySelector(".fata");
    const updateDate = document.querySelector(".update");
    total.innerText = data.data.confirmed;
    active.innerText = data.data.active;
    recovered.innerText = data.data.active;
    deaths.innerText = data.data.deaths;
    fatality.innerText = `(${data.data.fatality_rate})`;
    updateDate.innerText = `Update: ${data.data.last_update}`;
  })
  .catch((err) => console.error(err));

const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d58ddb8cfbmsh126e6d03322f2f1p12f43bjsn15cb86d6c87d",
    "X-RapidAPI-Host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  },
};

fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Pakistan/pak",
  option
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const countryConfirm = document.querySelector(".cardtwo-confirm-numbr");
    const countryCRecover = document.querySelector(".cardtwo-recover-numbr");
    const countryDeaths = document.querySelector(".cardtwo-deaths-numbr");
    const countryInfect = document.querySelector(".infect-country");
    const countryMild = document.querySelector(".mild-number");
    const countrySerious = document.querySelector(".serious-country");
    const recovered = document.querySelector(".recover-nums");
    countryConfirm.innerText = data[0].TotalCases;
    countryCRecover.innerText = data[0].TotalRecovered;
    countryDeaths.innerText = data[0].TotalDeaths;
    countryInfect.innerText = data[0].ActiveCases;
    countryMild.innerText = `${data[0].Recovery_Proporation}%`;
    countrySerious.innerText = data[0].Serious_Critical;
  })
  .catch((err) => console.error(err));

fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries",
  option
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    values = [];

    data.map((data) => {
      const totalCases = data.TotalCases;
      values.push(totalCases);
    });

    var topValues = values.sort((a, b) => b - a).slice(0, 5);
    const topEffectedCountries = [];
    topValues.map((nums) => {
      data.map((data) => {
        if (nums === data.TotalCases) {
          topEffectedCountries.push(data);
        }
      });
    });

    topEffectedCountries.map((data) => {
      const mang = document.querySelector(".mang");
      const div = document.createElement("div");
      div.innerHTML = `<div class="cardfiv-most">
      <div class="cardfive-box">
        <img class="flag" src="https://flagsapi.com/${data.TwoLetterSymbol.toUpperCase()}/flat/24.png" />
        <p class="cardfive-country">${data.Country}</p>
      </div>
      <p class="most-effect-number">${data.TotalCases}</p>
      <p class="most-effect-number">${data.TotalRecovered}</p>
      <p class="most-effect-number">${data.TotalDeaths}</p>
    </div>`;
      mang.appendChild(div);
    });
  })
  .catch((err) => console.error(err));

fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0",
  option
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    news = [];
    for (i = 0; i < 2; i++) {
      const newsData = data.news[i];
      news.push(newsData);
    }
    news.map((data) => {
      const cardsix = document.querySelector(".news-fetch");
      const div = document.createElement("div");
      div.innerHTML = `  <div class="cardsix-news">
      <div>
        <p class="headline">
          ${data.title}
        </p>
        
        <div class="arthur">
          <p>${data.reference}</p>
          <p>${data.pubDate}</p>
        </div>
      </div>
      <div class="img-container">
        <img src="${data.urlToImage}" alt="" />
      </div>
    </div>`;
      cardsix.appendChild(div);
    });
  })
  .catch((err) => console.error(err));
