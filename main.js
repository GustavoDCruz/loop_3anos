
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quantos zeros tem de 1 a 100");

    
    if (respostaTime.toLowerCase() === "11") {
      alert("Boa resposta! Acertou na mosca :)");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não foi dessa vez. Tente novamente!!!!!");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
