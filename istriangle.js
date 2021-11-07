const inputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const SumOfAngles = angle1 + angle2 + angle3;
    return SumOfAngles;
}

function isTriangle(){
    const SumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(SumOfAngles ===180){
        outputE1.innerText = "Yay, The angles form a triangle.";
    }
    else{
        outputE1.innerText = "Oh Oh! The angles don't form a triangle.";
    }
}

isTriangleBtn.addEventListener("click", isTriangle)