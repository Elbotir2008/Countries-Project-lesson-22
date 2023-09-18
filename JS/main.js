const url = "https://ap-countries-api.vercel.app/all";

async function fetchCars() {
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let data = await res.json();
    let obj = await data.data;
    console.log(obj);
    // console.log(obj.name);

    displayCars(obj);
  } catch (err) {
    console.log(err);
  }
}
fetchCars();

function displayCars(cars) {
  let str = "";
  cars.map((car) => {
    str += `<div class="card">
      <img src=" ${car.flags.svg}" alt="" />
       <h4>${car.name.common}</h4>
       <h3>Papulation:  ${car.population}</h3>
       <h3>Region:  ${car.region}</h3>
       <h3>Capital: ${car.capital}</h3>
       <a href="../cardetails.html"><button onclick="goDetails(${car.name})">Details</button></a>
     </div> `;
  });
  document.querySelector(".cards").innerHTML = str;
}
function goDetails(name) {
  localStorage.setItem("carId", JSON.stringify(name));
}
