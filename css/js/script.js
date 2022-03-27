window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".page-loader").style.display = "none";
    },800);
});


const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hidenSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hidenSection(){
    document.querySelector("section.active").classList.toggle("fade-out")
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active")
}

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        document.querySelector(".overlay").classList.add("active")
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hidenSection();
            document.body.classList.add("hide-scrolling")
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out")
            document.querySelector(e.target.hash).classList.add("active");
            window.scroll(0,0);
            document.body.classList.remove("hide-scrolling")
            navToggler.classList.remove("hide")
            document.querySelector(".overlay").classList.remove("active")
        },500)
    }
});