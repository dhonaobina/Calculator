var color = "#ffff80";

function setColor(id)
{
    var element = document.getElementById(id);
    element.style.backgroundColor = color;
}

function removeColor(id)
{
    var color1 = " ";
    var element = document.getElementById(id);
    element.style.backgroundColor = color1;
}

function displayValue(inputid)
{
    var element = document.getElementById(inputid);
    document.getElementById("txtinput").innerHTML = document.getElementById("txtinput").innerHTML + '' + element.value;
}