let hoop=0
let hoopEl= document.getElementById("hoop-el")
let hoop2= document.getElementById("hoop-2")

console.log(hoopEl)

function score1(){
    hoop = hoop + 1
    hoopEl.innerText = hoop
}

function score2(){
    hoop = hoop + 2
    hoopEl.innerText = hoop
}

function score3(){
    hoop = hoop + 3
    hoopEl.innerText = hoop
}

function score4(){
    hoop = hoop + 1
    hoop2.innerText = hoop
}

function score5(){
    hoop = hoop + 2
    hoop2.innerText = hoop
}

function score6(){
    hoop = hoop + 3
    hoop2.innerText = hoop
}
