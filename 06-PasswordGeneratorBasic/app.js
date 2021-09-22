const btnAdd = document.querySelector('.wrap-btn-start');
const btnCopy = document.querySelector('.wrap-btn-copy');
const boxPassword = document.querySelector('.wrap-boxs');

btnAdd.addEventListener('click', () => {
    let randomText = '';
    let randomChar = "0123456789abcdefghijklmnopqrstuvwxyz?$&@!"

    for (let i = 0; i < 12; i++) {

        randomText += randomChar.charAt(Math.floor(Math.random() * 41))

    }

    boxPassword.innerHTML = randomText;
})

btnCopy.addEventListener('click', () => {
    console.log(boxPassword.innerHTML);
    navigator.clipboard.writeText(boxPassword.innerHTML);
    btnCopy.classList.add("copy-success")
})