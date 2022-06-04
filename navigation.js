const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");
const menuClose = document.querySelector(".menu-close");
const listParent = document.querySelectorAll(".list-parent");
const modal = document.querySelector(".modal");


btn.addEventListener("click", ()=>{
    toggleFunction(menu, menuClose, modal);
});


listParent.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        answer = btn.lastElementChild;
        flipUP = btn.firstElementChild.firstElementChild;
        flipDown = btn.firstElementChild.firstElementChild.nextElementSibling;

        toggleFunction(answer, flipUP, flipDown);

    });
});

function toggleFunction(a, b, c){
    a.classList.toggle("hide");
    b.classList.toggle("hide");
    c.classList.toggle("hide");
}
