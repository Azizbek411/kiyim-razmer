function calculateSize() {

    const height = Number(
        document.getElementById("height").value
    );

    const weight = Number(
        document.getElementById("weight").value
    );

    const error = document.getElementById("error");
    const result = document.getElementById("result");


    // Ma'lumot tekshirish

    if (
        height < 100 ||
        height > 230 ||
        weight < 25 ||
        weight > 200
    ) {

        error.style.display = "block";
        result.style.display = "none";

        return;
    }


    error.style.display = "none";
    result.style.display = "block";


    // Asosiy kiyim razmeri

    let baseSize;


    if (weight < 50) {

        baseSize = 42;

    } else if (weight < 60) {

        baseSize = 44;

    } else if (weight < 70) {

        baseSize = 46;

    } else if (weight < 80) {

        baseSize = 48;

    } else if (weight < 90) {

        baseSize = 50;

    } else if (weight < 100) {

        baseSize = 52;

    } else if (weight < 110) {

        baseSize = 54;

    } else if (weight < 120) {

        baseSize = 56;

    } else {

        baseSize = 58;
    }


    // Bo'yga qarab tuzatish

    if (height < 160) {

        baseSize -= 2;

    } else if (height >= 185) {

        baseSize += 2;
    }


    // Futbolka

    document.getElementById("tshirt").textContent =
        baseSize;


    // Ko'ylak

    document.getElementById("shirt").textContent =
        baseSize;


    // Kurtka

    document.getElementById("jacket").textContent =
        baseSize + 2;


    // Shim

    let pantsSize =
        30 + ((baseSize - 46) / 2) * 2;


    if (pantsSize < 28) {
        pantsSize = 28;
    }


    document.getElementById("pants").textContent =
        pantsSize;


    // Shortik

    document.getElementById("shorts").textContent =
        pantsSize;


    // Paypoq

    let sockSize;


    if (height < 165) {

        sockSize = 24;

    } else if (height < 175) {

        sockSize = 25;

    } else if (height < 185) {

        sockSize = 27;

    } else {

        sockSize = 29;
    }


    document.getElementById("socks").textContent =
        sockSize;


    // Oyoq kiyim

    let shoeSize;


    if (height < 160) {

        shoeSize = 38;

    } else if (height < 165) {

        shoeSize = 39;

    } else if (height < 170) {

        shoeSize = 40;

    } else if (height < 175) {

        shoeSize = 41;

    } else if (height < 180) {

        shoeSize = 42;

    } else if (height < 185) {

        shoeSize = 43;

    } else if (height < 190) {

        shoeSize = 44;

    } else {

        shoeSize = 45;
    }


    document.getElementById("shoes").textContent =
        shoeSize;


    // Bosh kiyim

    let capSize;


    if (weight < 60) {

        capSize = 55;

    } else if (weight < 80) {

        capSize = 57;

    } else if (weight < 100) {

        capSize = 59;

    } else {

        capSize = 61;
    }


    document.getElementById("cap").textContent =
        capSize;
}