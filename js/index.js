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
            else if (visor.value == "") {
                visor.value = "0.";
                valorAtualVisor += "0.";
            }
            else {
                visor.value += ".";
                valorAtualVisor += ".";
            }
        }
        else if (["+", "-", "*", "/"].includes(tecla)) {
            if (valorAnterior) {
                valorAnterior = calcularResultado();
                visor.value = valorAnterior;
            }
            else{
                valorAnterior = valorAtualVisor;
            }
            operador = tecla;
            valorAtualVisor = "";
            visor.value = "";
        }
        else if(tecla == "="){
            if(operador && valorAnterior && valorAtualVisor){
                visor.value = calcularResultado();
                valorAnterior = visor.value;
                operador = "";
                valorAtualVisor = "";
            }
        }
        else {
            valorAtualVisor += tecla;
            visor.value += tecla;
        }
    });

});

function calcularResultado() {
    let resultado;  
    let valor1 = parseFloat(valorAnterior);
    let valor2 = parseFloat(valorAtualVisor);

    switch (operador){
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
    }

    return resultado.toString();
};
