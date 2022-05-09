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

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard__container');
keyboard.appendChild(keyboardContainer);

const description1 = document.createElement('p');
description1.classList.add('description');
description1.innerText = 'Keyboard designed on macOs';
body.appendChild(description1);

const description2 = document.createElement('p');
description2.classList.add('description');
description2.innerText = 'To switch language En/Ru press ShiftLeft + OptL (AltLeft)';
body.appendChild(description2);

const arr = [
    { code: 'Backquote', lang: { en: '>', ru: '§' } },
    { code: 'Digit1', lang: { en: '1', ru: '1' } },
    { code: 'Digit2', lang: { en: '2', ru: '2' } },
    { code: 'Digit3', lang: { en: '3', ru: '3' } },
    { code: 'Digit4', lang: { en: '4', ru: '4' } },
    { code: 'Digit5', lang: { en: '5', ru: '5' } },
    { code: 'Digit6', lang: { en: '6', ru: '6' } },
    { code: 'Digit7', lang: { en: '7', ru: '7' } },
    { code: 'Digit8', lang: { en: '8', ru: '8' } },
    { code: 'Digit9', lang: { en: '9', ru: '9' } },
    { code: 'Digit0', lang: { en: '0', ru: '0' } },
    { code: 'Minus', lang: { en: '-', ru: '-' } },
    { code: 'Equal', lang: { en: '=', ru: '=' } },
    { code: 'Backspace', lang: { en: '⌫ Back', ru: '⌫ Back' } },
    { code: 'Tab', lang: { en: 'tab', ru: 'tab' } },
    { code: 'KeyQ', lang: { en: 'q', ru: 'й' } },
    { code: 'KeyW', lang: { en: 'w', ru: 'ц' } },
    { code: 'KeyE', lang: { en: 'e', ru: 'у' } },
    { code: 'KeyR', lang: { en: 'r', ru: 'к' } },
    { code: 'KeyT', lang: { en: 't', ru: 'е' } },
    { code: 'KeyY', lang: { en: 'y', ru: 'н' } },
    { code: 'KeyU', lang: { en: 'u', ru: 'г' } },
    { code: 'KeyI', lang: { en: 'i', ru: 'ш' } },
    { code: 'KeyO', lang: { en: 'o', ru: 'щ' } },
    { code: 'KeyP', lang: { en: 'p', ru: 'з' } },
    { code: 'BracketLeft', lang: { en: '[', ru: 'х' } },
    { code: 'BracketRight', lang: { en: ']', ru: 'ъ' } },
    { code: 'CapsLock', lang: { en: 'caps', ru: 'caps' } },
    { code: 'KeyA', lang: { en: 'a', ru: 'ф' } },
    { code: 'KeyS', lang: { en: 's', ru: 'ы' } },
    { code: 'KeyD', lang: { en: 'd', ru: 'в' } },
    { code: 'KeyF', lang: { en: 'f', ru: 'а' } },
    { code: 'KeyG', lang: { en: 'g', ru: 'п' } },
    { code: 'KeyH', lang: { en: 'h', ru: 'р' } },
    { code: 'KeyJ', lang: { en: 'j', ru: 'о' } },
    { code: 'KeyK', lang: { en: 'k', ru: 'л' } },
    { code: 'KeyL', lang: { en: 'l', ru: 'д' } },
    { code: 'Semicolon', lang: { en: ';', ru: 'ж' } },
    { code: 'Quote', lang: { en: "'", ru: 'э' } },
    { code: 'Enter', lang: { en: 'enter', ru: 'enter' } },
    { code: 'ShiftLeft', lang: { en: 'shift', ru: 'shift' } },
    { code: 'KeyZ', lang: { en: 'z', ru: 'я' } },
    { code: 'KeyX', lang: { en: 'x', ru: 'ч' } },
    { code: 'KeyC', lang: { en: 'c', ru: 'с' } },
    { code: 'KeyV', lang: { en: 'v', ru: 'м' } },
    { code: 'KeyB', lang: { en: 'b', ru: 'и' } },
    { code: 'KeyN', lang: { en: 'n', ru: 'т' } },
    { code: 'KeyM', lang: { en: 'm', ru: 'ь' } },
    { code: 'Comma', lang: { en: ',', ru: 'б' } },
    { code: 'Period', lang: { en: '.', ru: 'ю' } },
    { code: 'Slash', lang: { en: '/', ru: '/' } },
    { code: 'ArrowUp', lang: { en: '▲', ru: '▲' } },
    { code: 'ShiftRight', lang: { en: 'shift', ru: 'shift' } },
    { code: 'Fn', lang: { en: 'fn', ru: 'fn' } },
    { code: 'ControlLeft', lang: { en: 'ctrl', ru: 'сtrl' } },
    { code: 'AltLeft', lang: { en: 'opt', ru: 'opt' } },
    { code: 'MetaLeft', lang: { en: 'cmd', ru: 'cmd' } },
    { code: 'Space', lang: { en: 'space', ru: 'space' } },
    { code: 'MetaRight', lang: { en: 'cmd', ru: 'cmd' } },
    { code: 'ArrowLeft', lang: { en: '◄', ru: '◄' } },
    { code: 'ArrowDown', lang: { en: '▼', ru: '▼' } },
    { code: 'ArrowRight', lang: { en: '►', ru: '►' } },
    { code: 'AltRight', lang: { en: 'opt', ru: 'opt' } },
];
let lang = 'eng';
let capslock;

const KeyboardKeys = (arr) => {
        const createKeyName = (keyName) => {
            return `<div class="keyboard__key">${keyName}</div>`;
        };
        arr.forEach((el) => {
            const buttonKey = document.createElement('button');
            buttonKey.setAttribute('type', 'button');

            if (el.lang.en.length == 1 || el.lang.en == 'fn' || el.lang.en == 'ctrl' || el.lang.en == 'opt') {
                buttonKey.classList.add('keyboard__button');
                buttonKey.setAttribute('id', el.code);
                buttonKey.innerHTML = createKeyName(el.lang.en);
            } else {
                switch (el.lang.en) {
                    case '⌫ Back':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.setAttribute('id', el.code);
                        buttonKey.innerHTML = createKeyName('⌫ Back');
                        break;

                    case 'tab':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.setAttribute('id', el.code);
                        buttonKey.innerHTML = createKeyName('tab');
                        break;
                    case 'caps':
                        buttonKey.classList.add('keyboard__button-wide', 'keyboard__button-caps');
                        buttonKey.setAttribute('id', el.code);
                        buttonKey.innerHTML = createKeyName('caps');
                        break;
                    case 'enter':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.setAttribute('id', el.code);
                        buttonKey.innerHTML = createKeyName('enter');
                        break;
                    case 'shift':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.setAttribute('id', el.code);
                        buttonKey.innerHTML = createKeyName('shift');
                        break;
                    case 'cmd':
                        buttonKey.classList.add('keyboard__button-wide');
                        buttonKey.setAttribute('id', el.code);
                        buttonKey.innerHTML = createKeyName('cmd');
                        break;
                    case 'space':
                        buttonKey.classList.add('keyboard__button-super-wide');
                        buttonKey.setAttribute('id', el.code);
                        buttonKey.innerHTML = createKeyName('space');
                        break;
                }
            }
            keyboardContainer.appendChild(buttonKey);
        });
};
KeyboardKeys(arr);

const arrFromButtons = Array.from(document.querySelectorAll('button'));
const textarea = document.querySelector('textarea').focus();
const keys = Array.from(document.querySelectorAll('.keyboard__key'));
let flag = false;

function changeLanguage() {
    if (lang == 'eng') { 
        for (let i = 0; i < keys.length; i++) {
            keys[i].textContent = arr[i].lang.ru;
        }
        lang = 'ru';
        } 
    else if (lang == 'ru') {
        for (let i = 0; i < keys.length; i++) {
            keys[i].textContent = arr[i].lang.en;
        }
         lang = 'eng';
        }
    };

    function toUpperLower() {
            for (let el of keys) {
                if (el.textContent.length == 1)
                el.textContent = el.textContent.toUpperCase();
            }
            capslock = true;
        };
      
    function toLowerCase() {
        for (let el of keys) {
            if (el.textContent.length == 1)
            el.textContent = el.textContent.toLowerCase();
        }
        capslock = false;
    };

document.addEventListener('keydown', (e) => { 
    for (let elem of arrFromButtons) {
        if (elem.id == e.code)  elem.classList.add('active');
        if ('CapsLock' == e.code) { 
          arrFromButtons[27].classList.add('keyboard__button-caps-active');
          toUpperLower(keys);
        };
        if (e.code == 'ShiftLeft') flag = true; { 
            if (e.code == 'AltLeft' && flag) {flag = false; changeLanguage(); }
        }
        
    }}
);

document.addEventListener('keyup', (e) => { 
    for (let elem of arrFromButtons) {
        if (elem.id == e.code)  elem.classList.remove('active');
        if ('CapsLock' == e.code) {
            arrFromButtons[27].classList.remove('keyboard__button-caps-active');
            toLowerCase(keys);
        }
    }
});



