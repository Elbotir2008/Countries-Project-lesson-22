let searchBox = document.getElementById("search-box");
async function getSearchedCars(text) {
  try {
    let res = await fetch(`${url}?sort=title&order=desc`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getSearchedCars("nepal");
