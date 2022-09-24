// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Walter",
    lastName: "White",
    color: "green",
    description: "famous scientist",
    age: 59,
    occupation: "scientist",
    image:
      "https://www.pngmart.com/files/15/Walter-White-Download-PNG-Image.png",
  },

  {
    firstName: "Jesse",
    lastName: "Pinkman",
    color: "blue",
    description: "he has a motorhome",
    age: 26,
    occupation: "student",
    image:
      "https://cdn.sabado.pt/images/2012-07/img_640x426$2012_07_20_19_36_04_31422.jpg",
  },

  {
    firstName: "Charlie",
    lastName: "Harper",
    color: "red",
    description: "milionarie jingle producer",
    age: 50,
    occupation: "music producer",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTA5OTAxMV5BMl5BanBnXkFtZTgwODczMjg3MjE@._V1_UY1200_CR485,0,630,1200_AL_.jpg",
  },

  {
    firstName: "Homer",
    lastName: "Simpson",
    color: "brown",
    description: "he works in a factory",
    age: 44,
    occupation: "factory worker",
    image: "https://wallpaperaccess.com/full/1567145.png",
  },

  {
    firstName: "Tony",
    lastName: "Stark",
    color: "blue",
    description: "genius, billionarie, playboy and philanthropist",
    age: 42,
    occupation: "engenieer",
    image: "https://sm.ign.com/ign_br/screenshot/default/tony_c455.jpg",
  },

  {
    firstName: "John",
    lastName: "Wick",
    color: "orange",
    description: "he was military",
    age: 40,
    occupation: "retired",
    image:
      "https://www.papodecinema.com.br/wp-content/uploads/2018/05/20180522-john-wick-papo-de-cinema.jpeg",
  },
];
// Rooms Array

const roomsArray = [
  {
    name: "kitchen",
  },

  {
    name: "bedroom",
  },

  {
    name: "lounge",
  },

  {
    name: "dining room",
  },

  {
    name: "hall",
  },

  {
    name: "spa",
  },

  {
    name: "living room",
  },

  {
    name: "office",
  },

  {
    name: "basement",
  },

  {
    name: "garage",
  },

  {
    name: "deck",
  },

  {
    name: "backyard",
  },

  {
    name: "garden",
  },

  {
    name: "guest room",
  },

  {
    name: "bathroom",
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "knife",
    weight: 10,
  },

  {
    name: "pistol",
    weight: 18,
  },

  {
    name: "stick",
    weight: 8,
  },

  {
    name: "poison",
    weight: 2,
  },

  {
    name: "axe",
    weight: 12,
  },

  {
    name: "rope",
    weight: 6,
  },

  {
    name: "pillow",
    weight: 4,
  },

  {
    name: "kunai",
    weight: 12,
  },

  {
    name: "sniper",
    weight: 20,
  },
];

// ITERATION 2

function selectRandom(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let randomNumber = parseInt(Math.random() * (0 + arr.length));
  return arr[randomNumber];
}

function pickMystery() {
  suspect = selectRandom(suspectsArray);
  weapon = selectRandom(weaponsArray);
  room = selectRandom(roomsArray);


  return {
    suspect,
    weapon,
    room,
  };
}

let mistery = pickMystery(suspectsArray, weaponsArray, roomsArray);

// ITERATION 3

function revealMystery(mistery) {
  return `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${
    mistery.room.name
  }!`;
}

console.log(revealMystery(mistery));
