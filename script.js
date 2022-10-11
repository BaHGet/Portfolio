const navLinks = [...document.querySelectorAll('.nav-link')];
navLinks.map(link =>{
    link.addEventListener('click', () =>{
        const element = document.getElementById(link.getAttribute("data-name"));
        const menu = document.querySelector(".overly")
        menu.style.display="none";
    
        element.scrollIntoView({behavior:'smooth', block:'start'})
        const oldEle = [...document.querySelectorAll(".currentpage")]
        oldEle.map(el =>{
            if(el){
                el.classList.remove("currentpage")
            }
        })
        link.classList.add("currentpage")
    })
})

function handleShowMenu(e) {
    e.preventDefault();
    const menu = document.querySelector(".overly")
    console.log(menu)
    let displayStats = getComputedStyle(menu).getPropertyValue("display");
    if(displayStats==="none" || menu.style.display==="none")
    {
        menu.style="display:flex !important"
    }else{
        menu.style="display:none !important"
    }
}

