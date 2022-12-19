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
      div.innerHTML = `<div class="countries-list">
      <p class="countries-name">${count.Country}</p>
      <p class="serach-numbr">${count.ActiveCases}</p>
    </div>`;
      allCountrie.appendChild(div);
    });
    suggest = [];

    data.map((data) => {
      suggest.push(data.Country);
    });
    console.log(suggest);

    const input = document.querySelector(".searchdata");
    input.onkeyup = (e) => {
      let userData = e.target.value;
      let emptyArray = [];
      if (userData) {
        emptyArray = suggest.filter((data) => {
          return data
            .toLocaleLowerCase()
            .startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
          return data;
        });
      }
      console.log(emptyArray);
      data.map((data) => {
        const div = document.querySelector(".countries-list");
        emptyArray.map((nm) => {
          if (data.Country === nm) {
            console.log(data);
          } else {
          }
        });
      });
    };
  })
  .catch((err) => console.error(err));
