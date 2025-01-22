//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const campoEntrada = document.getElementById('amigo');
    const nomeAmigo = campoEntrada.value.trim();

    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    campoEntrada.value = '';
    campoEntrada.focus();

    // Atualizar a lista exibida na página
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    // Obter o elemento da lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpar a lista existente
    listaAmigos.innerHTML = '';

    // Percorrer o array de amigos e adicionar elementos <li> à lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de nomes está vazia.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    document.getElementById('resultado').textContent = `O amigo secreto é: ${amigoSecreto}`;
}



