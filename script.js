const navLinks = [...document.querySelectorAll('.nav-link')];
navLinks.map(link =>{
    link.addEventListener('click', () =>{
        const element = document.getElementById(link.getAttribute("data-name"));
        element.scrollIntoView({behavior:'smooth', block:'start'})
        const oldEle = document.querySelector(".currentpage")
        if(oldEle){
            oldEle.classList.remove("currentpage")
        }
        link.classList.add("currentpage")
    })
})














/*  



<div id="projects" class="composition">
    <h1 class="heading">Projects:</h1>
</div>

<div id="contact" class="composition">
    <h1 class="heading">Contact me:</h1>
</div>



*/