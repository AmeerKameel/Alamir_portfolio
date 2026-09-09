const btn = document.getElementById("darkBtn");

btn.onclick = function(){

document.body.classList.toggle("dark");

}

const form = document.getElementById("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You For Contacting Us!");

form.reset();

});