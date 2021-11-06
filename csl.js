let screen = document.getElementById('input');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        screen.value += buttonText;
        screenValue += buttonText;
        screenValue += screen.value;
        if (buttonText == '=') {
            screen.value = eval(screenValue);

        }
    })

}