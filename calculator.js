//To view content in the result(textbox) whenever a button clicked
function DisplayNum(num){
    result.value+=num
}

function Allclear(){
    result.value=""
}

function evalExp(){
    result.value=eval(result.value)
}
function Lastdigit(){
    result.value=result.value.slice(0,-1)
}