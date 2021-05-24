function number(num){
    var result= document.getElementById('result');
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}
function getresult(){
    var result=document.getElementById('result');
    result.value=eval(result.value);
}

function backspace(){
    var prevalue=calculator.result.value;
    calculator.result.value=prevalue.substr(0,prevalue.length-1);
}

function sin(){
    var result=document.getElementById('result');
    result.value=Math.sin(result.value);
}

function cos(){
    var result=document.getElementById('result');
    result.value=Math.cos(result.value);
}

function tan(){
    var result=document.getElementById('result');
    result.value=Math.tan(result.value);
}
function square(){
    var result=document.getElementById('result');
    result.value=Math.pow(result.value,2);
}
function cube(){
    var result=document.getElementById('result');
    result.value=Math.pow(result.value,3);
}
function squrt(){
    var result=document.getElementById('result');
    result.value=Math.sqrt(result.value);
}
function cubrt(){
    var result=document.getElementById('result');
    result.value=Math.cbrt(result.value);
}