let listaDeAmigos = [];


function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('#amigo').value;

    if (nomeDoAmigo == "") {
        alert("Digite um nome antes de adicionar!");
        return;
    }

    listaDeAmigos.push(nomeDoAmigo);
    limparCampo();
}

function limparCampo() {
    nomeDoAmigo = document.querySelector('#amigo');
    nomeDoAmigo.value = '';
    nomeDoAmigo.focus();
}