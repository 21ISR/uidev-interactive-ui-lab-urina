document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.querySelector('.popup-overlay')
    const showPopupBtn = document.querySelector('#show-popup')
    const closePopupBtn = document.querySelector('.popup-close')
    const popupForm = document.querySelector('#popup-form')

//     function openPopup() {
//         popupOverlay.style.display = 'flex'
//     }

//     function closePopup() {
//         popupOverlay.style.display = 'none'
//     }

//     if (openPopupBtn && popupOverlay) {
//         openPopupBtn.addEventListener('click', openPopup)
//     }

//     if (closePopupBtn) {
//         closePopupBtn.addEventListener('click', closePopup)
//     }

//     if (popupOverlay) {
//         popupOverlay.addEventListener('click', (event) => {
//             if (event.target === popupOverlay) {
//                 closePopup()
//             }
//         })
//     }

//     if (popupForm) {
//         popupForm.addEventListener('click', (event) => {
//             event.preventDefault()
//             alert('Сообщение отправлено')
//             closePopup()
//             popupForm.reset()
//         })
//     }

    
// })

showPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex'
})

closePopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none'
})

popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none'
    }
})

popupForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('Сообщение отправлено')
    popupOverlay.style.display = 'none'
    popupForm.reset()
})