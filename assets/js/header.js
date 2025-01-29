window.addEventListener ("load", ()=> {
  const hamburgerButton = document.getElementById("vvvv-hamburgerButton")
  const menu = document.getElementById("vvvv-menu")
  
  hamburgerButton.addEventListener("click", ()=>{
    menu.classList.toggle("visible")
  })
}, true);