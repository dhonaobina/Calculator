//Declare variables using the var keyword
var val1;
var val2;
var resultval;
var op;
var color = "#ffff80";

function setColor(id)
{
    var element = document.getElementById(id);
    element.style.backgroundColor = color;
}

function removeColor(id)
{
    var color1 = ""
    var element = document.getElementById(id);
    element.style.backgroundColor = color1;
}

function displayValue(inputid)
{
    var element = document.getElementById(inputid);
    document.getElementById("txtinput").innerHTML = document.getElementById("txtinput").innerHTML + '' + element.value;
}

function displayInput(operation) 
{
    val1 = parseInt(document.getElementById("txtinput").innerHTML);
    op = operation;
    document.getElementById("txtinput").innerHTML = op;
    document.getElementById("txtinput").innerHTML = "";
}
/*The Calculate() function will perform the mathematical operations such as addition, subtraction, multiplication, division, and modulus.*/
function Calculate()
{
    val2 = parseInt(document.getElementById("txtinput").innerHTML);
    document.getElementById("txtinput").innerHTML = "";
    debugger;
    if (op == "*")
    {
        resultval = val1 * val2;
    }
    if (op == "+")
    {
        resultval = val1 + val2;
    }
    if (op == "-")
    {
        resultval = val1 - val2;
    }
    if (op == "/")
    {
        resultval = val1 / val2;
    }
    if (op == "%")
    {
        resultval = val1 % val2;
    }
    document.getElementById("txtinput").innerHTML = "";
    document.getElementById("txtinput").innerHTML = resultval.toString();
    document.getElementById("txtinput").innerHTML = val1 + op + val2 + " = " + resultval.toString();
    return;
}


function clearBox()
{
    document.getElementById("txtinput").innerHTML = "";
    return;
}



