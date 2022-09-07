


function submit() {
  let nama = document.getElementById("nama");
  let role = document.getElementById("role");
  let availability = document.getElementById("availability");
  let age = document.getElementById("age");
  let lokasi = document.getElementById("lokasi");
  let experience = document.getElementById("experience");
  let email = document.getElementById("email");

  document.getElementById("data_nama").innerHTML = nama.value
  document.getElementById("data_role").innerHTML = role.value
  document.getElementById("data_availability").innerHTML = availability.value
  document.getElementById("data_age").innerHTML = age.value
  document.getElementById("data_lokasi").innerHTML = lokasi.value
  document.getElementById("data_experience").innerHTML = experience.value
  document.getElementById("data_email").innerHTML = email.value

  let form = document.getElementById("form");
   form.className += "d-none";
}
