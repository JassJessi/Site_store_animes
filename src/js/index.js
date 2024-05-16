const botaoMostrarLoja = document.querySelector('.btn-mostrar-loja');

botaoMostrarLoja.addEventListener('click', () => {
    //Adicionando a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}