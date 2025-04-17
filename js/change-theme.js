const changeTheme = document.querySelectorAll(".container-light-theme");
const input = document.getElementById("change-theme");
const body = document.querySelector("body");
window.onload = () => {
  if (localStorage.getItem("check") == "true") {
    input.checked = true;
    body.classList.toggle("container--dark-theme");
  } else {
    body.classList.remove("container--dark-theme");
  }
};

input.addEventListener("change", () => {
  if (input.checked) {
    body.classList.toggle("container--dark-theme");
  } else {
    body.classList.toggle("container--dark-theme");
  }
  localStorage.setItem("check", `${input.checked}`);
  console.log(input.checked);
});