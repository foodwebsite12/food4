let monu=document.querySelector("#home h1")

let sonu=document.querySelector("#home button")

let servicesDescription =document.querySelector("#services")

let home =document.querySelector("#home")
setInterval(() => {
    monu.style.color = "red";
    monu.innerText="Welcome to Our Website ✨🙏";
    
    sonu.style.backgroundColor = "red";
    
    home.style.background ="url(image/bulkfood.jpg)";


    servicesDescription.style.color="red";
}, 1000);

setInterval(() => {
    monu.style.color = "blue";
    monu.innerText="Happy Durga Puja 🥰";

    sonu.style.backgroundColor = "blue";

    home.style.background ="url(image/tastyfood.jpg)";


    servicesDescription.style.color="blue";

}, 3000);

setInterval(() => {
    monu.style.color = "green";
    monu.innerText="Great Offers Coming Soon 🎁🎉✨";

    sonu.style.backgroundColor = "green";

    home.style.background ="url(image/tasty2.jpg)";


    servicesDescription.style.color="green";

}, 5000);



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}

function close(){
    mainMenu.style.top = '-120%';

}
