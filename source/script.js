document.getElementById("reset-btn").onclick = function() 
{
    hamamukText();
}

document.getElementById("konv-btn").onclick = function()
{
    const input_text = document.getElementById("input-text").value;

    if(input_text >= 8.5 && input_text <= 10)
    {
        document.getElementById("output-text").value = "A";
    }
    else if(input_text >= 7 && input_text <= 8.4)
    {
        document.getElementById("output-text").value = "B";
    }
    else if(input_text >= 5.5 && input_text <= 6.9)
    {
        document.getElementById("output-text").value = "C";
    }
    else if(input_text >= 4 && input_text <= 5.4)
    {
        document.getElementById("output-text").value = "D";
    }
    else if(input_text >= 0 && input_text <= 3.9)
    {
        document.getElementById("output-text").value = "E";
    }
    else
    {
        window.alert("Valor Invalidu");
        hamamukText();
    }
}

function hamamukText()
{
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";
}

