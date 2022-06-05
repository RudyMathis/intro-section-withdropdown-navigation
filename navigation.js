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

    // toggleAnimateFunction(menu, modal, menuOpen, menuClose);
    // removeAnimateFunction(menu, modal, menuOpen, menuClose);
    
    if(menu.classList.contains("hide")){
        addAnimateInFunction(menu, modal, menuOpen, menuClose);
        removeAnimateOutFunction(menu, modal, menuOpen, menuClose)
        // menu.classList.add("animate-in");
        // menu.classList.remove("animate-out");
        
        // addAnimateFunction(menu, modal);
        // removeAnimateFunction(menu, modal);
        // removeAnimateFunction(menu, modal, menuOpen, menuClose);
        // removeFunction(menu, menuClose, menuOpen, modal);
        
        // menuOpen.classList.add("blur-out-expand");
        // menuOpen.classList.remove("blur-out-contract");
        
        // menuClose.classList.remove("blur-out-contract");
        // menuClose.classList.remove("blur-out-contract");
        
        // btn.classList.toggle("blur-out-expand");
        // btn.classList.remove("blur-out-contract");

        // modal.classList.add("fade-in");
        // modal.classList.remove("fade-out");
        
        console.log("show");
    } else {
        addAnimateOutFunction(menu, modal, menuOpen, menuClose);
        removeAnimateinFunction(menu, modal, menuOpen, menuClose)
        // menu.classList.remove("animate-in");
        // menu.classList.add("animate-out");

        // menuClose.classList.remove("blur-out-contract");
        // menuClose.classList.remove("blur-out-contract");

        // menuOpen.classList.add("blur-out-contract");
        // menuOpen.classList.add("blur-out-contract");

        // btn.classList.remove("blur-out-expand");
        // btn.classList.toggle("blur-out-contract");

        // modal.classList.remove("fade-in");
        // modal.classList.add("fade-out");
        console.log("hide");
    }

});


listParent.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        answer = btn.lastElementChild;
        flipUP = btn.firstElementChild.firstElementChild;
        flipDown = btn.firstElementChild.firstElementChild.nextElementSibling;

        toggleFunction(answer, flipUP, flipDown);

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
// function addFunction(...args){
//     args.forEach((element)=>{
//         element.classList.add();
//     });
// }

function addAnimateOutFunction(a,b,c,d){
    a.classList.add("animate-out");
    b.classList.add("fade-out");
    c.classList.add("blur-out-contract");
    d.classList.add("blur-out-expand");
}



function removeAnimateinFunction(a, b, c, d){
    a.classList.remove("animate-in");
    b.classList.remove("fade-in");
    c.classList.remove("blur-out-contract");
    d.classList.remove("blur-out-expand");
}

function removeAnimateOutFunction(a, b, c, d){
    a.classList.remove("animate-out");
    b.classList.remove("fade-out");
    c.classList.remove("blur-out-contract");
    d.classList.remove("blur-out-expand");
}

// function toggleAnimateFunction(a,b){
//     a.classList.toggle("animate-in")
//     b.classList.toggle("fade-in")
//     d.classList.toggle("blur-out-expand")
//     c.classList.toggle("blur-out-contract")
// }
    
    // change variable names to be more appropriate
    // if(element.classList.contains("menu")){
    //     element.classList.add("animate-in");
    //     console.log("hello");
    
    // } 