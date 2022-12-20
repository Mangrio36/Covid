fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries",
  option
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((count) => {
      allCountrie = document.querySelector(".cardtwo-countries");
      const div = document.createElement("div");
      const CountryDiv = document.createElement("div");
      CountryDiv.classList.add("countries-list");
      const CpuntryDiv = document.createElement("p");
      CpuntryDiv.innerText = count.Country;
      CpuntryDiv.classList.add("countries-name");
      const numbrDiv = document.createElement("p");
      numbrDiv.innerText = count.ActiveCases;
      numbrDiv.classList.add("serach-numbr");
      CountryDiv.appendChild(CpuntryDiv);
      CountryDiv.appendChild(numbrDiv);
      div.appendChild(CountryDiv);
      allCountrie.appendChild(div);
      CpuntryDiv.addEventListener("click", () => {
        console.log(CpuntryDiv.innerText);
        fetch(
          "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered",
          option
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            for (i = 0; i < data.length; i++) {
              if (CpuntryDiv.innerText === data[i].Country) {
                const iso = data[i].ThreeLetterSymbol;
                console.log(iso);
                anb(CpuntryDiv.innerText, iso);
              }
            }
          })
          .catch((err) => console.error(err));
      });
    });
  })
  .catch((err) => console.error(err));
const anb = (kami, iso) => {
  fetch(
    `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${kami}/${iso}`,
    option
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const countryConfirm = document.querySelector(".cardtwo-confirm-numbr");
      const countryCRecover = document.querySelector(".cardtwo-recover-numbr");
      const countryDeaths = document.querySelector(".cardtwo-deaths-numbr");
      const countryInfect = document.querySelector(".infect-country");
      const countryMild = document.querySelector(".mild-number");
      const countrySerious = document.querySelector(".serious-country");
      const cardThreeCountry = document.querySelector(".cardthreecountry-name");
      const risk = document.querySelector(".risk");
      const fatalityRate = document.querySelector(".frate");
      countryConfirm.innerText = data[0].TotalCases;
      countryCRecover.innerText = data[0].TotalRecovered;
      countryDeaths.innerText = data[0].TotalDeaths;
      countryInfect.innerText = data[0].ActiveCases;
      countryMild.innerText = `${data[0].Recovery_Proporation}%`;
      countrySerious.innerText = data[0].Serious_Critical;
      cardThreeCountry.innerText = data[0].Country;
      risk.innerText = `(${data[0].Infection_Risk})`;
      fatalityRate.innerText = `(${data[0].Case_Fatality_Rate})`;
    })
    .catch((err) => console.error(err));
};
