const tickets = document.querySelectorAll('.container button');
const form = document.getElementById('form');
const name = document.getElementById('name');
const nameError = document.getElementById('name-error');
const input = document.querySelector('.input-details input');
const btnvalue = document.querySelectorAll('#btnvalue');


tickets.forEach((item) => {
    item.addEventListener('click',(e) => {
        item.style.backgroundColor = "rgb(6, 66, 6)";
        item.style.border = "none";
        item.style.color = "white";
        window.location.href = "./info.html";
        
    })
});

form.addEventListener('submit', (e) => {
    if(name.value === '' || name.value == null){
        e.preventDefault()
        nameError.innerHTML = "Your Name is required";
        input.style.border= "1px solid red";
    }else{
        nameError.innerHTML = "";
        

    }
})