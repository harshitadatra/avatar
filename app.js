var btnTranslate=document.querySelector("#button-id");
var txtInput =document.querySelector("#txt-input");
console.log(btnTranslate);
console.log(txtInput);
function clickHandler()
{
    console.log('button clicked');
    console.log(txtInput.value);
}
btnTranslate.addEventListener("click",clickHandler);