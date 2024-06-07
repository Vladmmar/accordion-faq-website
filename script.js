let active = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((value, index, array) => {
    value.addEventListener("click", (event) => {
        const imagePlusCurr = document.getElementById(`image-${index + 1}-plus`)
        const imagePlusPrev = document.getElementById(`image-${active}-plus`);
        const imageMinusCurr = document.getElementById(`image-${index + 1}-minus`)
        const imageMinusPrev = document.getElementById(`image-${active}-minus`);
        const textCurr = document.getElementById(`text-${index + 1}`);
        const textPrev = document.getElementById(`text-${active}`);
        /*if(active != 0 && active != index + 1){
            imageMinusPrev.style.display = "none";
            imagePlusPrev.style.display = "block";
            textPrev.classList.toggle("p-active");
        }*/
        if(imagePlusCurr.style.display == "block"){
            imagePlusCurr.style.display = "none";
            imageMinusCurr.style.display = "block";
        } else{
            imagePlusCurr.style.display = "block";
            imageMinusCurr.style.display = "none";
        }   
        textCurr.classList.toggle("p-active");
        active = index + 1;
    })
    value.addEventListener("mouseover", (event) => {
        console.log("over")
        console.log(document.getElementById(`header-${index + 1}`))
        document.getElementById(`header-${index + 1}`).style.color = "rgb(174, 40, 235)" /*"hsl(292, 42%, 14%)"*/;
    })
    value.addEventListener("mouseout", (event) => {
        console.log("out")
        document.getElementById(`header-${index + 1}`).style.color = "black";
    })
})
