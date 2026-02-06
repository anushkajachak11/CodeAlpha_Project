let display = document.getElementById("display");

function append(value){
 display.value += value;
}

function clearDisplay(){
 display.value = "";
}

function calculate(){
 try{
   display.value = eval(display.value);
 } catch{
   display.value = "Error";
 }
}

/* keyboard support */
document.addEventListener("keydown", e => {
 if("0123456789+-*/.".includes(e.key)){
   append(e.key)
 }
 if(e.key === "Enter") calculate();
 if(e.key === "Backspace") 
   display.value = display.value.slice(0,-1)
 if(e.key === "Escape") clearDisplay();
});
