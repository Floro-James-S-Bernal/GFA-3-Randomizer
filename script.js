window.onload = function() {
    Test();
    function Test(){
        var num1 = Math.floor(Math.random()*21)
        var num2 = Math.floor(Math.random()*21)
        var num3 = Math.floor(Math.random()*21)

        document.getElementById("winum").innerHTML = "The winning number for the raffle is " + num1 + num2 + num3;
        
        if(num1 >= num2 & num1 >= num3){
            document.getElementById("parti").innerHTML = num1 + " people participated in the raffle."
        }
        if(num2 > num1 & num2 >= num3){
            document.getElementById("parti").innerHTML = num2 + " people participated in the raffle."
        }
        if(num3 > num1 & num3 >= num2){
            document.getElementById("parti").innerHTML = num3 + " people participated in the raffle."
        }

        if(num1 == 0){
            var abc = "A."
        }
        if(num1 == 1){
            var abc = "B."
        }
        if(num1 == 2){
            var abc = "C."
        }
        if(num1 == 3){
            var abc = "D."
        }
        if(num1 == 4){
            var abc = "E."
        }
        if(num1 == 5){
            var abc = "F."
        }
        if(num1 == 6){
            var abc = "G."
        }if(num1 == 7){
            var abc = "H."
        }if(num1 == 8){
            var abc = "I."
        }if(num1 == 9){
            var abc = "J."
        }if(num1 == 10){
            var abc = "K."
        }if(num1 == 11){
            var abc = "L."
        }if(num1 == 12){
            var abc = "M."
        }if(num1 == 13){
            var abc = "N."
        }if(num1 == 14){
            var abc = "O."
        }if(num1 == 15){
            var abc = "P."
        }if(num1 == 16){
            var abc = "Q."
        }if(num1 == 17){
            var abc = "R."
        }if(num1 == 18){
            var abc = "S."
        }if(num1 == 19){
            var abc = "T."
        }if(num1 == 20){
            var abc = "U."
        }
        document.getElementById("alpha").innerHTML = "The winner’s middle initial is " + abc

        var Time = num2*num3
        if(Time == 0){
            document.getElementById("timer").innerHTML = "It took (" + Time + " minutes) " + Math.trunc(Time/60) + " hours and " + Time%60 + " minutes for the winning ticket to be taken. Cheaters!"
        }else{
        document.getElementById("timer").innerHTML = "It took (" + Time + " minutes) " + Math.trunc(Time/60) + " hours and " + Time%60 + " minutes for the winning ticket to be taken."
        }
    }
}