export const modoOscuro = ()=>{
    const cardThemeButton = document.querySelector(".mainCard");
    const btnDarkMode = document.querySelector(".darkmode")
    btnDarkMode.addEventListener('click',(event)=>{
        event.preventDefault()
        cardThemeButton.classList.toggle("cardModoOscuro")
    })
}