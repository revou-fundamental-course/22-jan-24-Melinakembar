var button = document.querySelector('#button');
var bodyCard = document.querySelector('.list-keranjang');

button.addEventListener('click',addCard)

function addCard(){
    var name = document.querySelector('#name').value;
    var zodiak = document.querySelector('#zodiak').value;
    var color = document.querySelector('#colour').value;
    var emoji = document.querySelector('#flower').value;
    var quotes = document.querySelector('#txt').value;
    var template =
     `<div class="card-keranjang" style="background-color:${color} ;">
    <h2>${name}</h2>
    <img src="asset/${emoji}.svg" alt="foto${emoji}" id="emoji-card">
    <h3>${zodiak}</h3>
    <p>"${quotes}"</p>
    </div>`;
    
   

    if(name == ""){
        alert('Pastikan semua bagian di isi !');
    }else if(zodiak == ""){
        alert('Pastikan semua bagian di isi !');
    } else if(color ==""){
        alert('Pastikan semua bagian di isi !');
    }else if(quotes == ""){
        alert('Pastikan semua bagian di isi !');
    }else{
        bodyCard.innerHTML +=template;
    }

}

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if(window.scrollY > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
