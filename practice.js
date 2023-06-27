var treasure = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
var counter = 0

const treasureFunc = (location) => {
   
    if (location === treasure){
        document.getElementById(location).innerHTML = "🏴‍☠️"
        alert("You win!");
       
        
    } else {
        document.getElementById(location).innerHTML = "💣" 
        counter = counter + 1 
        document.getElementById("clickCount").innerHTML = `Click Count: ${counter}`;
    }

}
