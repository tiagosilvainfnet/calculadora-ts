"use strict";
const currentValue = document.querySelector('#currentValue');
const answerScreen = document.querySelector('#answerScreen');
const buttons = document.querySelectorAll('button');
const eraseBtn = document.querySelector('#eraseBtn');
const clearBtn = document.querySelector('#clearBtn');
const evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = [];
buttons === null || buttons === void 0 ? void 0 : buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let id = button.id;
        if (id === 'clearBtn') {
            realTimeScreenValue = [];
            currentValue.innerText = "0";
            answerScreen.innerText = "0";
        }
        else if (id !== 'eraseBtn' && id !== 'evaluate' && id !== 'clearBtn') {
            realTimeScreenValue.push(button.value);
            currentValue.innerHTML = realTimeScreenValue.join("");
            if (button.classList.contains('num_btn')) {
                try {
                    answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
                }
                catch (err) { }
            }
        }
        else if (id === 'eraseBtn') {
            realTimeScreenValue.pop();
            if (realTimeScreenValue.length > 0) {
                currentValue.innerHTML = realTimeScreenValue.join("");
                try {
                    answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
                }
                catch (err) { }
            }
            else {
                currentValue.innerHTML = "0";
                answerScreen.innerHTML = "0";
            }
        }
        else if (id === 'evaluate') {
            try {
                currentValue.innerHTML = eval(realTimeScreenValue.join(""));
            }
            catch (err) { }
            answerScreen.innerHTML = "0";
        }
    });
});
