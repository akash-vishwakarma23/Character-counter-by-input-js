var txta = document.querySelector("textarea")
var counter = document.querySelector("#counter")


txta.addEventListener("input" , function(){
    counter.textContent =  txta.value.length;
})