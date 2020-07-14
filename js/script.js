window.onload=function()
{
    let minutes=00;
    let seconds=00;
    let tens=00;
    let appendMinutes=document.getElementById("minutes");
    let appendTens=document.getElementById("tens");
    let appendSeconds=document.getElementById("seconds");
    let buttonStart=document.getElementById("button-start");
    let buttonStop=document.getElementById("button-stop");
    let buttonReset=document.getElementById("button-reset");
    let interval;
    buttonStart.onclick=function()
        {
         clearInterval(interval);
         interval=setInterval(startTimer,10);   
        }
    function decToHex(n)
        { return "#"+Number(n).toString(16); }
 
    buttonReset.onclick=function()
        {
            clearInterval(interval);
            appendTens.style.color="#00000";
            appendSeconds.style.color="#00000";
            tens="00";
            seconds="00";
            appendSeconds.innerHTML=seconds;
            appendTens.innerHTML=tens
        }
    buttonStop.onclick = function()
        {
            clearInterval(interval);
        }
    function startTimer()
        {
            tens++;
            appendTens.style.color=decToHex(10000+tens);
            appendSeconds.style.color=decToHex(10000+seconds);
            if (tens<9)
                {
                    appendTens.innerHTML="0"+tens;
                    
                }
            else
                {
                    appendTens.innerHTML=tens;
                }
            if (tens>99)
                {seconds++;
                appendSeconds.innerHTML="0"+seconds;
                tens=0;
                appendTens.innerHTML="0"+0;
                }
            if (seconds>9)
                {
                    appendSeconds.innerHTML=seconds;
                }
            if (seconds>60)
                {minutes++;
                appendMinutes.innerHTML="0"+minutes;
                seconds=0;
                appendSeconds.innerHTML="0"+0;
                }
            if (minutes>9)
                {
                    appendMinutes.innerHTML=+minutes;
                }
        
        }
}