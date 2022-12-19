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
    console.log(data);
    const total = document.querySelector(".total-world-cases");
    const active = document.querySelector(".cardone-nums");
    const recovered = document.querySelector(".recover-nums");
    const deaths = document.querySelector(".deaths-nums");
    const fatality = document.querySelector(".fata");
    total.innerText = data.data.confirmed;
    active.innerText = data.data.active;
    recovered.innerText = data.data.active;
    deaths.innerText = data.data.deaths;
    fatality.innerText = `(${data.data.fatality_rate})`;
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

const data = fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Pakistan/pak",
  option
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {})
  .catch((err) => console.error(err));
