const listaAmigosSortear = [];

function adicionarAmigo() {
    let nomeAmigos = document.querySelector("#amigo").value;
    let listaAmigos = document.querySelector("#listaAmigos");
    
    if(nomeAmigos.trim() != ""){
        let flex = document.createElement("div");
        flex.id = "flex";
        flex.style.display = "flex";
    
        let div = document.createElement("div");
        div.id = "amigos";
        div.innerHTML = nomeAmigos.trim();
        div.value = nomeAmigos.trim();
    
        let botaoExcluir = document.createElement("i");
        botaoExcluir.classList = "bi";
        botaoExcluir.classList = "bi-trash3";
        botaoExcluir.id = "botaoExcluir";
    
        flex.appendChild(div);
        flex.appendChild(botaoExcluir);
        listaAmigos.appendChild(flex);
    
        listaAmigosSortear.push(nomeAmigos.trim());
    
        limparCampo("input");
    
        botaoExcluir.addEventListener('click', (e) =>{
            element = e.target;
            let divFlex = element.parentElement;
    
            let amigos = divFlex.querySelector("#amigos").value;
    
            const index = listaAmigosSortear.indexOf(amigos);
            if (index > -1) {
                listaAmigosSortear.splice(index, 1);
            }
            listaAmigos.removeChild(flex); 
        })

    }else{
        alterarResultado("Digite o nome do participante para poder adicioná-lo !", "red")
    }
}   

function sortearAmigo() {
    if (listaAmigosSortear.length === 0) {
        alterarResultado("Adicione pelo menos um amigo para poder realizar o sorteio !", "red")
        return;
    }
    let indice = Math.floor(Math.random() * listaAmigosSortear.length);
    let sorteado = listaAmigosSortear[indice];
    alterarResultado("O participante sorteado foi : "+ sorteado +". Parabéns !", "green")
    desativarBotaoSortear();
}

function limparCampo() {
    let nomeAmigos = document.querySelector("#amigo")
    nomeAmigos.value = '';
}

function alterarResultado(texto, cor) {
    let novoResultado = document.querySelector("#resultado");
    novoResultado.style.color = cor;
    novoResultado.innerHTML = texto;
    setTimeout(() => {
        novoResultado.innerHTML = "";
    }, 3000);
}

function desativarBotaoSortear (){
    let botaoSortear = document.querySelector(".button-draw");
    botaoSortear.setAttribute("disabled", true);
    setTimeout(() => {
        botaoSortear.removeAttribute("disabled");
    }, 3000);
}