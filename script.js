document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.querySelector('#popup-overlay');
    const showPopupBtn = document.querySelector('#show-popup');
    const closePopupBtn = document.querySelector('.popup-close');
    const popupForm = document.querySelector('#popup-form');

    popupOverlay.style.display = 'none';

    showPopupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    popupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Сообщение отправлено");
        popupOverlay.style.display = "none";
        popupForm.reset();
    });


    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach((header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = header.classList.contains('active');
            
            if (content) {
                if (isOpen) {
                    content.style.maxHeight = null;
                    // header.classList.remove('active');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    // header.classList.add('active');
                }
            }

            header.classList.toggle('active');
        });
    }));


    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none'; 
            });

            btn.classList.add('active');

            const tabId = btn.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            targetContent.classList.add('active');
            targetContent.style.display = 'block';
        });
    });


    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const text = tooltip.querySelector('.tooltip-text');

        tooltip.addEventListener('mouseenter', () => {
            text.style.visibility = 'visible';
            text.style.opacity = '1';
        });

        tooltip.addEventListener('mouseleave', () => {
            text.style.visibility = 'hidden';
            text.style.opacity = '0';
        });
    });



    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.slider-arrow-left');
    const rightArrow = document.querySelector('.slider-arrow-right');
    const dots = document.querySelectorAll('.slider-dot');

    let currentSlide = 0;
    const slidesCount = slides.length;

    slider.style.display = 'flex';
    slider.style.transition = 'transform 0.5s ease-out';
    slider.style.overflow = 'visible';
 
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.minWidth = '100%';

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;

            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }

            leftArrow.style.opacity = currentSlide === 0 ? '0.3' : '1';
            leftArrow.style.cursor = currentSlide === 0 ? 'not-allowed' : 'pointer';

            rightArrow.style.opacity = currentSlide === slidesCount - 1 ? '0.3' : '1';
            rightArrow.style.cursor = currentSlide === slidesCount - 1 ? 'not-allowed' : 'pointer';
        }

        rightArrow.addEventListener('click', () => {
            if (currentSlide < slidesCount - 1) {
                currentSlide++;
                updateSlider();
            }
        });

        leftArrow.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });

        updateSlider();
    });


});