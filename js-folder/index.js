
let theDateTime = new Date("Nov 2, 2023 00:00:00").getTime();

    setInterval(function (){
        let todayDate = new Date().getTime();
        
        let actualTime = theDateTime - todayDate;

        var days = Math.floor(actualTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((actualTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((actualTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((actualTime % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days +" :";
        document.getElementById("hour").innerHTML = hours  +" :";
        document.getElementById("minute").innerHTML = minutes  +" :";
        document.getElementById("second").innerHTML = seconds;

    }, 1000);



// setInterval(() => {
    
// }, 1000);