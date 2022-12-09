let loginForm = document.getElementById("login"),
    registerForm = document.getElementById("register"),
    forgotForm = document.getElementById("forgot"),
    regBt = document.getElementById("reg-bt"),
    logBt = document.getElementById("log-bt"),
    forgBt = document.getElementById("forg-bt"),
    toLogFromForgot = document.getElementById("to-login-from-forgot");
regBt.onclick = () => {
    loginForm.classList.add("login-hide-bottom")
    registerForm.classList.remove("register-hide")
}
logBt.onclick = () => {
    registerForm.classList.add("register-hide")
    loginForm.classList.remove("login-hide-bottom")
}
forgBt.onclick = () => {
    loginForm.classList.add("login-hide-top");
    forgotForm.classList.remove("forgot-hide");
}
toLogFromForgot.onclick = () => {
    forgotForm.classList.add("forgot-hide");
    loginForm.classList.remove("login-hide-top");
}
setTimeout(()=>{
    registerForm.classList.remove("hidden-top");
    forgotForm.classList.remove("hidden-bottom");
},1000)
function sendLetter(){
    
}