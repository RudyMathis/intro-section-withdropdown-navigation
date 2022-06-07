const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");
const menuClose = document.querySelector(".menu-close");
const listParent = document.querySelectorAll(".list-parent");
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
        menuList = btn.lastElementChild;
        flipUp = btn.firstElementChild.firstElementChild;
        flipDown = btn.firstElementChild.firstElementChild.nextElementSibling;

        toggleFunction(menuList, flipUp, flipDown);
    });
});

// function for hide and animation

function toggleFunction(...args){
    args.forEach((element)=>{
        element.classList.toggle("hide");
    });
}

function addAnimateInFunction(animate, fade){
    animate.classList.add("animate-in");
    fade.classList.add("fade-in");
}

function addAnimateOutFunction(animate, fade){
    animate.classList.add("animate-out");
    fade.classList.add("fade-out");
}

function removeAnimateInFunction(animate, fade){
    animate.classList.remove("animate-in");
    fade.classList.remove("fade-in");
}

function removeAnimateOutFunction(animate, fade){
    animate.classList.remove("animate-out");
    fade.classList.remove("fade-out");
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
