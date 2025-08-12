// O comando 'DOMContentLoaded' garante que o script só rode depois que a página HTML for totalmente carregada.
document.addEventListener('DOMContentLoaded', () => {
    // Pega o botão e o parágrafo pelo ID
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');

    // Adiciona um "ouvinte de evento" (event listener) que espera um clique no botão
    botao.addEventListener('click', () => {
        // Quando o botão é clicado, o texto do parágrafo é alterado
        mensagem.textContent = 'Parabéns! Você acabou de interagir com o JavaScript!';
    });
});
