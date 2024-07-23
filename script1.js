let textBox = document.getElementById('textBox');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.onclick = () => {
        if (button === document.getElementById('clear')) {
            textBox.value = '';
        } else if (button.textContent === '=') {
            textBox.value = calculate(textBox.value);

        } else {
            textBox.value += button.textContent;
        }
    };
});

function calculate(expression) {
    let result;
    result = eval(expression);
    return result;
}
