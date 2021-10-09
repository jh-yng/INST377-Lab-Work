async function windowActions() {
  const request = await fetch(
    "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json"
  );
  const resArray = await request.json();

  function findMatches(wordToMatch, resArray) {
    return resArray.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return (
        place.name.match(regex) ||
        place.address_line_1.match(regex) ||
        place.category.match(regex) ||
        place.zip.match(regex) ||
        place.city.match(regex)
      );
    });
  }

  function displayMatches(event) {
    console.log(event.target.value);
    const matchArray = findMatches(event.target.value, resArray);
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(event.target.value, "gi");
        const cityName = place.name.replace(
          regex,
          `<span class ="h1">${event.target.value}</span>`
        );
        const zipName = place.zip.replace(
          regex,
          `<span class ="h1">${event.target.value}</span>`
        );
        return `
            <ul class="suggestions">
                <li><div class="name">${place.name}</div></li>
                <div class="category">${place.category}</div>
                <div class="address">${place.address_line_1}</div>
                <div class="city">${place.city}</div>
                <div class="zip">${place.zip}</div>
            </ul>
            `;
      })
      .join("");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", (evt) => {
    displayMatches(evt);
  });
  console.log(data);
}
window.onload = windowActions;
