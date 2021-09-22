const searchItem = document.querySelector(".wrap-boxs__input-search");


searchItem.addEventListener('keyup', (e) => {
    let namesLi = document.getElementsByClassName('wrap-boxs__lists-item')

    let search = searchItem.value;

    for (let i = 0; i < namesLi.length; i++) {
        const name = namesLi[i].textContent;

        if (name.includes(search)) {
            namesLi[i].style.display = 'block'
        } else {
            namesLi[i].style.display = 'none'
        }



    }
})