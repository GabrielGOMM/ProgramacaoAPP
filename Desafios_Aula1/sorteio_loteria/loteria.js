// Função para gerar um array de números aleatórios exclusivos dentro de um intervalo
function gerarNumerosAleatorios(unidadeMinima, unidadeMaxima, quantidadeDesejada) {
    const numerosGerados = new Set(); // Usando Set para garantir unicidade dos números

    while (numerosGerados.size < quantidadeDesejada) {
        const numeroAleatorio = Math.floor(Math.random() * (unidadeMaxima - unidadeMinima + 1)) + unidadeMinima;
        numerosGerados.add(numeroAleatorio);
    }

    return Array.from(numerosGerados);
}

// Função para realizar o sorteio baseado no tipo de jogo selecionado
function realizarSorteio() {
    const jogoSelecionado = document.getElementById('selecaoJogo').value;
    let numerosSorteados = [];

    switch (jogoSelecionado) {
        case "Lotofacil":
            numerosSorteados = gerarNumerosAleatorios(1, 25, 15);
            break;
        case "Sena":
            numerosSorteados = gerarNumerosAleatorios(1, 60, 6);
            break;
        case "Quina":
            numerosSorteados = gerarNumerosAleatorios(1, 80, 5);
            break;
    }

    document.getElementById('numerosResultado').textContent = numerosSorteados.join(', ');
}
