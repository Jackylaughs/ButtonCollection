// トグルスイッチ

const toggle_button_cover = document.querySelector (".toggle_button_cover");
const toggle_button = document.querySelector(".toggle_button_switch");

toggle_button_cover.addEventListener ("click", () => {
    toggle_button_cover.classList.toggle ("open");
    toggle_button.classList.toggle ("open");
});