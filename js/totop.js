let totopblock = document.querySelector('.totop');

totopblock.onclick = toTop;

function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 使用 'smooth' 实现平滑滚动
    totopblock.style.visibility = 'hidden';
}

function handleScroll() {
    if (window.scrollY >= 800) {
        totopblock.style.visibility = 'visible';
    } else {
        totopblock.style.visibility = 'hidden';
    }
}

// 使用节流来限制滚动事件的触发频率
window.addEventListener('scroll', throttle(handleScroll, 200));

// 节流函数，用于限制事件触发的频率
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
