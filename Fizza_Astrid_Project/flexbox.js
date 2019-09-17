function logoColor() {
    const lc = document.getElementById("logo");
    lc.style.color = "white";
}

function pageWelcome() {
    const headingEl = document.getElementById("website-heading");
    headingEl.innerHTML = "Välkommen til vår Flexbox Webbsida";
}
function changeBack() {
    const headingEl = document.getElementById("website-heading");
    headingEl.innerHTML = "Flexbox Webbsida";
}
function navTip1() {
    alert("Klicka på länkarna till vänster för snabb navigering !");
}