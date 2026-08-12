document.addEventListener("DOMContentLoaded",()=>{
  const button=document.querySelector(".menu-button");
  const nav=document.querySelector(".site-nav");
  if(button&&nav){button.addEventListener("click",()=>nav.classList.toggle("open"));}
  document.querySelectorAll("form").forEach(f=>f.addEventListener("submit",e=>e.preventDefault()));
});
