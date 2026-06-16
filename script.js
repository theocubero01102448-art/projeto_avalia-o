// Array contendo todas as seleções presentes nas duas imagens
const groupsData = [
    {
        name: "Grupo A",
        teams: [
            { name: "México", confederation: "CONCACAF" },
            { name: "África do Sul", confederation: "CAF" },
            { name: "Coreia do Sul", confederation: "AFC" },
            { name: "República Tcheca", confederation: "UEFA" }
        ]
    },
    {
        name: "Grupo B",
        teams: [
            { name: "Canadá", confederation: "CONCACAF" },
            { name: "Bósnia e Herzegovina", confederation: "UEFA" },
            { name: "Catar", confederation: "AFC" },
            { name: "Suíça", confederation: "UEFA" }
        ]
    },
    {
        name: "Grupo C",
        teams: [
            { name: "Brasil", confederation: "CONMEBOL" },
            { name: "Marrocos", confederation: "CAF" },
            { name: "Haiti", confederation: "CONCACAF" },
            { name: "Escócia", confederation: "UEFA" }
        ]
    },
    {
        name: "Grupo D",
        teams: [
            { name: "Estados Unidos", confederation: "CONCACAF" },
            { name: "Paraguai", confederation: "CONMEBOL" },
            { name: "Austrália", confederation: "AFC" },
            { name: "Turquia", confederation: "UEFA" }
        ]
    },
    {
        name: "Grupo E",
        teams: [
            { name: "Alemanha", confederation: "UEFA" },
            { name: "Curaçao", confederation: "CONCACAF" },
            { name: "Costa do Marfim", confederation: "CAF" },
            { name: "Equador", confederation: "CONMEBOL" }
        ]
    },
    {
        name: "Grupo F",
        teams: [
            { name: "Holanda", confederation: "UEFA" },
            { name: "Japão", confederation: "AFC" },
            { name: "Suécia", confederation: "UEFA" },
            { name: "Tunísia", confederation: "CAF" }
        ]
    },
    {
        name: "Grupo G",
        teams: [
            { name: "Bélgica", confederation: "UEFA" },
            { name: "Egito", confederation: "CAF" },
            { name: "Irã", confederation: "AFC" },
            { name: "Nova Zelândia", confederation: "OFC" }
        ]
    },
    {
        name: "Grupo H",
        teams: [
            { name: "Espanha", confederation: "UEFA" },
            { name: "Cabo Verde", confederation: "CAF" },
            { name: "Arábia Saudita", confederation: "AFC" },
            { name: "Uruguai", confederation: "CONMEBOL" }
        ]
    },
    {
        name: "Grupo I",
        teams: [
            { name: "França", confederation: "UEFA" },
            { name: "Senegal", confederation: "CAF" },
            { name: "Iraque", confederation: "AFC" },
            { name: "Noruega", confederation: "UEFA" }
        ]
    }
];

// Função para renderizar os cards na tela
function renderGroups(data) {
    const container = document.getElementById('groups-grid');
    container.innerHTML = ''; // Limpa o container antes de renderizar

    data.forEach(group => {
        // Cria o elemento do card do grupo
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';

        // Estrutura interna do card
        let teamsHTML = '';
        group.teams.forEach((team, index) => {
            teamsHTML += `
                <li class="team-item">
                    <div class="team-info">
                        <span class="team-position">${index + 1}</span>
                        <span class="team-name">${team.name}</span>
                    </div>
                    <span class="badge ${team.confederation}">${team.confederation}</span>
                </li>
            `;
        });

        groupCard.innerHTML = `
            <div class="group-header">${group.name}</div>
            <ul class="teams-list">
                ${teamsHTML}
            </ul>
        `;

        container.appendChild(groupCard);
    });
}

// Inicializa a renderização quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    renderGroups(groupsData);
    
    // Pequena lógica interativa para troca visual das abas de navegação
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            // Aqui futuramente você pode aplicar filtros baseados nos dados
            // Ex: filtrar se clicou em "A-D", "E-H", etc.
        });
    });
});