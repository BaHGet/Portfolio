function click()
{
    alert("You are now directed")
}




function ans()
{
    let ans = document.querySelector('.answer').value;

    if (ans== '')
    {
        document.querySelector('#feedback2').innerHTML = "The feedback section can't be emty";
        return false;
    }
    else
    {
        document.querySelector('#feedback2').innerHTML = 'Thanks!';
        return true;
    }
}

