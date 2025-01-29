window.addEventListener ("load",() => {
    const navbar = document.getElementById("vvvv-navbar")
    const hamburgerButton = document.getElementById("vvvv-hamburgerButton")
    const menu = document.getElementById("vvvv-menu")
      
    hamburgerButton.addEventListener("click", ()=>{
        menu.classList.toggle("visible")
    })
    
    setHeaderVar();
    
    window.onscroll = function() {
        setHeaderVar();
    
        if (menu.classList.contains ("visible"))
        {
          menu.classList.remove ("visible")
        }
    }
  
    function setHeaderVar()
    {          
        const headerBottom = Math.max(navbar.getBoundingClientRect().bottom, 0);
        document.documentElement.style.setProperty("--header-bottom", `${headerBottom}px`);
    }
}, true)