const translateWords = document.querySelectorAll("[data-translate]");
const selectLeng = document.querySelector("#select-lang");

window.addEventListener('load', () => {
  if(localStorage.getItem("lang") == "ru"){
    changeLang(localStorage.getItem("lang"))
  }else{
    changeLang(localStorage.getItem("lang"))
  } 
  console.log(localStorage.getItem('lang'));
})

function changeLang(lang) {
  fetch(`langs/${lang}.json`)
    .then((res) => res.json())
    .then((translate) => {
      translateWords.forEach((word) => {
        const key = word.getAttribute("data-translate");
        if (translate[key]) {
          word.innerHTML = translate[key];
        }
      });
    });
}

selectLeng.addEventListener("click", (e) => {  
  localStorage.setItem("lang", `${e.target.value}`)  
  changeLang(e.target.value);
});
