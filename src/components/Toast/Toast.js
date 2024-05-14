const showToast=() =>{
    var toast = document.getElementById("toast");
    toast.classList.remove("opacity-0");
    toast.classList.add("opacity-100");
    setTimeout(function(){
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0");
    }, 3000); 
}

export {showToast}