var hr=0;
var min=0;
var sec=0;
var count=0;
var timer = false;
function start()
{
    timer=true;
    stopWatch();
}
function stop()
{
     timer = false;
}
function reset()
{
     timer = false;
     hr=0;
     min=0;
     sec=0;
     count=0;
     document.getElementById("hr").innerHTML = "00";
     document.getElementById("min").innerHTML = "00";
     document.getElementById("sec").innerHTML = "00";
     document.getElementById("count").innerHTML = "00";
}
function stopWatch()
{
    if(timer ==true){
        count = count+1;
        document.getElementById("count").innerHTML = count;
        
        if(count == 100){
            count=0;
            sec=sec+1;
          
            if(sec === 60){
                sec=0;
                min=min+1;
              
            }
            if(min==60){
                min=0;
                hr=hr+1;
            }

            var hrString = hr;
            var minString = min;
            var secString = sec;
            var countString = count;

            if(hr<10){
                hrString = "0" + hr;
            }

            if(min<10){
                minString = "0" + min;
            }

            if(sec<10){
                secString = "0" + sec;
            }
            if(count<10){
                countString = "0" + count;
            }

            document.getElementById("hr").innerHTML = hrString;
            document.getElementById("min").innerHTML = minString;
            document.getElementById("sec").innerHTML = secString;
        }
        setTimeout("stopWatch()",10);
    }
}