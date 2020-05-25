var cirkel = document.querySelector('#Cirkel_4_');
var target = document.querySelector('body');
var ovaal = document.querySelector('#Ovaal_3_');
var drum = document.querySelector('#Drum_1_');
var stip1 = document.querySelector('#stip_2_1_');
var stip2 = document.querySelector('#stip_1_1_');
var streep1 = document.querySelector('#streep_2_1_');
var streep2 = document.querySelector('#streep_1_2_');
var streep3 = document.querySelector('#streep_3_2_');

cirkel.addEventListener('click', function () {
    target.classList.toggle('effect');
})

ovaal.addEventListener('click', function () {
    target.classList.toggle('effect2');
})

drum.addEventListener('click', function () {
    target.classList.toggle('effect3');
})

stip1.addEventListener('click', function () {
    target.classList.toggle('effect4');
})

stip2.addEventListener('click', function () {
    target.classList.toggle('effect4');
})

streep1.addEventListener('click', function () {
    target.classList.toggle('effect5');
})

streep2.addEventListener('click', function () {
    target.classList.toggle('effect5');
})

streep3.addEventListener('click', function () {
    target.classList.toggle('effect5');
})


window.addEventListener('keydown', toggle)

function toggle(event) {
    console.log(event.keyCode);
    target.classList.toggle('key');
}
//
//function toggle() {
//   drum.classList.toggle('drumkleur')
//}
//
