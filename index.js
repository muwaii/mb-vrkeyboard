const keysEle = document.querySelectorAll('.keys');
const codesEle = document.querySelectorAll('.codes');

window.addEventListener("keydown", (event) => {
    for(let i=0; i<keysEle.length; i++) {
        if(((keysEle[i].innerText) === event.key) 
            || ((keysEle[i].innerText.toLowerCase()) === event.key)) {
            keysEle[i].style.backgroundColor = "#808080";
            setTimeout(() => {
               keysEle[i].style.backgroundColor = "#FFFFFF";
            }, 200);
        }
    }
    for(let i=0; i<codesEle.length; i++) {
        if((codesEle[i].getAttribute('tempclass')) === event.code) {
            codesEle[i].style.backgroundColor = "#808080";
            setTimeout(() => {
                codesEle[i].style.backgroundColor = "#FFFFFF";
            }, 200);
        }
    }
});

