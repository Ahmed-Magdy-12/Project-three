/* ========= Show Form Search when click Icon Search in the Navbar ========= */
let iconSearch = document.getElementById('search');
let form = document.getElementById('inputSearch');
iconSearch.addEventListener('click', () => {
    form.classList.toggle('active')
})
/* ========= Show Icon in Dish when Hover td ========= */
let tab = document.getElementById('tab');
let Showdiv_1 = document.getElementById('Showdiv-1')
let Showdiv_2 = document.getElementById('Showdiv-2')
let Showdiv_3 = document.getElementById('Showdiv-3')
let Showdiv_4 = document.getElementById('Showdiv-4')
let Showdiv_5 = document.getElementById('Showdiv-5')
let Showdiv_6 = document.getElementById('Showdiv-6')

function mouseOver_1() {
    Showdiv_1.classList.remove('active')
}

function mouseOver_2() {
    Showdiv_2.classList.remove('active')
}

function mouseOver_3() {
    Showdiv_3.classList.remove('active')
}

function mouseOver_4() {
    Showdiv_4.classList.remove('active')
}

function mouseOver_5() {
    Showdiv_5.classList.remove('active')
}

function mouseOver_6() {
    Showdiv_6.classList.remove('active')
}
function mouseOut_1() {
    Showdiv_1.classList.add('active')
}
function mouseOut_2() {
    Showdiv_2.classList.add('active')
}
function mouseOut_3() {
    Showdiv_3.classList.add('active')
}
function mouseOut_4() {
    Showdiv_4.classList.add('active')
}
function mouseOut_5() {
    Showdiv_5.classList.add('active')
}
function mouseOut_6() {
    Showdiv_6.classList.add('active')
}