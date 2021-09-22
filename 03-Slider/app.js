const rightArrow = document.querySelector('.arrow-right');
const leftArrow = document.querySelector('.arrow-left');
const sliderBoxs = document.querySelector('.slider-container__boxs');

rightArrow.addEventListener('click' , (e) => {
    e.preventDefault()

    sliderBoxs.scrollLeft += 240
})
leftArrow.addEventListener('click' , (e) => {
    e.preventDefault()

    sliderBoxs.scrollLeft -= 240
})