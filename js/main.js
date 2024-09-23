const inputEl= document.querySelector("[data-input-string]");
const buttonEl= document.querySelector("[data-button-copy");
const chipEl= document.querySelector("[data-chip");
const toggleEl= document.querySelector("[data-toggle-theme");

function reverse(input){
    return input.split("").reverse().join("");

}
function handleReverse(){
const currentValue=inputEl.value;
if(!currentValue) return;
const reversed =reverse(currentValue);
inputEl.value=reversed;
chipEl.classList.add("show")
navigator.clipboard.writeText(reversed);
setTimeout(()=>{
chipEl.classList.remove("show");

},1500);

}
inputEl.addEventListener("keypress",(event)=>{
if(event.key==="Enter"){
    handleReverse()
}
})
buttonEl.addEventListener("click",handleReverse)