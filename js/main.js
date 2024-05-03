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



