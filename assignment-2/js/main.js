read()

function submit() {

  let nama = document.getElementById("nama");
  let role = document.getElementById("role");
  let availability = document.getElementById("availability");
  let age = document.getElementById("age");
  let lokasi = document.getElementById("lokasi");
  let experience = document.getElementById("experience");
  let email = document.getElementById("email");

  localStorage.setItem("nama", nama.value);
  localStorage.setItem("role", role.value);
  localStorage.setItem("availability", availability.value);
  localStorage.setItem("age", age.value);
  localStorage.setItem("lokasi", lokasi.value);
  localStorage.setItem("experience", experience.value);
  localStorage.setItem("email", email.value);

  let form = document.getElementById("form");
   form.className += "d-none";

   read()
}

function read() {
  document.getElementById("data_nama").innerHTML = localStorage.getItem("nama");
  document.getElementById("data_role").innerHTML = localStorage.getItem("role");
  document.getElementById("data_availability").innerHTML = localStorage.getItem("availability");
  document.getElementById("data_age").innerHTML = localStorage.getItem("age");
  document.getElementById("data_lokasi").innerHTML = localStorage.getItem("lokasi");
  document.getElementById("data_experience").innerHTML = localStorage.getItem("experience");
  document.getElementById("data_email").innerHTML = localStorage.getItem("email");
}
