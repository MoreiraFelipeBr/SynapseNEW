import { initScrollEffects } from './effects/scrollEffects.js';
import { initSlideEffects } from './effects/slideEffects.js';

document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initSlideEffects('left');
});