    function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value.toUpperCase();
    let listaAmigos = document.getElementById("lista-amigos");
    if (nomeAmigo === "") {
        alert("Digite o nome de um amigo");
        return;
    }
    if (listaAmigos.textContent.includes(nomeAmigo)) {
        alert("Amigo já adicionado");
        return;
    }   
    if (listaAmigos.textContent) {
        listaAmigos.textContent += `, ${nomeAmigo}`;
    } else {
        listaAmigos.textContent = nomeAmigo;
    }
    limpar();
} 
function limpar() {
    document.getElementById("nome-amigo").value = "";
}
function sortear() {
    let amigos = document.getElementById("lista-amigos").textContent.split(",").map(a => a.trim());
    
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    let sorteio = document.getElementById("lista-sorteio");
    sorteio.innerHTML = amigos.map((amigo, i) => 
        `${amigo} --> ${amigos[i + 1] || amigos[0]}${i < amigos.length-1 ? '<br>' : ''}`
    ).join('');
}
function reiniciar() {
    let listaAmigos = document.getElementById("lista-amigos");
    let listaSorteio = document.getElementById("lista-sorteio");
    listaAmigos.textContent = "";
    listaSorteio.textContent = "";
}
document.getElementById("nome-amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionar();
    }
});