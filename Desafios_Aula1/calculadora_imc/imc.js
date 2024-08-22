function obterIMC(pesoCorporal, alturaCorporal) {
    return pesoCorporal / Math.pow(alturaCorporal, 2);
}

function determinarClassificacaoIMC(indiceIMC) {
    const faixasIMC = [
        { limite: 16, descricao: "Muito Abaixo do Peso Ideal" },
        { limite: 18.5, descricao: "Abaixo do Peso Ideal" },
        { limite: 25, descricao: "Peso Ideal" },
        { limite: 30, descricao: "Acima do Peso Ideal" },
        { limite: 35, descricao: "Obesidade Grau I" },
        { limite: 40, descricao: "Obesidade Grau II" },
        { limite: Infinity, descricao: "Obesidade Grau III" }
    ];

    return faixasIMC.find(faixa => indiceIMC < faixa.limite).descricao;
}

function exibirResultadoIMC() {
    const pesoCorporal = parseFloat(document.querySelector('#peso').value);
    const alturaCorporal = parseFloat(document.querySelector('#altura').value);

    if (isNaN(pesoCorporal) || isNaN(alturaCorporal) || pesoCorporal <= 0 || alturaCorporal <= 0) {
        document.querySelector('#resultadoIMC').textContent = "Por favor, insira valores válidos para peso e altura.";
        document.querySelector('#classificacaoIMC').textContent = "";
        return;
    }

    const indiceIMC = obterIMC(pesoCorporal, alturaCorporal);
    const classificacaoIMC = determinarClassificacaoIMC(indiceIMC);

    document.querySelector('#resultadoIMC').textContent = `Seu IMC é: ${indiceIMC.toFixed(2)}`;
    document.querySelector('#classificacaoIMC').textContent = `Classificação: ${classificacaoIMC}`;
}
