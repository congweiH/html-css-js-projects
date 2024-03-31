const circleEls = document.querySelectorAll('.circle');
const lineEl = document.querySelector('.line');
const prevEl = document.querySelector('#prev');
const nextEl = document.querySelector('#next');

const TOTAL = 4;
let curNumber = 0;

// 点击上一个按钮
prevEl.addEventListener('click', () => {
    // 第一个
    if (curNumber <= 0) {
        return;
    }
    circleEls[curNumber].classList.remove('active');
    curNumber = curNumber - 1;
    console.log('curNumber', curNumber);

    prevEl.classList.remove('disabled');
    nextEl.classList.remove('disabled');

    if (curNumber === 0) {
        prevEl.classList.add('disabled');
    } else if (curNumber === TOTAL - 1) {
        nextEl.classList.add('disabled');
    }
    lineEl.style.width = (curNumber) / (TOTAL - 1) * 100 + '%';
});

// 下一个按钮
nextEl.addEventListener('click', () => {
    // 最后一个
    if (curNumber >= TOTAL - 1) {
        return;
    }
    curNumber = curNumber + 1;
    console.log('curNumber', curNumber);
    circleEls[curNumber].classList.add('active');

    prevEl.classList.remove('disabled');
    nextEl.classList.remove('disabled');

    if (curNumber === 0) {
        prevEl.classList.add('disabled');
    } else if (curNumber === TOTAL - 1) {
        nextEl.classList.add('disabled');
    }
    lineEl.style.width = (curNumber) / (TOTAL - 1) * 100 + '%';
});