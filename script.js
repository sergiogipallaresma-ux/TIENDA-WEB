function toggleWhatsApp() {
    const menu = document.getElementById("whatsappOptions");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
