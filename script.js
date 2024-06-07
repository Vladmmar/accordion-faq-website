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
        //to automatically close the previous question
        /*if(active != 0 && active != index + 1){
            imageMinusPrev.style.display = "none";
            imagePlusPrev.style.display = "block";
            textPrev.classList.toggle("p-active");
        }*/
        //changing plus image to image and vice versa
        if(imagePlusCurr.style.display == "block"){
            imagePlusCurr.style.display = "none";
            imageMinusCurr.style.display = "block";
        } else{
            imagePlusCurr.style.display = "block";
            imageMinusCurr.style.display = "none";
        }   
        //showing the answer
        if (textCurr.classList.contains("p-active")){
            textCurr.style.maxHeight = null;
            textCurr.classList.remove("p-active");
        } else{
            textCurr.classList.add("p-active");
            textCurr.style.maxHeight = textCurr.scrollHeight + 'px';
        }
        active = index + 1;
    })
    //Adding hover effect
    value.addEventListener("mouseover", (event) => {
        document.getElementById(`header-${index + 1}`).style.color = "hsl(281, 83%, 54%)" /*"hsl(292, 42%, 14%)"*/;
    })
    value.addEventListener("mouseout", (event) => {
        document.getElementById(`header-${index + 1}`).style.color = "black";
    })
})
