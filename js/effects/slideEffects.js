export function initSlideEffects() {
    const elements = document.querySelectorAll('.services-container, .service-container-reverse');
    
    elements.forEach((container, index) => {
        // Elementos a serem animados dentro do container
        const targets = container.querySelectorAll('img, .service-description, .service-description-reverse');
        
        // Alterna a direção baseado na posição do container
        const direction = index % 2 === 0 ? 'left' : 'right';
        
        targets.forEach((el, elIndex) => {
            // Configuração inicial
            el.style.opacity = '0';
            el.style.transform = `translateX(${direction === 'left' ? '-50px' : '50px'})`;
            el.style.transition = `all 800ms ease-out ${elIndex * 200}ms`;
            
            // Observador de interseção
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateX(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(el);
        });
    });
}