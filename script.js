function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;   
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    if(principal == undefined || principal <= 0)
    {   alert("Enter a Positive Number");
        document.getElementById("principal").focus();
        return
    }
    else
    {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }

}
function SliderChange()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rateSpan").innerText=rateval;
}       