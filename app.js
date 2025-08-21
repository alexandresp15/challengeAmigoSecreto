let amigos = [];
ativarEnter();

// Função adiciona ao pressionar a teclar enter
function ativarEnter() {
    let input = document.querySelector("#amigo");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // evita o refresh da página
            adicionarAmigo();       // chama a função normalmente
        }
    });
}

// Função para adicionar amigo
function adicionarAmigo() {
    let nome = document.querySelector('#amigo');
    nomeDoAmigo = nome.value.trim(); // remove espaços extras

    // Verifica se o campo está vazio
    if (nomeDoAmigo == "") {
        alert("Digite um nome antes de adicionar!");
        return;
    }

    // Verifica se contém apenas letras e espaços (com acentos)
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(nomeDoAmigo)) {
        alert("Digite apenas letras e espaços (sem números ou símbolos)!");
        limparCampo();
        return;
    }

    // Verifica se já existe na lista (ignora maiúsculas/minúsculas)
    if (amigos.some(a => a.toLowerCase() === nomeDoAmigo.toLowerCase())) {
        alert("Esse nome já foi adicionado!");
        limparCampo();
        return;
    }

    // Adiciona o nomeDoAmigo no array
    amigos.push(nomeDoAmigo);

    // Atualiza a Lista de Amigos na Tela
    atualizarListaAmigo();

    // Limpa o campo de entrada
    limparCampo();
}

// Função limpar campo
function limparCampo() {
    nomeDoAmigo = document.querySelector('#amigo');
    nomeDoAmigo.value = '';
    nomeDoAmigo.focus();
}

// Função atualizar lista de amigo na tela
function atualizarListaAmigo() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    let i = 0;
    while (i < amigos.length) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
        i++;
    }
}