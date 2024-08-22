function converterTemperatura(valorTemperatura, unidadeEntrada, unidadeSaida) {
    const conversoes = {
        'Celsius': {
            'Kelvin': valor => valor + 273.15,
            'Fahrenheit': valor => (valor * 9/5) + 32
        },
        'Kelvin': {
            'Celsius': valor => valor - 273.15,
            'Fahrenheit': valor => (valor - 273.15) * 9/5 + 32
        },
        'Fahrenheit': {
            'Celsius': valor => (valor - 32) * 5/9,
            'Kelvin': valor => (valor - 32) * 5/9 + 273.15
        }
    };

    if (unidadeEntrada === unidadeSaida) return valorTemperatura;

    return conversoes[unidadeEntrada][unidadeSaida](valorTemperatura);
}
function processarConversao() {
    const valorTemperatura = parseFloat(document.getElementById('inputValor').value);
    const unidadeEntrada = document.getElementById('inputUnidadeEntrada').value;
    const unidadeSaida = document.getElementById('inputUnidadeSaida').value;

    const resultadoConversao = converterTemperatura(valorTemperatura, unidadeEntrada, unidadeSaida);
    document.getElementById('outputResultado').textContent = resultadoConversao.toFixed(2);
}
