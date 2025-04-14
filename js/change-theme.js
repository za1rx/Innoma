const changeTheme = document.querySelectorAll(".container-light-theme");
const input = document.getElementById("change-theme");
const body = document.querySelector("body");
window.onload = () => {
  console.log(localStorage.getItem("check"));

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

// ---------------------------

// const input = document.querySelector('#change-theme')

// input.addEventListener('click', () => {
//   const containers = document.querySelectorAll('.container')

//   containers.forEach(container => {
//     // console.log(container.className == 'container');
//     // console.log(container.classList[0]);
//     console.log(`${container.classList[0]}--dark-theme`);

//   })

// })
