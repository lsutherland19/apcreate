function startButton () {
  let occupation = prompt("Are you: MISSION CONTROL or an ASTRONAUT?")
    switch(occupation) {
    case "MISSION CONTROL":
    text = alert("Your participation will be vital on the ground.");
    break;
    case "ASTRONAUT":
    text = alert("Prepare yourself. This mission will be challenging.");
    break;
    default:
    text = alert("Invalid input. Please try again.");
    break;
    }

  if (occupation == "MISSION CONTROL") {
    let missionCheck = prompt("The spaceship will leave for Mars in 30 minutes. Will you CHECK THE SHIP for issues or CHECK THE COMMUNICATION SYSTEMS?");
    if (missionCheck == "CHECK THE SHIP") {
      let missionShieldIssue = prompt("You find an issue with the heat shield, but it seems fairly minor. If you report the issue, the mission will be delayed. This delay will be expensive. Will you REPORT the issue or IGNORE it?");
      if (missionShieldIssue == "REPORT") {
        let missionShieldReport = alert("Your mission was a success! Thanks to your quick thinking, the heat shield was repaired. The team was sent into orbit and made it to Mars. Congrats!");
      } else if (missionShieldIssue == "IGNORE") {
        let missionShieldIgnore = alert("The spaceship traveled all the way to Mars. Upon atmospheric entry of the red planet, the heat shield failed. Unfortunately, the mission was doomed from the beginning. Investigation into the cause of the malfunction has now commenced. Please try again.");
        }
  } else if (missionCheck == "CHECK THE COMMUNICATION SYSTEMS") {
      let missionCommIssue = prompt("Communications between Mission Control and Daedalus are down. The communications sector is your specialty; therefore, you will be held accountable for both the malfunction and the subsequent delay. Will you FRAME your rival coworker or ACCEPT the consequences and fix the problem?");
      if (missionCommIssue == "FRAME") {
        let missionCommFrame = alert("All the members of the communications team are interviewed by HR. The truth is revealed; you are promptly fired. The spaceship will reach Mars, but you will not be a part of the journey. Mission Control is first and foremost a team.");
      } else if (missionCommIssue == "ACCEPT") {
        let missionCommAccept = alert("You step up and take responsibility for the error. Your boss scolds you but allows you to fix your mistake. Takeoff is delayed by 3 days as your team works tirelessly. The spaceship reaches Mars with few complications. Your supervisors are impressed by your intiative and offer you a promotion. Congratulations!");
      }
    }
  } else if (occupation == "ASTRONAUT") {
      let astroCheckOrUpdate = prompt("The spaceship will take off in 30 minutes. You should probably put on your spacesuit with time to spare, but you also want to say goodbye to your friends in the Mission Control Center. Will you CHECK SUIT before takeoff or get a MISSION CONTROL UPDATE?");
      if (astroCheckOrUpdate == "CHECK SUIT") {
        let astroSuitIssue = prompt("The primary life support subsystem has malfunctioned. The suit's oxygen filters are only functioning at 70% of capacity. All of the engineers are scrambling to meet the impending deadline, and you have dual degrees in material and electrical engineering. Do you REPORT the issue to a spacesuit engineer or FIX it yourself?");
        if (astroSuitIssue == "REPORT") {
          let astroSuitReport = alert("You inform a spacesuit engineer of your findings. She hurries to fix your suit, and the launch is only delayed by 3 hours while she installs a new filter. You become the first human to set foot on Mars. Congratulations, explorer.");
        } else if (astroSuitIssue == "FIX") {
          let astroSuitFail = alert("Bold of you to assume you have the expertise of a spacesuit engineer. Your suit's oxygen scrubbers fail during the long journey. Unsurprisingly, carbon dioxide poisoning puts a damper on the festivities.");
        }
      } else if (astroCheckOrUpdate == "MISSION CONTROL UPDATE") {
        let astroVisit = prompt("You arrive at the Mission Control Center to say goodbye to some old friends. The flight director tells you that you must switch off some of the ship's radars before landing to avoid overloading the ship's computers. Doing so will decrease visibility, making it harder to land. Do you SWITCH OFF the radars or KEEP RADARS ON?");
        if (astroVisit == "SWITCH OFF") {
          let astroLand = alert ("You follow the instructions of the flight director and switch off the radars. The blind landing involves a lot of turbulence, but all the members of your crew make it to the surface of Mars safely. You have made history, stargazer.");
        } else if (astroVisit == "KEEP RADARS ON") {
          let astroAbortMission = alert("You don't think that a blind landing is possible in unfamiliar territory. You keep the radars on, but the computers overload. Mission control aborts the mission mere minutes before landing. So close, yet so far. Better luck next time.");
        }
      }
  }
}

function timeGenerator () {
  let lengthOfTrip = Math.floor((Math.random() * ((50 - 30) + 1)) + 30);
  let result = alert("The trip to Mars will be completed in " + lengthOfTrip + " days.");
}
