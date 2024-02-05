let inp = document.querySelector("input");
let btns = document.querySelectorAll(".btns");

for (btn of btns) {
    btn.addEventListener("click", check);
}

function check() {
    if (this.id === "clear_all") {
        inp.value = "";
    }
    else if (this.id === "rmv") {
        inp.value = inp.value.slice(0, inp.value.length - 1);
    }
    else if (this.id == "equal") {
        inp.value = eval(inp.value);
    }
    else{
        inp.value += this.innerText;
    }
}