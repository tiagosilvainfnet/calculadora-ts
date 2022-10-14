const currentValue: HTMLElement = document.querySelector('#currentValue') as HTMLElement;
const answerScreen: HTMLElement = document.querySelector('#answerScreen') as HTMLElement;
const buttons = document.querySelectorAll('button');
const eraseBtn: HTMLElement = document.querySelector('#eraseBtn') as HTMLElement;
const clearBtn: HTMLElement = document.querySelector('#clearBtn') as HTMLElement;
const evaluate: HTMLElement = document.querySelector('#evaluate') as HTMLElement;

let realTimeScreenValue: any = [];

buttons?.forEach((button) => {
    button.addEventListener('click', () => {
        let id = button.id;
        if(id === 'clearBtn'){
            realTimeScreenValue = [];
            currentValue.innerText = "0";
            answerScreen.innerText = "0";
        }else if(id !== 'eraseBtn' && id !== 'evaluate' && id !== 'clearBtn'){
           realTimeScreenValue.push(button.value);
           currentValue.innerHTML = realTimeScreenValue.join("")
           if(button.classList.contains('num_btn')){
                try{
                    answerScreen.innerHTML = eval(realTimeScreenValue.join(""))
                }catch(err){}
           }
        }else if(id === 'eraseBtn'){
            realTimeScreenValue.pop();

            if(realTimeScreenValue.length > 0){
                currentValue.innerHTML = realTimeScreenValue.join("");
                try{
                    answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
                }catch(err){}
            }else{
                currentValue.innerHTML = "0";
                answerScreen.innerHTML = "0";
            }
        }else if(id === 'evaluate'){
            try{
                currentValue.innerHTML = eval(realTimeScreenValue.join(""));
            }catch(err){ }
            answerScreen.innerHTML = "0";
        }
    })
})
