
$("#boton_modal").click(function () {
$("#modal").addClass("mostrar");
})

$("#cerrar_modal").click(function () {
$("#modal").removeClass("mostrar");
})

window.onclick = function (event) {
if (event.target == modal) {
$("#modal").removeClass("mostrar");
}
};


document.addEventListener('keydown', function (event) {
if (event.key === 'Escape') {
$("#modal").removeClass("mostrar");
}
});

function onScroll() {
const scrollTop = window.scrollY;

if (scrollTop > 600) {
$("#modal").addClass("mostrar");
}
}
window.addEventListener('scroll', onScroll);
