const btnModal = document.querySelector('.modal-btn');
const Modal = document.querySelector('.modal-content')
const closeModal = document.querySelector('.modal-content__close');

btnModal.addEventListener('click' , () => {
    Modal.classList.add('active-modal')
})
closeModal.addEventListener('click' , () => {
    Modal.classList.remove('active-modal')
})