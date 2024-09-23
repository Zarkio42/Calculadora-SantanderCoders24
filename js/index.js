const btn = document.querySelectorAll(".btn");
const visor = document.getElementById("visor");
let operador = "";
let valorAtualVisor = "";
let valorAnterior = "";

btn.forEach((item) => {
    item.addEventListener("click", () => {
        let tecla = item.textContent;
        if (tecla == "C") {
            visor.value = "";
            operador = "";
            valorAtualVisor = "";
            valorAnterior = "";
        }
        else if (tecla == "Apagar") {
            visor.value = visor.value.slice(0, -1);
            valorAtualVisor = visor.value;
        }
        else if (tecla == ",") {
            if (visor.value.includes(".")) {
                return;
            }
            else if (visor.value == ""){
                visor.value = "0.";
                valorAtualVisor += "0.";
            }
            else {
                visor.value += ".";
                valorAtualVisor += ".";
            }
        }
        else {
            valorAtualVisor += tecla;
            visor.value += tecla;
        }
    });

});
