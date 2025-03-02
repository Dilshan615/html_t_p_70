let kC = document.querySelector(".Keyboard");
let keys = "1234567890qwertyuiopasdfghjklzxcvbnm".split("");

keys.forEach((key, index) => {
    let keyDiv = document.createElement("div");
    keyDiv.classList.add("key");
    let keyElement = document.createElement("i");
    keyElement.setAttribute("data-key", key);
    keyElement.innerText = key.toUpperCase();
    keyDiv.appendChild(keyElement);
    kC.appendChild(keyDiv);
    if (key === "0" || key === "p" || key === "l") {
        let lineBreak = document.createElement("div");
        lineBreak.classList.add("break");
        kC.appendChild(lineBreak);
    }
    document.addEventListener("keydown", (event) => {
        let keyElement = document.querySelector(`.key i[data-key="
            ${event.key.toLocaleLowerCase()}"]`);
        if (keyElement) keyElement.parentElement.classList.add("active");
    });
    document.addEventListener("keyup", (event) => {
        let keyElement = document.querySelector(`.key i[data-key="
            ${event.key.toLocaleLowerCase()}"]`);
        if (keyElement) keyElement.parentElement.classList.remove("active");
    });
});