const visitor = {
  name: "Chris",
  countries: [
    {
      name: "Thailand",
      year: 2014
    },
    {
      name: "Germany",
      year: 2009
    },
    {
      name: "Ukraine",
      year: 2016
    }
  ]
};

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(visitor)
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("result").textContent = result;
  })
  .catch(err => {
    console.log(err.message)
  })
})