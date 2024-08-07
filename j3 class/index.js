// let text=""
// const fruits=["apple" , "orange" , "peach"]
// fruits.forEach(myfruits)
// document.write(text)
// function myfruits(item , index){
//     text = text + index +":" + item +"<br>";
// }
// text += index +":" + item +"<br>";
// text = text + index + ":" +item +"<br>"




// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(mynumber);
// document.write(sum)

// function mynumber(item) {
//   sum = sum + item;
// }



// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// document.getElementById("demo").innerHTML = numbers;

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

// random color generator
function randomColor(){
    let val1 = Math.ceil(18 + Math.random() * 255);
    let val2 = Math.ceil(18 + Math.random() * 255);
    let val3 = Math.ceil(18 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`;
}

setInterval(() => {
    document.querySelector("body").style.backgroundColor = randomColor();
},2000);
   
let modeBtn = document.querySelector("#mode");
let currentMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currentMode === "light"){
        currentMode = "dark"
        document.querySelector("body").style.backgroundColor= "black";
    }
    else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor= "white";
    }
    console.log(currentMode);
})






