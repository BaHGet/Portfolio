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
alert(`width = ${window.innerWidth} , height=${window.innerHeight}`)

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
