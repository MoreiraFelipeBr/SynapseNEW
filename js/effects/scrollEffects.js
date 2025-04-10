export function initScrollEffects() {
    const elements = document.querySelectorAll('[data-scroll-effect]');
    
    if (elements.length === 0) {
        console.warn('No elements with data-scroll-effect found');
        return;
    }

    const checkVisibility = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.7) && 
                            (rect.bottom >= 0);
            
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };

    // Verifica na carga inicial
    checkVisibility();
    
    // Verifica durante o scroll
    window.addEventListener('scroll', checkVisibility);
}