const o=window.location.pathname;let e=document.querySelectorAll(".nav-link");e.forEach(n=>{window.location.pathname==="/"?(e[0].classList.add("active-link"),e[5].classList.add("active-link")):n.href.includes(`${o}`)&&n.classList.add("active-link")});let c=document.getElementById("ham-btn"),t=document.getElementById("ham-nav");c.addEventListener("click",function(){t.style.height==="250px"?t.style.height="0px":t.style.height="250px"});let l=document.querySelector("#scrollTop");const a=()=>document.documentElement||document.body;l.addEventListener("click",()=>{document.documentElement.scrollIntoView({behavior:"smooth"})});document.addEventListener("scroll",()=>{a().scrollTop>100?l.style.opacity="100%":l.style.opacity="0%"});