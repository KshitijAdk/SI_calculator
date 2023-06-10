function compute()
{
    var p = parseInt(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var y = parseInt(document.getElementById("years").value);
    if (p <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    else {
        var i = (p * y * r) / 100;
        var a = p + i;
        var result = document.getElementById("result");
        var actualYear = 2023+y;
        result.innerHTML = "If you deposit $ <mark>" + p + ",</mark><br> at an interest rate of <mark>" + r + "% </mark>,<br> you will receive an amount of $ <mark>" + a + ",</mark><br> in the year <mark>" + actualYear + "</mark>";

    }
}
        
function updateRate()
{
    rateval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;   
}