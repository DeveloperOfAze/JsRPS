var menimxalim = 0;
var botunxali = 0;
const getRandomLetter = (e) => {
    const letters = 'tkm';
    let myKey = e.key
    const ind = Math.floor(Math.random() * letters.length);

    if (myKey === letters[ind]) {
        return "Oyun beraberdir!";

    } else if (myKey === "t") {
        if (letters[ind] === "k") {
            console.log("Kagit yazan oyuncu qazandi");
            botunxali++;
            console.log("Botun xali : " + botunxali);
        } else {
            console.log("tas yazan oyuncu qazandı!");
            menimxalim++;
            console.log("Menim Xalim:" + menimxalim);

        }

    } else if (myKey === "k") {
        if (letters[ind] === "m") {
            botunxali++;
            console.log("Botun xali : " + botunxali);
            console.log("makas yazan oyuncu qazandı!");


        } else {
            menimxalim++;
            console.log("Menim Xalim:" + menimxalim);
            console.log(" kagit yazan oyuncu qazandı!");

        }
    } else if (myKey === "m") {
        if (letters[ind] === "t") {
            botunxali++;
            console.log("Botun xali : " + botunxali);
            console.log("tas yazan oyuncu qazandı!");


        } else {
            menimxalim++;
            console.log("Menim Xalim:" + menimxalim);
            console.log(" makas yazan oyuncu qazandı!");

        }
    } else {
        return " Bunu ede bilmezsen bele bir deyer yoxdur!!";
    }
}



window.onkeyup = getRandomLetter;





