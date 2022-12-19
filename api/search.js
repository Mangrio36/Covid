fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries",
  option
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    suggest = [];
    data.map((data) => {
      suggest.push(data.Country);
    });
    console.log(suggest);
    const input = document.querySelector(".searchdata");

    data.map((count) => {
      allCountrie = document.querySelector(".cardtwo-countries");
      const div = document.createElement("div");

      div.innerHTML = `<div class="countries-list">
        <p class="countries-name">${count.Country}</p>
        <p class="serach-numbr">${count.ActiveCases}</p>
       </div>`;
      allCountrie.appendChild(div);
    });
  })
  .catch((err) => console.error(err));
