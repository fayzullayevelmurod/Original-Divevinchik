let headerMenu = document.querySelectorAll('header .nav_link li')

headerMenu.forEach((item, idx) => {
    let headAnimation;
    
    if (idx == 0 || idx == 3 || idx == 4 || idx == 5) {
        headAnimation = bodymovin.loadAnimation({
            container: item.querySelector('span'),
            renderer: 'svg',
            path: '../animation/menu_1.json',
            loop: false,
            autoplay: false,
        })
        headAnimation.setSpeed(0.5)
    } else {
        headAnimation = bodymovin.loadAnimation({
            container: item.querySelector('span'),
            renderer: 'svg',
            path: '../animation/menu_2.json',
            loop: false,
            autoplay: false,
        })
        headAnimation.setSpeed(0.8)
    }
    
    
    let link = item.querySelector('a');

    link.onmouseenter = () => {
        headAnimation.play();
    }

    link.onmouseleave = () => {
        headAnimation.stop();
    }
})

let headerHeart = bodymovin.loadAnimation({
    container: document.querySelector('.header__heart'),
    renderer: 'svg',
    path: '../animation/header_heart.json',
    loop: false,
    autoplay: false,
})
headerHeart.setSpeed(0.5)
headerHeart.play();

let heart = bodymovin.loadAnimation({
    container: document.querySelector('.home .heart'),
    renderer: 'svg',
    path: '../animation/hearts.json',
    loop: false,
    autoplay: false,
})
heart.setSpeed(0.5)
heart.play();

let arrow = bodymovin.loadAnimation({
    container: document.querySelector('.home .arrow'),
    renderer: 'svg',
    path: '../animation/home_arrow.json',
    loop: false,
    autoplay: false,
})
arrow.setSpeed(0.5)
arrow.play();

let successArrow = bodymovin.loadAnimation({
    container: document.querySelector('.success .arrow-down'),
    renderer: 'svg',
    path: '../animation/home_arrow.json',
    loop: false,
    autoplay: false,
})
successArrow.setSpeed(0.5)
successArrow.play();

let failureArrow = bodymovin.loadAnimation({
    container: document.querySelector('.failure .arrow-down'),
    renderer: 'svg',
    path: '../animation/home_arrow.json',
    loop: false,
    autoplay: false,
})
failureArrow.setSpeed(0.5)
failureArrow.play();

let priceLike = bodymovin.loadAnimation({
    container: document.querySelector('.price_like_animation'),
    renderer: 'svg',
    path: '../animation/text_1.json',
    loop: false,
    autoplay: false,
})
priceLike.setSpeed(0.5)
// priceLike.play();

let profile = bodymovin.loadAnimation({
    container: document.querySelector('.profiles_img'),
    renderer: 'svg',
    path: '../animation/profiles_img.json',
    loop: false,
    autoplay: false,
})
profile.setSpeed(0.5)
// profile.play();

let jumpArrow = bodymovin.loadAnimation({
    container: document.querySelector('.jump__arrow'),
    renderer: 'svg',
    path: '../animation/jump_arrow.json',
    loop: false,
    autoplay: false,
})
jumpArrow.setSpeed(0.5)
// jumpArrow.play();

let perfectText = bodymovin.loadAnimation({
    container: document.querySelector('.perfect__text'),
    renderer: 'svg',
    path: '../animation/text_2.json',
    loop: false,
    autoplay: false,
})
perfectText.setSpeed(0.5)
// perfectText.play();

let perfectArrow = bodymovin.loadAnimation({
    container: document.querySelector('.perfect .arrow_down'),
    renderer: 'svg',
    path: '../animation/perfect_arrow.json',
    loop: false,
    autoplay: false,
})
perfectArrow.setSpeed(0.5)
// perfectArrow.play();

let refundLine = bodymovin.loadAnimation({
    container: document.querySelector('.refund_line'),
    renderer: 'svg',
    path: '../animation/refund_text_line.json',
    loop: false,
    autoplay: false,
})
refundLine.setSpeed(0.5)
// refundLine.play();

let refundCheck = bodymovin.loadAnimation({
    container: document.querySelector('.refund_icon'),
    renderer: 'svg',
    path: '../animation/check.json',
    loop: false,
    autoplay: false,
})
refundCheck.setSpeed(0.5)
// refundCheck.play();

let answerIcon = bodymovin.loadAnimation({
    container: document.querySelector('.answer__icon'),
    renderer: 'svg',
    path: '../animation/FAQ.json',
    loop: false,
    autoplay: false,
})
answerIcon.setSpeed(0.5)
// answerIcon.play();

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
    const header = item.querySelector('.accordion__head');
    const content = item.querySelector('.accordion__body');

    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    }

    header.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        item.classList.toggle('active');
    });
});

let modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    modalOpen = document.querySelectorAll('.modal__open'),
    modalPrice = document.querySelector('.modal__bottom p span');

modalOpen.forEach((btn, idx) => {
    btn.onclick = e => {
        let price = document.querySelectorAll('.tarif__block_item .price span')[idx];
        modalPrice.textContent = parseInt(price.textContent) + '₽';
        e.preventDefault();
        modal.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    }
})

if (modalClose) {
    modalClose.onclick = () => {
        modal.classList.remove('active');
        document.querySelector('body').style.overflow = 'visible';
    }
}

let targetEl = [
    {icon: priceLike, el: document.querySelector('.price_like_animation')},
    {icon: profile, el: document.querySelector('.profiles_img')},
    {icon: jumpArrow, el: document.querySelector('.jump__arrow')},
    {icon: perfectText, el: document.querySelector('.perfect__text')},
    {icon: perfectArrow, el: document.querySelector('.perfect .arrow_down')},
    {icon: refundLine, el: document.querySelector('.refund_line')},
    {icon: refundCheck, el: document.querySelector('.refund_icon')},
    {icon: answerIcon, el: document.querySelector('.answer__icon')},
];

document.addEventListener("scroll", function() {
    if (targetEl.length) {
        targetEl.forEach(item => {
            let rect = item.el.getBoundingClientRect();

            if (item.icon == jumpArrow) {
                if (rect.top >= 0 && (rect.bottom - 400) <= window.innerHeight) {
                    item.icon.play();
                }
            }
    
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                item.icon.play();
            }
        })
    }
});
