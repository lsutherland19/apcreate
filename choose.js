//can i change the "this page says" with the prompts/alerts? maybe change it to fit the theme,,,

function startButton () {
  let occupation = prompt("Are you: MISSION CONTROL or an ASTRONAUT?")
    switch(occupation) {
    case "MISSION CONTROL":
    text = alert("Your participation will be vital on the ground.");
    break;
    case "ASTRONAUT":
    text = alert("Prepare yourself. This mission will be daunting.");
    break;
    default:
    text = alert("Invalid input. Please try again.");
    break;
    }

//create the prompts that won't disappear until given valid input, add layered if statements
//sketch first, then you've got this!
//could i possibly use switch statements instead; look up multiple switch statements
  if (occupation == "MISSION CONTROL") {
    let missfateone = prompt("The space shuttle will leave for Mars in 30 minutes. Will you CHECK THE SHUTTLE or WATCH TAKEOFF from the gallery?");
    if (missfateone == "CHECK THE SHUTTLE") {
      let missionend = prompt("You find an issue with the shuttle, but it seems fairly minor. If you report the issue, the shuttle will be delayed. Will you REPORT the issue or IGNORE it?");
      if (missionend == "REPORT") {
        let fate = alert("Your mission was a success! Thanks to your quick thinking, the shuttle was patched. The team was sent into orbit and made it to Mars. Congrats!");
      }
    }
  } else if (occupation == "ASTRONAUT") {
    let astrofateone = prompt("The space shuttle will take off in 30 minutes. Will you CHECK SUIT before takeoff or get a MISSION CONTROL UPDATE?");
    if (astrofateone == "CHECK SUIT") {
      let suitissue = alert("Good news! You found a hole in your spacesuit, so you changed into a backup. You became the first person to walk on Mars! Congrats!");
    }
  }

}

function timeGenerator () {
  let lengthOfTrip = Math.floor(Math.random() * 20);
  //check the syntax, can i change it from 2-20? add two if statements to erase 0 and 1
  let result = alert("The trip to Mars will be completed in " + lengthOfTrip + " months.");
  if (lengthOfTrip = 1) {
    let result = alert("The trip to Mars will be completed in " + lengthOfTrip + " month.");
  }

    //either i can create this parameter or i can just exclude 0,,,
  if (lengthOfTrip = 0) {

  }
}

//find some way to include another abstraction, the one i have probably won't fly with the college board
