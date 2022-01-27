
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

const numClosedDoors = 3;

// img URL's
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';



//function for randomizing the choreBot
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
};


// onclick functions
doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
};

doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
};

doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
};