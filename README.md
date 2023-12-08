# JS-border-radius-hw-2
this project are will usefull who started js and want to have practice on it 

![Image alt](https://github.com/AndyMagwayer/JS-border-radius-hw-2/blob/main/Screenshot%202023-09-09%20161934.png)

## Deploy: https://js-border-radius-hw-2.netlify.app

## Website functionality description:

1. HTML:
   - A container is created (a div with the class "container"), where the div with adjustable parameters will be placed.
   - A control section is created (a div with the class "controls"), containing a slider for changing the radius (an input with the id "radius-input"), an input field for changing the size (an input with the id "size-input"), and a color picker (an input with the id "color-input").
   - A block for displaying the CSS code is created (a div with the class "css-output"), containing a pre element with the id "css-code".

<br>

2. CSS:
   - Styles are applied to the container to center it vertically and horizontally.
   - Styles are applied to the div with the id "box", which will be modified. The initial radius value is set to 0, and the background color is set to #000.
   - Styles are applied to the control section and the block for displaying the CSS code.

3. JavaScript:
   - References to the DOM elements are obtained using the getElementById method.
   - An "input" event handler is added to the radius slider. When the slider value changes, the new radius value is obtained and applied to the "box" element. Then, the updateCSSCode() function is called to update the CSS code in the "css-code" block.
   - An "input" event handler is added to the size input field. When the field value changes, the new size value is obtained and applied to the "box" element. Then, the updateCSSCode() function is called to update the CSS code in the "css-code" block.
   - An "input" event handler is added to the color picker input field. When the field value changes, the new color value is obtained and applied to the "box" element. Then, the updateCSSCode() function is called to update the CSS code in the "css-code" block.
   - The updateCSSCode() function is created to update the CSS code in the "css-code" block based on the current radius, size, and color values. A CSS code string is created and assigned to the textContent property of the "css-code" element.

Thus, the website allows the user to change the radius, size, and color of the div, and displays the corresponding CSS code for these changes.

## Описание функциональности сайта: 
1. HTML:
   - Создается контейнер (div с классом "container"), в котором будет располагаться div с изменяемыми параметрами.
   - Создается блок с контролами (div с классом "controls"), содержащий ползунок для изменения радиуса (input с id "radius-input"), поле ввода для изменения размера (input с id "size-input") и поле выбора цвета (input с id "color-input").
   - Создается блок для вывода CSS кода (div с классом "css-output"), содержащий pre элемент с id "css-code".

2. CSS:
   - Устанавливается стиль для контейнера, чтобы он был центрирован по вертикали и горизонтали.
   - Устанавливается стиль для div с id "box", который будет изменяться. Задается начальное значение радиуса (0) и цвета фона (#000).
   - Устанавливаются стили для блока с контролами и блока для вывода CSS кода.

3. JavaScript:
   - Получаем ссылки на элементы DOM с помощью метода getElementById.
   - Добавляем обработчик события "input" для ползунка радиуса. При изменении значения ползунка, получаем новое значение радиуса и применяем его к элементу "box". Затем вызываем функцию updateCSSCode() для обновления кода CSS в блоке "css-code".
   - Добавляем обработчик события "input" для поля размера. При изменении значения поля, получаем новое значение размера и применяем его к элементу "box". Затем вызываем функцию updateCSSCode() для обновления кода CSS в блоке "css-code".
   - Добавляем обработчик события "input" для поля выбора цвета. При изменении значения поля, получаем новое значение цвета и применяем его к элементу "box". Затем вызываем функцию updateCSSCode() для обновления кода CSS в блоке "css-code".
   - Создаем функцию updateCSSCode(), которая обновляет код CSS в блоке "css-code" на основе текущих значений радиуса, размера и цвета. Формируется строка с CSS кодом, которая затем присваивается свойству textContent элемента "css-code".

