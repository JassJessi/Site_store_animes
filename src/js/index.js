function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()  //Indentificar palavras maiusculas e minusculas
    let x = document.getElementsByClassName('produtos')

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLocaleLowerCase().includes(input)){
            x[i].style.display = "none" 
        }else{
            x[i].style.display = "list-item"
        }
    }
}

const botaoMostrarLoja = document.querySelector('.btn-mostrar-loja');

botaoMostrarLoja.addEventListener('click', () => {
    //Adicionando a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

