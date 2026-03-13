

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => {
navMenu.classList.toggle("active");
};

/* MOBILE DROPDOWN */

document.querySelectorAll(".dropdown > a").forEach(menu =>{

menu.addEventListener("click",function(e){

if(window.innerWidth < 900){
e.preventDefault();
this.parentElement.classList.toggle("active");
}

});

});

/* ACTIVE LINK */

const links=document.querySelectorAll(".nav-menu a");

links.forEach(link=>{

link.addEventListener("click",function(){

links.forEach(nav=>nav.classList.remove("active"));
this.classList.add("active");

});

});

/* DARK MODE */

const toggle=document.getElementById("darkToggle");

toggle.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerHTML="☀️";
}else{
toggle.innerHTML="🌙";
}

};

/* NAVBAR SHRINK */

const header=document.getElementById("header");

window.addEventListener("scroll",function(){

if(window.scrollY>80){

header.classList.add("shrink");

}else{

header.classList.remove("shrink");

}

});
