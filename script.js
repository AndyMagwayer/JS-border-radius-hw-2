const box = document.getElementById('box');
const topLeftInput = document.getElementById('top-left-input');
const topRightInput = document.getElementById('top-right-input');
const bottomRightInput = document.getElementById('bottom-right-input');
const bottomLeftInput = document.getElementById('bottom-left-input');
const cssCode = document.getElementById('css-code');

function updateBox() {
  const topLeft = topLeftInput.value;
  const topRight = topRightInput.value;
  const bottomRight = bottomRightInput.value;
  const bottomLeft = bottomLeftInput.value;
  
  box.style.borderTopLeftRadius = `${topLeft}px`;
  box.style.borderTopRightRadius = `${topRight}px`;
  box.style.borderBottomRightRadius = `${bottomRight}px`;
  box.style.borderBottomLeftRadius = `${bottomLeft}px`;
  
  updateCSSCode();
}

function updateCSSCode() {
  const topLeft = topLeftInput.value;
  const topRight = topRightInput.value;
  const bottomRight = bottomRightInput.value;
  const bottomLeft = bottomLeftInput.value;
  
  const css = `#box {
    border-top-left-radius: ${topLeft}px;
    border-top-right-radius: ${topRight}px;
    border-bottom-right-radius: ${bottomRight}px;
    border-bottom-left-radius: ${bottomLeft}px;
  }`;
  
  cssCode.textContent = css;
}

topLeftInput.addEventListener('input', updateBox);
topRightInput.addEventListener('input', updateBox);
bottomRightInput.addEventListener('input', updateBox);
bottomLeftInput.addEventListener('input', updateBox);