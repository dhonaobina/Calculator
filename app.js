//Add background
document.body.style.backgroundColor = "#ADD8E6";
//Declare variables using the var keyword
var val1=0.0;
var val2=0.0;
var resultval=0.0;
const piValue=3.14;
document.getElementById("pi").value = piValue;
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
    val2 = parseFloat(document.getElementById("txtinput").innerHTML);
    debugger;
    try
    {
        if (op == "*")
        {
            document.getElementById("txtinput").innerHTML = val1 * val2;
        }
        else if (op == "+")
        {
            document.getElementById("txtinput").innerHTML = val1 + val2;
        }
        else if (op == "-")
        {
            document.getElementById("txtinput").innerHTML = val1 - val2;
        }
        else if (op == "/")
        {
            if (val2 == 0)
            {
                throw("Divide by zero error. You cannot divide any number by zero.");
            }
            else
            {
                document.getElementById("txtinput").innerHTML = val1 / val2;
            }
        }
        else if (op == "%")
        {
            document.getElementById("txtinput").innerHTML = val1 % val2;
        }
        else if (op == "^")
        {
            document.getElementById("txtinput").innerHTML = Math.pow(val1, val2);
        }
        else if (op == "min")
        {
            document.getElementById("txtinput").innerHTML = Math.min(val1, val2);
        }
        else if (op == "max")
        {
            document.getElementById("txtinput").innerHTML = Math.max(val1, val2);
        }
    }
    catch(e)
    {
        document.getElementById("errmsg").innerHTML = "ERROR!!" + e;
        document.getElementById("txtinput").innerHTML = "";
    }
    finally
    {
    document.getElementById("txtout").innerHTML = "Calculation Complete!"
    }
    return;
}
function spFunc(id)
{
    val1 = parseFloat(document.getElementById("txtinput").innerHTML);
    if (id == "rnd")
    {
        document.getElementById("txtinput").innerHTML = Math.round(val1);
    }
    else if (id == "flr")
    {
        document.getElementById("txtinput").innerHTML = Math.floor(val1);
    }
    else if (id == "cel")
    {
        document.getElementById("txtinput").innerHTML = Math.ceil(val1);
    }
    else if (id == "sqrt")
    { 
        document.getElementById("txtinput").innerHTML = Math.sqrt(val1);
    }
    document.getElementById("txtout").innerHTML = "Calculation complete!"
}
function rndNum() 
{
    document.getElementById("txtinput").innerHTML = Math.random();
}
function clearBox()
{
    document.getElementById("txtinput").innerHTML = "";
    document.getElementById("txtout").innerHTML = "";
    document.getElementById("errmsg").innerHTML = "";
    return;
}



