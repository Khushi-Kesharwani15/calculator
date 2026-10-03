 const display = document.getElementById("display");
     buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            display.value += btn.innerText;   
        });
    });

    document.getElementById("equal").addEventListener("click", () => {
        display.value = eval(display.value);
    });

    document.getElementById("clear").addEventListener("click", () => {
        display.value = "";
    });