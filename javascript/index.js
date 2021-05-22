function birthYear(){
    var birthYears = prompt("What is your birth year ?");
    var birthDay = (2021 - birthYears) * 365;
    var h1 = document.createElement("h1");
    var answerText = document.createTextNode("Your age day is " + birthDay);
    h1.appendChild(answerText);
    h1.classList.add("result");
    document.querySelector(".result-container1").appendChild(h1);
}

function reset(){
    document.querySelector(".result").remove();
}