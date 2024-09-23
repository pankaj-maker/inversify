const rootEl=document.querySelector("html")
const imgEl= document.querySelector("span img")
function handleToggleTheme(){
rootEl.classList.toggle("dark-theme")
if(rootEl.classList.contains("dark-theme")){
    imgEl.src = "https://img.icons8.com/color/48/partly-cloudy-day--v1.png"
    
}else{
    imgEl.src="https://img.icons8.com/color/48/partly-cloudy-night--v1.png"
}

}
export default handleToggleTheme;