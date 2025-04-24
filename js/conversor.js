let origem = null;
let destino = null;

const taxas = {
    trocado: {
        trocado: 1,
        prata: 0.02,
        dobrão: 0.0002,
        platina: 0.000002
    },
    prata: {
        trocado: 50,
        prata: 1,
        dobrão: 0.01,
        platina: 0.0001
    },
    dobrão: {
        trocado: 5000,
        prata: 100,
        dobrão: 1,
        platina: 0.01
    },
    platina: {
        trocado: 500000,
        prata: 10000,
        dobrão: 100,
        platina: 1
    }
};

function selecionarOrigem(moeda, botao) {
    origem = moeda;
    document.querySelectorAll(".botao-moeda").forEach(btn => {
    if (btn.onclick.toString().includes("selecionarOrigem")) {
        btn.classList.remove("botao-selecionado");
    }
    });
    botao.classList.add("botao-selecionado");
}

function selecionarDestino(moeda, botao) {
    destino = moeda;
    document.querySelectorAll(".botao-moeda").forEach(btn => {
    if (btn.onclick.toString().includes("selecionarDestino")) {
        btn.classList.remove("botao-selecionado");
    }
    });
    botao.classList.add("botao-selecionado");
}

function converter() {
    const quantidade = parseFloat(document.getElementById("quantidade").value);
    if (isNaN(quantidade)) {
    document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
    return;
}

if (!origem || !destino) {
    document.getElementById("resultado").innerText = "Selecione a moeda de origem e destino.";
    return;
}

const taxa = taxas[origem][destino];
const resultado = quantidade * taxa;

document.getElementById("resultado").innerText =
    `${quantidade} ${origem.toUpperCase()} = ${resultado.toFixed(2)} ${destino.toUpperCase()}`;
}
