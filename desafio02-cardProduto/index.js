const active3d = document.querySelector(".button-360");
const sofa = document.querySelector(".sofa");
const activeGif = document.querySelector(".activeGif");
const closeGif = document.querySelector("#closeGif");



// active3d.addEventListener("click", ()=>{
//     alert("ffff");
//     if(activeGif.style.display == "none"){
//         closeGif.style.display="block";
//         active3d.style.display="none";
//         sofa.style.display="none";
//         activeGif.style.display="block";
//     }else{
//         sofa.style.display="block";
//         activeGif.style.display="none";
//     }
    
    
    
// });

active3d.addEventListener("click", ()=>{
    closeGif.style.display="block";
    active3d.style.display="none";
    sofa.style.display="none";
    activeGif.style.display="block";
})

// const closeGif = document.querySelector(".closeGif");
closeGif.addEventListener("click", ()=>{
    closeGif.style.display="none";
    active3d.style.display="block";
    sofa.style.display="block";
    activeGif.style.display="none";
})

