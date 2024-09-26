function calculateLove()
{
    let name1 = document.getElementById('name1').value;
    let name2 =document.getElementById('name2').value;
    if (name1!="" && name2!="")
    {
        let percentage=Math.random()*100;
    let lovePercentage=Math.floor(percentage);
    document.getElementById("lovepercent").textContent=`${lovePercentage}%!`;
}
else{
    document.getElementById("lovepercent").textContent="please enter both names"
}
}