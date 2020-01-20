function inputName() {
    const player1 = document.querySelectorAll("p")[1].innerHTML = prompt("enter palayer 1 name: ");
    const player2 = document.querySelectorAll("p")[2].innerHTML = prompt("enter palayer 2 name: ");
}

function clickMe() {
    var randomNumber1 = Math.floor(Math.random() * 3) + 1;
    var randomImage = "images/img" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImage);

    var randomNumber2 = Math.floor(Math.random() * 3) + 1;
    var randomImage = "images/img" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImage);


    const name1 = document.querySelectorAll("p")[1].innerHTML;
    const name2 = document.querySelectorAll("p")[2].innerHTML;

    if (randomNumber1 === 1 && randomNumber2 === 2) {
        document.querySelector("h1").innerHTML = "🤩" + name1 + " WIN👏";
    } else if (randomNumber1 === 2 && randomNumber2 === 3) {
        document.querySelector("h1").innerHTML = "🤩" + name1 + " WIN👏";
    } else if (randomNumber1 === 3 && randomNumber2 === 1) {
        document.querySelector("h1").innerHTML = "🤩" + name1 + " WIN👏";
    } else if (randomNumber2 === 1 && randomNumber1 === 2) {
        document.querySelector("h1").innerHTML = "👏" + name2 + " WIN😍";
    } else if (randomNumber2 === 2 && randomNumber1 === 3) {
        document.querySelector("h1").innerHTML = "👏" + name2 + " WIN😍";
    } else if (randomNumber2 === 3 && randomNumber1 === 1) {
        document.querySelector("h1").innerHTML = "👏" + name2 + " WIN😍";
    } else {
        document.querySelector("h1").innerHTML = "DRAW 😎 once again";
    }
}
