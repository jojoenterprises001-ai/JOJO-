
let cart = [];

let total = 0;

const cartItems = document.getElementById("cartItems");

const totalText = document.querySelector(".cart h3");

const buttons = document.querySelectorAll(".food-card button");

buttons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

const cards=document.querySelectorAll(".food-card");

const name=cards[index].querySelector("h3").innerText;

const price=parseInt(cards[index].querySelector("p").innerText.replace("₹",""));

cart.push({name,price});

total+=price;

renderCart();

});

});

function renderCart(){

cartItems.innerHTML="";

cart.forEach(item=>{

cartItems.innerHTML+=`

<p>${item.name} - ₹${item.price}</p>

`;

});

if(cart.length==0){

cartItems.innerHTML="No Items";

}

totalText.innerHTML="Total ₹"+total;

}

document.getElementById("orderBtn").addEventListener("click",()=>{

if(cart.length==0){

alert("Please add items first.");

return;

}

let message="🍽️ *JOJO CAFE ORDER*%0A%0A";

cart.forEach(item=>{

message+=`• ${item.name} - ₹${item.price}%0A`;

});

message+=`%0A💰 Total : ₹${total}`;

const ownerNumber="919999999999";
addStamp();
window.open(`https://wa.me/${ownerNumber}?text=${message}`,"_blank");

});
let stamps = 0;

function addStamp(){

if(total>=250 && stamps<7){

stamps++;

document.getElementById("s"+stamps).innerHTML="✔";

}

if(stamps==7){

alert("🎉 Congratulations!\n\nYou won ₹150 OFF Coupon.");

}

}
