const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('click', (e) => {
        console.log('hhahaha');
        // 先后找到含有active类的元素
        const curActiveEl = document.querySelector('.active');
        // 去掉active样式
        curActiveEl.classList.remove('active');
        // 当前元素
        e.currentTarget.classList.add('active');
    })
}
