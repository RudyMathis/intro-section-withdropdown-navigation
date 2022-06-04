const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const main = document.querySelector("main");
const menuClose = document.querySelector(".menu-close");
const btnParent = document.querySelectorAll(".btn-parent");
const listParent = document.querySelectorAll(".list-parent");


btn.addEventListener("click", ()=>{
    menu.classList.toggle("hide");
    menuClose.classList.toggle("hide");
    // main.style.filter = "brightness(.1)"
});


listParent.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        answer = btn.lastElementChild;
        console.log(answer)
        answer.classList.toggle('hide');
        // arrow = btn.lastElementChild;
        // arrow.classList.toggle("flip");
        // bold = btn.firstElementChild;
        // bold.classList.toggle("bold");
    });
    });