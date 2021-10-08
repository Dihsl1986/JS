function converterDuracao(titulo,duracao) {
    //Cria referencia aos elementos da página
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    //Obtem conteúdo dos campos de entrada
    var titulo = (inTitulo.value);
    var duracao = Number(inDuracao.value);

    //Arredonda para baixo o resultado da Divisão
    var horas = Math.floor(duracao/60);

    //Obtem o resto da divisão entre os números
    var minutos = duracao % 60;

    //Altera o conteúdo dos parágrafo de resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + "hora(s) e " + minutos + "mimuto(s)";

}

//Criaum referencia ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");

//Registra um evento associad ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);


