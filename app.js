function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string vazia ou só espaços
    if (!campoPesquisa.trim()) {
        section.innerHTML = `
            <div class="item-resultado">
                <div class="item-header">
                    <div class="item-title">
                        <h2>Campo de Pesquisa Vazio</h2>
                    </div>
                </div>
                <p>Por favor, insira o nome ou tipo de um Pokémon para realizar a busca.</p>
                <p>Certifique-se de que o campo de pesquisa não está vazio antes de tentar novamente.</p>
            </div>
        `;
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let nome = dado.Nome.toLowerCase();
        let tipo = dado.Tipo.toLowerCase();

        // Se nome inclui campoPesquisa ou tipo inclui campoPesquisa
        if (nome.includes(campoPesquisa) || tipo.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <div class="item-header">
                        <img src="${dado.Foto}" alt="${dado.Nome}" />
                        <div class="item-title">
                            <h2>${dado.Nome}</h2>
                            <span class="item-id">Nº ${dado.ID}</span>
                        </div>
                    </div>
                    <div class="item-info-container">
                        <div class="item-info">
                            <div class="info-column">
                                <p><strong>Tipo:</strong> ${dado.Tipo}</p>
                                <p><strong>HP:</strong> ${dado.HP}</p>
                                <p><strong>Ataque:</strong> ${dado.Ataque}</p>
                                <p><strong>Defesa:</strong> ${dado.Defesa}</p>
                            </div>
                            <div class="info-column">
                                <p><strong>Velocidade:</strong> ${dado.Velocidade}</p>
                                <p><strong>Altura:</strong> ${dado.Altura} m</p>
                                <p><strong>Peso:</strong> ${dado.Peso} kg</p>
                                <p><strong>Habitat:</strong> ${dado.Habitat}</p>
                            </div>
                            <p class="evolucoes-container">
                                <strong>Evoluções:</strong>
                                ${dado.Evolucoes.map((evolucao, index) => {
                                    const seta = index < dado.Evolucoes.length - 1 ? '➡️' : '';
                                    return `<img src="${evolucao}" alt="Evolução" class="evolucao-img">${seta}`;
                                }).join('')}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = `
            <div class="item-resultado">
                <div class="item-header">
                    <div class="item-title">
                        <h2>Nenhum Pokémon encontrado</h2>
                    </div>
                </div>
                <p>Por favor, verifique o nome ou tipo digitado e tente novamente.</p>
                <p>Precisa de ajuda? Consulte a lista completa de Pokémon.</p>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
