const url = "https://ap-countries-api.vercel.app/all";

//  GET CAR DETAILS
async function getCarDetails(id) {
  try {
    let res = await fetch(`${url}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let data = await res.json();
    // console.log(data);
    displayCarDetails(data);
  } catch (err) {
    console.log(err);
  }
}
let id = JSON.parse(localStorage.getItem("carId"));
getCarDetails(id);

function displayCarDetails(car) {
  document.querySelector(".car").innerHTML = `<h2>${car.id}. ${car.name}</h2>`;
}
