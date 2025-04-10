export function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export function isElementInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0 + offset &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
        rect.right >= 0 + offset
    );
}