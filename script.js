
var likes1 = 9;
var likes2 = 12;
var likes3 = 9;


function like1() {
    var newLike1 = document.querySelector("#like-counter1")
    likes1 ++
    newLike1.innerText = likes1 + " like(s)"
}

function like2() {
    var newLike2 = document.querySelector("#like-counter2")
    likes2 ++
    newLike2.innerText = likes2 + " like(s)"
}

function like3() {
    var newLike3 = document.querySelector("#like-counter3")
    likes3 ++
    newLike3.innerText = likes3 + " like(s)"
}
