var cirkel = document.querySelector('#Cirkel_4_');
var target = document.querySelector('body');
var ovaal = document.querySelector('#Ovaal_3_');

cirkel.addEventListener('click', function () {
    target.classList.toggle('effect');
})

ovaal.addEventListener('click', function () {
    target.classList.toggle('effect2');
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
