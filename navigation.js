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
        addAnimateInFunction(menu, modal, menuOpen, menuClose);
        removeAnimateOutFunction(menu, modal, menuOpen, menuClose);
    

    } else {
        addAnimateOutFunction(menu, modal, menuOpen, menuClose);
        removeAnimateInFunction(menu, modal, menuOpen, menuClose);
    }

});


listParent.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        answer = btn.lastElementChild;
        flipUp = btn.firstElementChild.firstElementChild;
        flipDown = btn.firstElementChild.firstElementChild.nextElementSibling;

        toggleFunction(answer, flipUp, flipDown);

        answer.classList.add("slide-bottom");
        // fix: make it so feature returns to default when menu is closed


    });
});


function toggleFunction(...args){
    args.forEach((element)=>{
        element.classList.toggle("hide");
    });
}


function addAnimateInFunction(a, b, c, d){
    a.classList.add("animate-in");
    b.classList.add("fade-in");
    c.classList.add("blur-out-contract");
    d.classList.add("blur-out-expand");
}


function addAnimateOutFunction(a,b,c,d){
    a.classList.add("animate-out");
    b.classList.add("fade-out");
    c.classList.add("blur-out-expand");
    d.classList.add("blur-out-contract");
}


function removeAnimateInFunction(a, b, c, d){
    a.classList.remove("animate-in");
    b.classList.remove("fade-in");
    c.classList.remove("blur-out-contract");
    d.classList.remove("blur-out-expand");
}

function removeAnimateOutFunction(a, b, c, d){
    a.classList.remove("animate-out");
    b.classList.remove("fade-out");
    c.classList.remove("blur-out-expand");
    d.classList.remove("blur-out-contract");
}

    // change variable names to be more appropriate
