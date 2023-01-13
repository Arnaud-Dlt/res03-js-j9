window.addEventListener("DOMContentLoaded", function()
{
    let inputs=document.querySelectorAll("input");
    
    for(let i=0;i<inputs.length;i++){
        let inputtxt=inputs[i].getAttribute("type");
        let inputEmail=inputs[i].getAttribute("type");
        let inputPassword=inputs[i].getAttribute("type");
        
        
        console.log(inputs)
    }
})