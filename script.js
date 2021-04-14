"use strict"

let schemes = ``;
for (let i = 0; i < 4; i++) {
    schemes += `
    <div id="scheme${i + 1}" class="schemediv">
        <div id="c1"></div>
        <div id="c2"></div>
        <div id="c3">Scheme ${i + 1}</div>
        <div id="c4"></div>
        <div id="c5"></div>
    </div>
    `;
};
// Lägg till Scheme
document.querySelector("#wrapper").innerHTML = schemes;

// Lägga till färgerna i scheme
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 5; j++) {
        document.querySelector(`#scheme${i} #c${j}`).style.backgroundColor = getColor(i, j);
    };
};



function getElement(){
    
    let element = document.createElement("div");
    element.classList.add("element");
    
    
    
    element.innerHTML = `
     
        <div>
           <div>
              <div>
                 <div>
                    <div>
                      <div></div>
                    </div>
                 </div>
             </div>
         </div>
      </div>
    
    `;
   
   return element;
   
}

document.querySelector("#content").append(getElement());





//bigger

document.getElementById("bigger").addEventListener("click", function(){
 document.documentElement.style.setProperty("--szToken", "45vh");
});
document.getElementById("bigger").addEventListener("click", function(){
 document.documentElement.style.setProperty("--szToken2", "40vh");
});
document.getElementById("bigger").addEventListener("click", function(){
 document.documentElement.style.setProperty("--szToken3", "30vh");
});
document.getElementById("bigger").addEventListener("click", function(){
 document.documentElement.style.setProperty("--szToken4", "35vh");
});
document.getElementById("bigger").addEventListener("click", function(){
 document.documentElement.style.setProperty("--szToken5", "35vh");
});

//smaller
document.getElementById("smaller").addEventListener("click", function(){
 document.documentElement.style.setProperty("--szToken", "14vh");
});
document.getElementById("smaller").addEventListener("click", function(){
    document.documentElement.style.setProperty("--szToken2", "12vh");
});
document.getElementById("smaller").addEventListener("click", function(){
    document.documentElement.style.setProperty("--szToken3", "8vh");
});
document.getElementById("smaller").addEventListener("click", function(){
    document.documentElement.style.setProperty("--szToken4", "10vh");
});
document.getElementById("smaller").addEventListener("click", function(){
    document.documentElement.style.setProperty("--szToken5", "10vh");
});


//stop

document.getElementById("stop").addEventListener("mouseup", function(){
    let sz = getComputedStyle(document.querySelector(".element > div")).getPropertyValue("width");
 document.documentElement.style.setProperty("--szToken", sz);
});
document.getElementById("stop").addEventListener("mouseup", function(){
    let sz = getComputedStyle(document.querySelector(".element > div > div")).getPropertyValue("width");
 document.documentElement.style.setProperty("--szToken2", sz);
});
document.getElementById("stop").addEventListener("mouseup", function(){
    let sz = getComputedStyle(document.querySelector(".element > div > div > div:nth-child(1)")).getPropertyValue("width");
 document.documentElement.style.setProperty("--szToken3", sz);
});
document.getElementById("stop").addEventListener("mouseup", function(){
    let sz = getComputedStyle(document.querySelector(".element > div > div > div > div:nth-child(1)")).getPropertyValue("width");
 document.documentElement.style.setProperty("--szToken4", sz);
});
document.getElementById("stop").addEventListener("mouseup", function(){
    let sz = getComputedStyle(document.querySelector(".element > div >  div > div > div > div:nth-child(1)")).getPropertyValue("width");
 document.documentElement.style.setProperty("--szToken5", sz);
});



document.querySelector("#scheme1").classList.add("active");

document.querySelector("#scheme1").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#scheme1").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(1, i));
    };
    
});
document.querySelector("#scheme2").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#scheme2").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(2, i));
    };
});
document.querySelector("#scheme3").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#scheme3").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(3, i));
    };
});
document.querySelector("#scheme4").addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#scheme4").classList.add("active");
    for (let i = 1; i <= 5; i++) {
        document.documentElement.style.setProperty(`--c${i}`, getColor(4, i));
    };
});