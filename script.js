const url = "https://api.adviceslip.com/advice/";
let advice = document.getElementById("advice");
let adviceId = document.getElementById("advice-id");
let btn =document.getElementById("btn")


btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 150);
  let randomAdvice = fetch(url + random);
  randomAdvice
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      advice.textContent = `"${response.slip.advice}"`;
      adviceId.textContent = `${response.slip.id}`;
    })
    .catch(function (err) {
      advice.textContent = `"Taking photos with tablet devices looks weird."`;
      adviceId.textContent = "301";
    });
});
