console.log("1 uzdavinys");

let firstName = "Johnny";
let lastName = "Depp";

if(firstName.length < lastName.length){
    console.log(firstName);
}else if(firstName.length > lastName.length){
    console.log(lastName);
}else{
    console.log("Aktoriaus vardas ir pavarde yra vienodo ilgio");
}
// let mins = "0";
// mins += "46";
// console.log(mins.substring(mins.length - 2));

console.log("2 uzdavinys");

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

console.log("3 uzdavinys");

// aktoriaus inicialai
let initials = firstName.charAt(0) + lastName.charAt(0);
console.log(initials);

console.log("4 uzdavinys");

// cia saugosiu aktoriaus vardo ir pavardes tris paskutines raides
let result = firstName.substring(firstName.length - 3) + " " + lastName.substring(lastName.length - 3)

console.log(result);

console.log("5 uzdavinys");

let string = "An American in Paris";


string = string.replace(/a/g, "*")
string = string.replace(/A/g, "*")
console.log(string);

console.log("6 uzdavinys");

let string2 = "An American in Paris";
let string3 = "Breakfast at Tiffany's";
let string4 = "2001: A Space Odyssey";
let string5 = "It's a Wonderful Life";


function deleteVoices(string){
    string = string.replace(/a/g, "")
    string = string.replace(/A/g, "")

    string = string.replace(/e/g, "")
    string = string.replace(/E/g, "")

    string = string.replace(/i/g, "")
    string = string.replace(/I/g, "")

    string = string.replace(/o/g, "")
    string = string.replace(/o/g, "")

    string = string.replace(/u/g, "")
    string = string.replace(/U/g, "")

    console.log(string);
}

deleteVoices(string2);
deleteVoices(string3);
deleteVoices(string4);
deleteVoices(string5);

console.log("7 uzdavinys");


let starWars = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";

console.log(starWars);
console.log("8 uzdavinys");

let string6 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let string7 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
// cia saugosiu kiek raidziu sudaro zodi
let numChar = 0;
// cia saugosiu zodziu skaiciu kurie turi maziau nei 5 simbolius
let numWords = 0;
// cia saugosiu kiek symboliu zodis negali virsyti
let wordLength = 5;

function findShortWords(longString){
    for(let i = 0; i < longString.length; i++){
        if ((longString[i] != " " && longString[i + 1] != " ")){
            numChar++;
        }
        if (longString[i] == " " || longString[i] == "," || longString[i] == "." || longString[i] == "!" || longString[i] == "?"){
            if(numChar <= wordLength){
                numWords++;
            }
            numChar = 0;
        }
        if(i == longString.length - 1){
            console.log("Zodziu skaicius, kurie turi maziau nei " + wordLength + " symbolius: " + numWords);
            numChar = 0;
            numWords = 0;
        }
    }
}

findShortWords(string6);
findShortWords(string7);

console.log("9 uzdavinys");

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(makeid(3));

console.log("10 uzdavinys");

let string8 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale Don't Be a Menace to South Central While Drinking Your Juice in the Hood"
// cia saugosiu atsitiktine tvarka sugeneruotus zodzius
let newString = "";

let newWordID;
let newWordLength = 0;

let WordsNum = 0;

let temporaryWordsNum = 0;

function findWordsNum(string, length){
    for(let i = 0; i < string.length; i++){
        if (string[i] != " " && (string[i + 1] == " " || i + 1 == string.length)){
            WordsNum++;
        }
    }
}

function displayRandomWords(string, length){
    for(let i = 0; i < length; i++){
        newWordID = Math.floor(Math.random() * WordsNum);
        for(let j = 0; j < string.length; j++){
            if (string[j] == " " && (string[j + 1] != " " || j + 1 == string.length)){
                temporaryWordsNum++;
            } else if(temporaryWordsNum == newWordID){
                newWordLength++;
                newString += string[j];
                if(string[j + 1] == " " || string[j + 1] == "," || string[j + 1] == "." || string[j + 1] == "!" || string[j + 1] == "?" || j == string.length - 1){
                    newString += " ";
                    newWordID = 0;
                }
            }
            if(j == string.length - 1){
                temporaryWordsNum = 0;
            }
        }
        if(i == length - 1){
            console.log( "Zodziai: " + newString);

        }
    }
}
findWordsNum(string8);
displayRandomWords(string8, 10);

