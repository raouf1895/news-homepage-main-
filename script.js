const navBtnEl = document.querySelector(".navbar-icon")
const closeBtnEl = document.querySelector(".close-icon")
const menuEl = document.querySelector(".menu")
const navEl = document.querySelector(".navbar");


navBtnEl.addEventListener("click", ()=>{
    menuEl.style.display = 'flex';
    navBtnEl.style.visibility = 'hidden'
    closeBtnEl.style.display = 'block' 
    
})
closeBtnEl.addEventListener("click", ()=>{
    menuEl.style.display = 'none';
    closeBtnEl.style.display = 'none'
    navBtnEl.style.visibility = 'visible'
})

 

