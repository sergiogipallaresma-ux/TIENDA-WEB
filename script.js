const sliders = document.querySelectorAll(".slides");
let indexSlides = [];

// Inicializar índices
sliders.forEach((_, i) => {
    indexSlides[i] = 0;
});

function moverSlide(direccion, producto) {

    const slider = sliders[producto];
    const total = slider.children.length;

    indexSlides[producto] += direccion;

    if (indexSlides[producto] < 0) {
        indexSlides[producto] = total - 1;
    }

    if (indexSlides[producto] >= total) {
        indexSlides[producto] = 0;
    }

    slider.style.transform = `translateX(-${indexSlides[producto] * 100}%)`;
}

function toggleWhatsApp() {
    const menu = document.getElementById("whatsappOptions");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

let productoSeleccionado = "";
let precioSeleccionado = "";

// Esta función la llamas desde cada producto
function seleccionarProducto(nombre, precio) {
    productoSeleccionado = nombre;
    precioSeleccionado = precio;
}

// Esta función se ejecuta al elegir el número
function enviarWhatsApp(numero) {

    let mensaje = `Hola, quiero comprar (inserte nombre del producto y captura de pantalla). ¿Sigue disponible?`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
