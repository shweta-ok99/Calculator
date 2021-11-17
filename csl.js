let screen = document.getElementById('input');
buttons = document.querySelectorAll('button');
// buttons2 = document.getElementById('b8').innerText;
let screenValue = '';
// screenValue += 'buttons1';
// screenValue += '+';
// screenValue += 'buttons2';
// console.log(eval(buttons1 + buttons2));
// screen.value = eval(buttons1 + buttons2);
// console.log(eval('buttons1.innerText +2'))
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        //console.log('buttonText is', buttonText);




        if (buttonText == 'AC') {
            buttonText = '';
            screenValue = '';
            screen.value = screenValue;

        }
        screenValue += buttonText;
        screen.value = screenValue

        screen.value = eval(screenValue);

    })
}

// for (var i = 0; i < buttons.length; i++) {
//     screenValue += buttons.innerText;
//     screen.value = screenValue;
// }
// screen.value = buttons.innerText;
// console.log(buttons.innerText);