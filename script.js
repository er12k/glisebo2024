//Declara uma variável currentSlide e a inicializa com o valor 0. Esta variável irá rastrear o índice do slide atualmente exibido no carrossel.
let currentSlide = 0;

//Define uma função chamada showSlide que recebe um parâmetro index. Esta função será responsável por exibir o slide correspondente ao índice fornecido.
function showSlide(index) {
    //Seleciona todos os elementos com a classe carousel-slide e armazena-os na constante slides. Isso cria uma lista (NodeList) de todos os slides do carrossel.
    const slides = document.querySelectorAll('.carousel-slide');
    //Se index for maior ou igual ao número de slides, define currentSlide como 0 (voltando ao primeiro slide).
    if (index >= slides.length) {
        currentSlide = 0;
    //Se index for menor que 0, define currentSlide como o índice do último slide.    
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    //Caso contrário, define currentSlide com o valor de index.
    } else {
        currentSlide = index;
    }
    //Calcula o deslocamento (em porcentagem) necessário para exibir o slide atual. Multiplica o índice do slide atual (currentSlide) por -100, porque cada slide ocupa 100% da largura do contêiner.
    const offset = -currentSlide * 100;
    
    //Aplica a transformação CSS translateX ao contêiner do carrossel para mover os slides horizontalmente e exibir o slide atual. O valor de offset é usado para deslocar o contêiner para a posição correta.
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

//Define uma função nextSlide que incrementa o valor de currentSlide em 1 e chama a função showSlide com o novo valor. Isso exibe o próximo slide.
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Define uma função prevSlide que decrementa o valor de currentSlide em 1 e chama a função showSlide com o novo valor. Isso exibe o slide anterior.
function prevSlide() {
    showSlide(currentSlide - 1);
}

//Adiciona um event listener para o evento DOMContentLoaded, que é disparado quando o documento HTML foi completamente carregado e analisado. Quando este evento ocorre, a função anônima é executada, chamando showSlide com o valor inicial de currentSlide (0). Isso garante que o primeiro slide seja exibido quando a página for carregada.
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});