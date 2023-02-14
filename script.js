const navLinks = [...document.querySelectorAll('.nav-link')];
navLinks.map(link =>{
    link.addEventListener('click', () =>{
        const element = document.getElementById(link.getAttribute("data-name"));

    
        element.scrollIntoView({behavior:'smooth', block:'start'})
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
window.onload = () =>{
    const textSection = document.querySelector("#home");
    const text = document.createElement("h3");
    text.classList.add("sub-text")
    text.textContent = `width = ${window.innerWidth} , height=${window.innerHeight}`;
    textSection.appendChild(text)
}

document.addEventListener('mousemove', (e)=>{
    navLinks.map(() =>{
        /* const ele = document.querySelector(".currentpage")
        ele.classList.remove('currentpage') */
        
        
    })
})

let animateSection = document.querySelector('#about')
animateSection.addEventListener('mousemove', ()=>{
    let lines = [...document.querySelectorAll('.stats-line')]
    let subLines = [...document.querySelectorAll('.line')]
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.animation = 'filling 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards'
        subLines[i].style.animation = 'filling 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards'
        
    }
    
})

/* 
@media screen and (max-height:2400px) and (max-width:1080px){
    section{
        background-image: url(./Images/Background/Dark-Background-mobile.png) !important;
        background-size:contain !important;
        background-position-y:left !important;
    }
    .main{
        background-image: url(./Images/Background/Dark-Background-mobile.png) !important;
    }
    .main-text{
        font-size:120px !important;
        padding: 575px 0 0 36px !important;
    }
    .sub-text{
        font-size:95px !important;
        padding: 60px 0 0 36px !important;
    }
    .overly{
        flex-direction: column !important;
        justify-content: center !important;
    }
    .heading{
        font-size:120px !important;
        padding:50px 0 0 0 !important;
    }
    .text{
        font-size:50px !important;
        font-weight: lighter !important;
        text-align: center !important;
    }
    .chart{
        margin: 30% 0 0 0 !important;
    }
    .data-name{
        font-size:60px !important;
    }
    #logo-image{
        width: 800px !important;
    }
    #logo-text{

        font-size: 85px !important;

    }
    h2#logo-text{
        font-size: 70px !important;

    }
    .nav-link{
        font-size: 66px !important;
    }
}
*/
