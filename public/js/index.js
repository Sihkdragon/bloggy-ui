const menuHandler = () => {
    const button = document.querySelector("#button-menu");
    const menu = document.querySelector("#toggle-menu");
    // cons
    menu.classList.contains("-translate-y-96") ? menu.classList.remove("-translate-y-96") : menu.classList.add("-translate-y-96")
}
const LoginPopUpHandler = () => {
    const button = document.querySelector("#button-login");
    const menu = document.querySelector("#popup");
    // cons
    menu.classList.contains("invisible") ? menu.classList.remove("invisible") : menu.classList.add("invisible")
}