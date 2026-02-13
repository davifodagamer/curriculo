// Captura os elementos do HTML
const botao = document.getElementById('botao-interativo');
const corpoPagina = document.body;

// Adiciona um evento de clique
botao.addEventListener('click', () => {
    // Sorteia uma cor aleatória
    const cores = ['#dfe6e9', '#ffeaa7', '#fab1a0', '#a29bfe', '#55efc4'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    // Aplica a cor ao fundo
    corpoPagina.style.backgroundColor = corAleatoria;
    
    console.log("Cor alterada para: " + corAleatoria);
});