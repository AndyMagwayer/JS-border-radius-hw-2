const box = document.getElementById('box');
const radiusInput = document.getElementById('radius-input');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
const cssCode = document.getElementById('css-code');


radiusInput.addEventListener('input', () => {
    const radius = radiusInput.value;
    box.style.borderRadius = `${radius}px`;
    updateCSSCode();
});


sizeInput.addEventListener('input', () => {
    const color = colorInput.value;
    box.style.backgroundColor = color; 
    updateCSSCode();
});


colorInput.addEventListener('input' , ()) => {
    const color = color.value;
    box.style.backgroundColor = color;
    updateCSSCode();
}