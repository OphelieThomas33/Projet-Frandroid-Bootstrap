document.addEventListener('scroll', (e) => {
    let btnScrollTop = document.getElementById("scrollTop");
    if(window.scrollY > 150){
        //Je veux afficher le bouton
        btnScrollTop.style.display = "initial";
    }
    else{
        //Je veux masquer le bouton
        btnScrollTop.style.display = "none";
    }
  });

  document.querySelectorAll(".changethemediv").forEach(div => {
    div.addEventListener("click", event => {
        let themeTarget = event.currentTarget.dataset.theme;

            if(themeTarget == "light") {

                document.querySelectorAll(".bg-dark").forEach(darkElement => {
                    darkElement.classList.remove("bg-dark");
                    darkElement.classList.add("bg-light");
                });

                document.querySelectorAll(".text-light").forEach(darkElement => {
                    darkElement.classList.remove("text-light");
                    darkElement.classList.add("text-dark");
                });
            }
            else if(themeTarget == "dark") {
                document.querySelectorAll(".bg-light").forEach(darkElement => {
                    darkElement.classList.remove("bg-light");
                    darkElement.classList.add("bg-dark");
                });

                document.querySelectorAll(".text-dark").forEach(darkElement => {
                    darkElement.classList.remove("text-dark");
                    darkElement.classList.add("text-light");
                });

            }
    });
}) 