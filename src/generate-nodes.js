const body = document.querySelector('body');

const title = document.createElement('div');
title.classList.add('title');
title.innerText = 'RSS Virtual Keyboard';
body.appendChild(title);

const field = document.createElement('textarea');
field.classList.add('field');
body.appendChild(field);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.appendChild(keyboard);

const keyboard__container = document.createElement('div');
keyboard__container.classList.add('keyboard__container');
keyboard.appendChild(keyboard__container);

const description1 = document.createElement('p');
description1.classList.add('description');
description1.innerText = "Keyboard designed on macOs";
body.appendChild(description1);

const description2 = document.createElement('p');
description2.classList.add('description');
description2.innerText = "To switch language En/Ru press Ctrl+Space";
body.appendChild(description2);


const KeyboardKeys = {
    constructor(name) {
        this.name = name;
    },
    create() {
        const arr = [
            '>',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0',
            '-',
            '=',
            'del',
            'tab',
            'q',
            'w',
            'e',
            'r',
            't',
            'y',
            'u',
            'i',
            'o',
            'p',
            '[',
            ']',
            'caps',
            'a',
            's',
            'd',
            'f',
            'g',
            'h',
            'j',
            'k',
            'l',
            ';',
            "'",
            'enter',
            'shift',
            'z',
            'x',
            'c',
            'v',
            'b',
            'n',
            'm',
            ',',
            '.',
            '/',
            '▲',
            'shift',
            'fn',
            'ctrl',
            'opt',
            'cmd',
            'backspace',
            'cmd',
            '◄',
            '▲',
            '►',
            'opt'
        ];

        const createKeyName = (keyName) => {
            return `<div class="keyboard__key">${keyName}</div>`;
        };

        arr.forEach((el) => {
            const buttonKey = document.createElement('button');
            buttonKey.setAttribute('type', 'button');

            if ((el.length == 1 || el == 'fn' || el == 'ctrl' || el == 'opt')) {
                buttonKey.classList.add('keyboard__button');
                buttonKey.innerHTML = createKeyName(el);
            } else {
                switch (el) {
                    case 'del':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.innerHTML = createKeyName('del');
                        break;

                    case 'tab':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.innerHTML = createKeyName('tab');
                        break;
                    case 'caps':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.innerHTML = createKeyName('caps');
                        break;
                    case 'enter':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.innerHTML = createKeyName('enter');
                        break;
                    case 'shift':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.innerHTML = createKeyName('shift');
                        break;
                    case 'cmd':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.innerHTML = createKeyName('cmd');
                        break;
                    case 'backspace':
                        buttonKey.classList.add('keyboard__button-super-wide');
                        buttonKey.innerHTML = createKeyName('backspace');
                        break;
                }
            }
            keyboard__container.appendChild(buttonKey);
        });
    },
};

window.addEventListener('DOMContentLoaded', () => {
    KeyboardKeys.create();
});
