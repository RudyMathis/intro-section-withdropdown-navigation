const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");
const menuClose = document.querySelector(".menu-close");
const listParent = document.querySelectorAll(".list-parent");
const menuList = document.querySelectorAll(".menu-list");
const modal = document.querySelector(".modal");
const hide = document.querySelector(".hide");
const menuOpen = document.querySelector(".menu-open");


btn.addEventListener("click", ()=>{

    setTimeout(() => {
        toggleFunction(menu, menuClose, menuOpen, modal);
    }, 250);

    if(menu.classList.contains("hide")){
        addAnimateInFunction(menu, modal);
        removeAnimateOutFunction(menu, modal);
    } else {
        addAnimateOutFunction(menu, modal);
        removeAnimateInFunction(menu, modal);
    }
});


listParent.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        answer = btn.lastElementChild;
        flipUp = btn.firstElementChild.firstElementChild;
        flipDown = btn.firstElementChild.firstElementChild.nextElementSibling;

        toggleFunction(answer, flipUp, flipDown);
    });
});

// function for hide and animation

function toggleFunction(...args){
    args.forEach((element)=>{
        element.classList.toggle("hide");
    });
}


function addAnimateInFunction(a, b){
    a.classList.add("animate-in");
    b.classList.add("fade-in");
}


function addAnimateOutFunction(a,b){
    a.classList.add("animate-out");
    b.classList.add("fade-out");
}


function removeAnimateInFunction(a, b){
    a.classList.remove("animate-in");
    b.classList.remove("fade-in");
}

function removeAnimateOutFunction(a, b){
    a.classList.remove("animate-out");
    b.classList.remove("fade-out");
}

// media query

window.addEventListener("load", ()=>{
    mediaQuery();
})

window.addEventListener("resize",()=>{
    mediaQuery();
})

function mediaQuery(){
    if (window.innerWidth >= 1024) 
    {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

// change variable names to be more appropriate
