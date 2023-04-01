// product image hover

const productImg = document.querySelectorAll('.product-img img');
const imageSlide = document.querySelector('.image-slide');

let activeImageSlide = 0;

productImg.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
        productImg[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        imageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    });
});

// toggle size buttons product.html

const sizeBtn = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtn[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})