const buttonsEl = document.querySelectorAll("button");
const inputResultEl = document.getElementById("result");
// console.log(buttonsEl);
for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValu = buttonsEl[i].textContent;
        if(buttonValu === "C"){
            clearResult()
        }else if(buttonValu === "="){
            calculateResult()
        }else{
            appendValue(buttonValu);
        }
    });
}


function clearResult(){
    inputResultEl.value = "";

}

function calculateResult(){
    inputResultEl.value = eval(inputResultEl.value)

}

function appendValue(buttonValu){
    inputResultEl.value += buttonValu;
}
