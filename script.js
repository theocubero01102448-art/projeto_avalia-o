document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const groupCards = document.querySelectorAll('.group-card');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Atualizar botão ativo
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Obter o valor do filtro
            const filterValue = button.getAttribute('data-filter');

            // 3. Filtrar os cartões
            groupCards.forEach(card => {
                // Padrão: mostrar tudo
                card.classList.remove('hidden');

                if (filterValue === 'all') {
                    // Já removeu 'hidden', não faz nada
                } else if (filterValue === 'A-D' || filterValue === 'E-H' || filterValue === 'I-L') {
                    // Filtrar por intervalo de letras (usando classes CSS específicas)
                    if (!card.classList.contains(`group-${filterValue}`)) {
                        card.classList.add('hidden');
                    }
                } else if (filterValue === 'confederacoes') {
                    // Para este exemplo simples, mostramos todos os grupos que têm confederações (todos)
                    // Uma implementação real pode filtrar times específicos *dentro* dos grupos.
                } else if (filterValue === 'anfitrioes') {
                    // Filtrar apenas grupos marcados como anfitriões
                    if (!card.classList.contains('is-host')) {
                        card.classList.add('hidden');
                    }
                } else if (filterValue === 'estatisticas') {
                    // Esconder todos os grupos para mostrar uma tela de estatísticas futura
                    card.classList.add('hidden');
                    // Aqui você adicionaria lógica para mostrar um painel de estatísticas.
                }
            });
        });
    });
});