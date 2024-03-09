//Add background
document.body.style.backgroundColor = "#ADD8E6";
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
    }
    catch(e)
    {
        document.getElementById("errmsg").innerHTML = "ERROR!!" + e;
        document.getElementById("txtinput").innerHTML = "";
    }
    finally
    {
    document.getElementById("txtout").innerHTML = "Calculation Complete"
    }
}


function clearBox()
{
    document.getElementById("txtinput").innerHTML = "";
    document.getElementById("txtout").innerHTML = "";
    document.getElementById("errmsg").innerHTML = "";
    return;
}



