// const iconToggle=document.querySelector(".iconToggle");

// iconToggle.addEventListener("click",()=>{
//     alert("hola gente estoy dandole un click");
//     console.log(document);
    
// });


const mon=document.querySelector(".mon");
console.log(mon);

mon.addEventListener("click",()=>{
    document.body.classList.toggle("darkmode")
    ? mon.classList.add("bxs-sun")
    : mon.classList.remove("bxs-sun");
})
