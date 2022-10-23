window.onload = function() {
    let segundos = 00;
    let tens = 00;
    let appenTens = document.getElementById("tens")
    let appenSegundos = document.getElementById("segundos")
    let start = document.getElementById("start")
    let stop = document.getElementById("stop")
    let reset = document.getElementById('reset')
    let interval ;

    start.onclick = function (){
        clearInterval(interval);
        interval = setInterval(startTimer,10);
    }
    stop.onclick = function (){
        clearInterval(interval);
    }
    reset.onclick = function(){
         clearInterval(interval);
         tens = "00"
         segundos = "00";
         appenTens.innerHTML = tens;
         appenSegundos.innerHTML = segundos;
    }
    function startTimer (){
        tens++;
        if(tens <= 9){
            appenTens.innerHTML= "0"+ tens;

        }
        if (tens >9){
            appenTens.innerHTML= tens;

        }
        if (tens > 99){
            console.log("segundos");
            segundos++;
            appenSegundos.innerHTML = "0"+ segundos;
            tens = 0;
            appenTens.innerHTML = "0"+ 0;

        }
        if (segundos > 9){
            appenSegundos.innerHTML = segundos;
        }
    }
}