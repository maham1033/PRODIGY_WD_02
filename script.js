// Initialization
var hour=0;
var minute=0;
var second=0;
var millisecond=0;
var tick;

var display=document.querySelector('.display');
var laps=document.querySelector('.laps');

var restartButton = document.getElementById("restartBtn");
var resetButton = document.getElementById("resetBtn");


// START FUNCTION
function start() {
    if (!tick) {
        tick=setInterval(execute,10)        
    }
    
}
function execute() {
    display.innerHTML=get_tick()
    millisecond++
    if (millisecond==100) {
        millisecond=0;
        second++;
        
    }
    if (second==60) {
        second=0;
        minute++;
        
    }
    if (minute==60) {
        minute=0;
        hour++
        
    }
    
    if (hour==13) {
        hour=1;
        
    }
}
function get_tick() {
    return (hour<10?"0"+hour:hour) + ":"+ (minute<10 ? "0" + minute:minute) + ":" + (second <10 ? "0"+ second:second) + ":" + (millisecond <10 ? "0"+millisecond:millisecond);
    
}


// PUASE FUNCTION
function stop() {
    clearInterval(tick);    
    tick=false;
    
}


// RESET FUNCTION
function reset() {
    clearInterval(tick);    
    tick=false;
    hour=0;
    millisecond=0;
    second=0;
    minute=0;
    display.innerHTML=get_tick();

    
}

// RESTART FUNCTION
function restart() {
    if(tick){
        reset();
        start();
    }
    
}




// LAP FUNCTION
function lap() {
    if(tick){
        var  line=document.createElement("li");
        line.innerHTML=get_tick();
        laps.appendChild(line);
    }
    
}

// RESET FUNCTION
function reset_lap() {
    laps.innerHTML="";
    
}