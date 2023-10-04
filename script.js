document.getElementById('aceitar').addEventListener('click', function() {
    var resposta = confirm('Você aceita se casar comigo no futuro?');

    if (resposta) {
        alert('Fico muito feliz em ouvir isso! Mal posso esperar pelo nosso futuro juntos.');
    } else {
        alert('Entendo, talvez em outro momento então.');
    }
});
