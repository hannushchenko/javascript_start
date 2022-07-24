//створюємо масиви
let animalsArray = ["порося", "кабан", "черв'як", "ципля", "жук", "павук"];
let adjectivesArray = [
    "брудний",
    "сумний",
    "черствий",
    "неосвічений",
    "колорадський",
];

let resultArray = [];

//створюємо рандоми
let rndNumAdj = Math.floor(Math.random() * animalsArray.length);
let rndNumAnimal = Math.floor(Math.random() * adjectivesArray.length);

//перевірка на середній рід тварин
if (rndNumAnimal === 0 /*порося*/ || rndNumAnimal === 3 /*ципля*/) {
    let newAdjectivesArray = [];
    adjectivesArray.forEach((element) => {
        let newElement = element.slice(0, element.length - 2); //прибираємо "ий"
        newElement = newElement.concat("е");
        newAdjectivesArray.push(newElement);
    });
    resultArray.push(newAdjectivesArray[rndNumAdj]);
    resultArray.push(animalsArray[rndNumAnimal]);

    console.log(resultArray.join(" "));
} else {
    resultArray.push(adjectivesArray[rndNumAdj]);
    resultArray.push(animalsArray[rndNumAnimal]);

    console.log(resultArray.join(" "));
}
