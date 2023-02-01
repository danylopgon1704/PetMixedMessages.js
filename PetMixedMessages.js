// Expected Output The Ideal Pet and Song ♥
const colorIdealPet = ['A pink', 'A blue', 'A green', 'A black', 'A red', 'A violet'];
const animalIdeal = ['Rabit', 'Dog', 'Cat', 'Panda', 'Hamster', 'Pig'];
const idealSong = ['New York City Cops', 'Stand By Me', 'Love Is A Laserquest', 'Ruby Tuesday', 'Let It Happen', 'Ocean Of Night'];
const figure = ['૮ ･ ﻌ･ა','૮⍝• ᴥ •⍝ა', '૮ • ﻌ - ა','૮₍ ´• ˕ •` ₎ა','૮₍ 𝁽ܫ𝁽 ₎ა','૮ ´• ﻌ ´• ა' ]

// Random Select

const randomIdealColor = () => {
    let colorIdeal = colorIdealPet[Math.floor(Math.random()*colorIdealPet.length)]
    return colorIdeal
}

const randomAnimal = () => {
    let animalRandom = animalIdeal[Math.floor(Math.random()*animalIdeal.length)]
    return animalRandom
}

const randomSong = () => {
    let songIdeal = idealSong[Math.floor(Math.random()*idealSong.length)]
    return songIdeal
}

const randomFigure = () => {
    let figureRandom = figure[Math.floor(Math.random()*figure.length)]
    return figureRandom
}

let colorIdeal = randomIdealColor();
let animalRandom = randomAnimal();
let songIdeal = randomSong();
let figureRandom = randomFigure();

// Message


console.log(`Your Ideal Color Pet Is ${colorIdeal}, And Ideal Pet Is ${animalRandom}, The Best Song For Your Pet Is  ${songIdeal}, ${figureRandom} !`)
console.log(`Created By Daniela López`)