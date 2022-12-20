const anb = (kami, iso) => {
  fetch(
    `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${kami}/${iso}`,
    option
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const newDeath = document.getElementById("newdeaths");
      const newCases = document.getElementById("newcases");
      const country = document.getElementById("country");
      const deathss = document.getElementById("deaths");
      const casess = document.getElementById("cases");
      casess.innerText = data[0].TotalCases;
      country.innerText = data[0].Country;
      deathss.innerText = data[0].TotalDeaths;
      newDeath.innerText = data[0].NewDeaths;
      newCases.innerText = data[0].Population;
    })
    .catch((err) => console.error(err));
};
