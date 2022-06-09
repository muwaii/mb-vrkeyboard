console.log("tets");
const keysEle = document.querySelectorAll('.keys');
const codesEle = document.querySelectorAll('.codes');


// console.log("asdf", codesEle[1].getAttribute('tempclass'));

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


    /* อันนี้ run ได้นะ เอาไว้ดูเป็นตัวอย่าง 
    console.log(codesEle);
    console.log(codesEle[0]);
    console.log(codesEle[15]);
    console.log(codesEle[15].getAttribute('tempclass'));
    */

        
    for(let i=0; i<codesEle.length; i++) {
        if((codesEle[i].getAttribute('tempclass')) === event.code) {
            codesEle[i].style.backgroundColor = "#808080";
            setTimeout(() => {
                codesEle[i].style.backgroundColor = "#FFFFFF";
            }, 100);
        }
    }


});


/*
got key and code
if key = class value
    query that class element
    add some style
else 
*/
