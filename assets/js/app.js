let sliderArray = [
    {
        slide: `
        
                <img src="assets/img/slider_01.jpg" alt="">
                <div class="content">
                    <p>GADEAN FOOTWEAR</p>
                    <h1>Stylish <br> Statements for <br> Young Icons</h1>
                    <a href="#">Explore Now</a>
                </div>
            
        `
    }, {
        slide: `
         
                 <img src="assets/img/slider_02.jpg" alt="">
                <div class="content">
                    <p>GADEAN FOOTWEAR</p>
                    <h1>Stylish <br> Statements for <br> Young Icons</h1>
                    <a href="#">Explore Now</a>
                </div>
           
        `
    },
    {
        slide: `
        
                <img src="assets/img/slider_01.jpg" alt="">
                <div class="content">
                    <p>GADEAN FOOTWEAR</p>
                    <h1>Stylish <br> Statements for <br> Young Icons</h1>
                    <a href="#">Explore Now</a>
                </div>
           
        `
    }, {
        slide: `
         
                 <img src="assets/img/slider_02.jpg" alt="">
                <div class="content">
                    <p>GADEAN FOOTWEAR</p>
                    <h1>Stylish <br> Statements for <br> Young Icons</h1>
                    <a href="#">Explore Now</a>
                </div>
            
        `
    }
]
let main_slider = document.getElementById('main_slider');
let mainSlide_btn_left = document.getElementById('mainSlide_btn_left');
let mainSlide_btn_right = document.getElementById('mainSlide_btn_right');

let slidelen = Array.from(main_slider.getElementsByClassName('slide')).length;
let currslidelen = 1;


let updateSlideLen = () => {
    slidelen = Array.from(main_slider.getElementsByClassName('slide')).length;
}


mainSlide_btn_right.addEventListener('click', () => {
    if (slidelen == currslidelen) {
        sliderArray.forEach((el, i) => {
            let card = document.createElement('div');
            card.className = 'slide';
            card.innerHTML = el.slide;
            main_slider.appendChild(card);
        })
    }
    currslidelen++;
    main_slider.style.transform += `translateX(-100%)`;
    updateSlideLen();
})




mainSlide_btn_left.addEventListener('click', () => {
    if (currslidelen === 1) {
        // Prepend new slides
        sliderArray.slice().reverse().forEach(el => {
            const card = document.createElement('div');
            card.className = 'slide';
            card.innerHTML = el.slide;
            main_slider.prepend(card);
        });

        updateSlideLen();

        // Instantly jump to the end of prepended slides
        main_slider.style.transition = 'none';
        main_slider.style.transform = `translateX(-${sliderArray.length * 100}%)`;

        void main_slider.offsetWidth; // Force reflow

        main_slider.style.transition = 'transform 0.5s ease';
        currslidelen = sliderArray.length;
        main_slider.style.transform = `translateX(-${(currslidelen - 1) * 100}%)`;

        // Remove extra slides from the end after animation
        setTimeout(() => {
            while (main_slider.children.length > sliderArray.length * 2) {
                main_slider.removeChild(main_slider.lastElementChild);
            }
            updateSlideLen();
        }, 600); // After animation completes
    } else {
        currslidelen--;
        main_slider.style.transform = `translateX(-${(currslidelen - 1) * 100}%)`;
        updateSlideLen();
    }
});

