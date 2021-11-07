const inputs = document.querySelectorAll(".inputs")
const calculateBtn = document.querySelector("#calculate-area")
const outputDiv = document.querySelector("#output");


function calculateAreaOfTriangle(base, height){
    const areaOfTriangle = 0.5*base*height;
    return areaOfTriangle;
}


function result(){

   const areaOfTriangle = calculateAreaOfTriangle(Number(inputs[0].value),Number(inputs[1].value));
   outputDiv.innerText = `Area of Triangle is ${areaOfTriangle}`+ "cm²" ;

}

calculateBtn.addEventListener("click", result);