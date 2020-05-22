let rovermars = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

function turnLeft(rover) {
  console.log('turnLeft was called!');
  
  switch(rovermars.direction) {
    case "N": rovermars.direction = "W";
      break;
    case "W": rovermars.direction = "S";
      break;
    case "S": rovermars.direction = "E";
      break;
    case "W": rovermars.direction = "N";
      break;
    default: "N";
    
  }
}
 
function turnRight(rover) {
  console.log('turnRight was called!');
  
  switch(rovermars.direction) {
    case "N": rovermars.direction = "E";
      break;
    case "E": rovermars.direction = "S";
      break;
    case "S": rovermars.direction = "W";
      break;
    case "W": rovermars.direction = "N";
    default: "N";
  }  
}
 
function moveForward(rover) {
  console.log('moveForward was called');
  if (rovermars.x >=0 && rovermars.y <9) { 
 switch(rovermars.direction) {
     
  case "N":
    rovermars.y--;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position: x=${rovermars.x}, y=${rovermars.y}`);
     break;
     
  case "E":
    rovermars.x++;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position: x=${rovermars.x}, y=${rovermars.y}`);
    break;
    
  case "S":
    rovermars.y++;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position: x=${rovermars.x}, y=${rovermars.y}`);
    break;
    
  case "W":
    rovermars.x++;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(rovermars.direction);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position:   x=${rovermars.x}, y=${rovermars.y}`);
    break;    
     }
   }
  else {
      console.log("Nooooooo Rover stop there!!!! keep your robotic hands where I can see them ")  
    }
}

function moveBackward(rover) {
  console.log('moveForward was called');
  if (rovermars.x >=0 && rovermars.y <9) { 
 switch(rovermars.direction) {
     
  case "N":
    rovermars.y++;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position: x=${rovermars.x}, y=${rovermars.y}`);
     break;
     
  case "E":
    rovermars.x--;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position: x=${rovermars.x}, y=${rovermars.y}`);
    break;
    
  case "S":
    rovermars.y--;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position: x=${rovermars.x}, y=${rovermars.y}`);
    break;
    
  case "W":
    rovermars.x--;
    rovermars.travelLog.push(rovermars.x,rovermars.y);
    console.log(rovermars.direction);
    console.log(`Rover's Direction: ${rovermars.direction}; Rover's Position:   x=${rovermars.x}, y=${rovermars.y}`);
    break;    
     }
   }
  else {
      console.log("Nooooooo Rover stop there!!!! keep your robotic hands where I can see them ")  
    }
}


function commands(orders) {
  console.log(rovermars.direction);
  
  for(var i=0; i<orders.length; i++) {
    var order = orders[i];
    switch (order) {
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
      case "f":
        moveForward();
        break;
      case "b":
        moveBackward()
    }
  }
  console.log(rovermars.travelLog);
}

commands("rffrfflfrffb")