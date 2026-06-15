document.addEventListener('DOMContentLoaded', () => {
    const jogos = document.querySelectorAll('.jogo-item');

    jogos.forEach(jogo => {
        const inputMandante = jogo.querySelector('.gols-mandante');
        const inputVisitante = jogo.querySelector('.gols-visitante');

        // Escuta quando o usuário digita um placar
        inputMandante.addEventListener('input', atualizarPontuacao);
        inputVisitante.addEventListener('input', atualizarPontuacao);
    });

    function atualizarPontuacao() {
        // Objeto provisório para resetar e recalcular os pontos do grupo
        let pontos = {
            'estados-unidos': 0,
            'mexico': 0,
            'canada': 0
        };

        jogos.forEach(jogo => {
            const inputMandante = jogo.querySelector('.gols-mandante');
            const inputVisitante = jogo.querySelector('.gols-visitante');
            
            const timeMandante = inputMandante.dataset.time;
            const timeVisitante = inputVisitante.dataset.time;

            const golsM = parseInt(inputMandante.value);
            const golsV = parseInt(inputVisitante.value);

            // Se ambos os campos estiverem preenchidos, calcula o resultado
            if (!isNaN(golsM) && !isNaN(golsV)) {
                if (golsM > golsV) {
                    pontos[timeMandante] += 3;
                } else if (golsM < golsV) {
                    pontos[timeVisitante] += 3;
                } else {
                    pontos[timeMandante] += 1;
                    pontos[timeVisitante] += 1;
                }
            }
        });

        // Atualiza visualmente os pontos na tabela HTML
        for (const time in pontos) {
            const linha = document.querySelector(`tr[data-selecao="${time}"]`);
            if (linha) {
                linha.querySelector('.pontos').textContent = pontos[time];
            }
        }
        
        // Dica: Para deixar perfeito, você pode adicionar uma lógica aqui para ordenar as linhas (<tr>) com base nos pontos!
    }
});