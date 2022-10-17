document.addEventListener('scroll', (e) => {
    let scrolltop = document.getElementById("scrolltop");
    if (window.scrollY > 150) {
        scrolltop.classlist.remove("d-none");
    }
    else {
       scrolltop.classlist.add("d-none");
    }  
  });