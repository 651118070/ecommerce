const menu=document.querySelector('.menu');
const navbar=document.querySelector('.navbar');
const menuclose=document.querySelector('.menu-close')
const header = document.querySelector('.header');
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    
    navbar.classList.toggle('scale-y-100');
    navbar.classList.toggle('scale-y-0');
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 50 ) {
        header.classList.add('bg-white', 'shadow-md');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.remove('bg-white', 'shadow-md');
        header.classList.add('bg-pink');
    }
});

const slider = document.getElementById("slider");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");




loginTab.addEventListener("click",()=>{
    slider.style.transform="translateX(0%)";
    loginTab.classList.add("border-b-2", "border-red");
    registerTab.classList.remove("border-b-2", "border-red");

});
registerTab.addEventListener("click",()=>{
    slider.style.transform="translateX(-50%)";
    registerTab.classList.add("border-b-2", "border-red");
    loginTab.classList.remove("border-b-2", "border-red");
});