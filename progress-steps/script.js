const circleEls = document.querySelectorAll('.circle');
const lineEl = document.querySelector('.line');
const prevEl = document.querySelector('#prev');
const nextEl = document.querySelector('#next');

const TOTAL = 4;
let curNumber = 0;

// 点击上一个按钮
prevEl.addEventListener('click', () => {
    curNumber = Math.max(curNumber - 1, 0);
    
    render();
});

// 下一个按钮
nextEl.addEventListener('click', () => {
    curNumber = Math.min(curNumber + 1, TOTAL - 1);
    
    render();
});

const render = () => {
    // 渲染circle
    for(let i = 0; i < TOTAL; i++) {
        if (i <= curNumber) {
            circleEls[i].classList.add('active');
        } else {
            circleEls[i].classList.remove('active');
        }
    }

    // 渲染进度条
    lineEl.style.width = curNumber / (TOTAL - 1) * 100 + '%';

    // 渲染按钮
    if (curNumber === 0) {
        prevEl.classList.add('disabled');
    } else if (curNumber === TOTAL - 1) {
        nextEl.classList.add('disabled');
    } else {
        prevEl.classList.remove('disabled');
        nextEl.classList.remove('disabled');
    }
};