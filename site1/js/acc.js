let menu = document.getElementById("bell-menu")
let bellDigit = document.getElementById("bell-digit")
let bellDigitCnt = 1
let bell = document.getElementById("bell")
// Удаление уведомлений

menu.onclick = function(event){
    let temp = event.target.closest('span')
    if(!temp) return
    if(!menu.contains(temp)) return
    removeNotif(temp.parentElement)
}

function removeNotif(notif){
    notif.classList.add("active")
    bellDigit.textContent= --bellDigitCnt;

    setTimeout(()=>{
        notif.remove()
    },200)
}

