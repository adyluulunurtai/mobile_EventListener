window.addEventListener('DOMContentLoaded', ()=>{

    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (e)=>{
        e.preventDefault();
        console.log("start")
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });

    
    box.addEventListener("touchmove", (e)=>{
        e.preventDefault();touches
        //console.log("move")
    });

    box.addEventListener("touchend", (e)=>{
        e.preventDefault();
        //console.log("end")
    });


    //SVOISTVA:
    //touches
    //targetTouches
    //changedTouches
})