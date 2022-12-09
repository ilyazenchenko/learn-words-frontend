 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("index-show")
            setTimeout(()=>{
                entry.target.classList.add("add-transition");
            },2000)
        }
    });
 });

 const hiddenElements = document.querySelectorAll('.index-hidden');
 hiddenElements.forEach((el1) => observer.observe(el1));
