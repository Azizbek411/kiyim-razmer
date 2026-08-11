function aniqlash() {

    let boy = Number(document.getElementById("boy").value);
    let vazn = Number(document.getElementById("vazn").value);

    let razmer;

    if (boy < 165 && vazn < 55) {
        razmer = "S";
    }
    else if (boy < 175 && vazn < 70) {
        razmer = "M";
    }
    else if (boy < 185 && vazn < 85) {
        razmer = "L";
    }
    else if (boy < 195 && vazn < 100) {
        razmer = "XL";
    }
    else {
        razmer = "XXL";
    }

    document.getElementById("natija").innerHTML =
        "👕 Sizga tavsiya qilinadigan razmer: <b>" + razmer + "</b>";
}