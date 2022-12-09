const aktif = document.getElementById('aktif');
const baru = document.getElementById('baru');
const sembuh = document.getElementById('sembuh');
const t_kasus = document.getElementById('t_kasus');
const t_mati = document.getElementById('t_mati')
const t_test = document.getElementById('t_test');

const input = document.getElementById('country');
const submit = document.getElementById('submit');

submit.addEventListener("click", async () => {
  const BASE_URL = `https://covid-193.p.rapidapi.com/statistics?country=${input.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1becca8e72mshccfc4f409adfd6dp1ff2e8jsn0b91a7d00bca",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  if (data.response.length) {
    const getdata = data.response[0];

    console.log(getdata)

    aktif.innerHTML = getdata.cases.active;
    baru.innerText = getdata.cases.new ? getdata.cases.new : 0;
    sembuh.innerText = getdata.cases.recovered;
    t_kasus.innerText = getdata.cases.total;
    t_mati.innerText = getdata.deaths.total;
    t_test.innerText = getdata.tests.total;
  }
});