const interactiveButtons = document.querySelector('.interactive-buttons')


function getPosition(event){
    interactiveButtons.innerText="";
    interactiveButtons.classList.remove(interactiveButtons.classList[1]);
    const nameClass = event.target.innerText.toLowerCase();
    
    interactiveButtons.classList.add(nameClass);
    
    const element = event.target.parentNode.parentNode.querySelectorAll('button')
    console.log(event.target.classList)
    if(event.target.classList[0] == "animate"){
        
        
        for(let i = 0; i <= element.length; i++){
        
            interactiveButtons.append(element[i].cloneNode(true))
            document.querySelectorAll(".interactive-buttons button")[i].addEventListener("click", ()=>{
                
                document.querySelectorAll(".interactive-buttons button")[i].classList.toggle("active")
            })
        }
        
        
    }
    else{
        for(let i = 0; i <= element.length; i++){
        
            interactiveButtons.append(element[i].cloneNode(true))
            
        }
    }
    
    
    
}
function loadingAnimate(){
    // interactiveButtons.classList.toggle("active");
    
}

// document.querySelectorAll(".loading button")[1].addEventListener("click", ()=>{alert("Alou")})

// console.log(document.querySelectorAll(".loading button")[1])





// function getPosition(event){
//     // interactiveButtons.innerText="";
//     interactiveButtons.classList.remove(interactiveButtons.classList[1]);
//     const nameClass = event.target.innerText.toLowerCase();
//     interactiveButtons.classList.add(nameClass);
//     // const element = event.target.parentNode.parentNode.querySelectorAll('button')
//     // if(interactiveButtons.classList[1] == "loading"){
//     //     // alert("alou")
        
//     //     for(let i = 0; i <= element.length; i++){
        
//     //         interactiveButtons.append(element[i].cloneNode(true))
            
//     //     }
        
//     // }
//     // else{
//     //     for(let i = 0; i <= element.length; i++){
        
//     //         interactiveButtons.append(element[i].cloneNode(true))
            
//     //     }
//     // }
    
    
    
// }


