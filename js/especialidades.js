document.addEventListener("DOMContentLoaded", fetchItems);

async function fetchItems() {
    try {
        const response = await fetch('http://localhost:8080/paginaEspecialidades');
        if (!response.ok) throw new Error("Erro ao carregar os dados.");

        items = await response.json(); // Assume que a resposta está no formato JSON


        mostrarProfissionais(items);

        console.log(items);

    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

function mostrarProfissionais(items) {
    const especialidades = document.getElementById("section-id");

    apoio = 1;

    items.forEach(esp => {

        console.log(esp);
        
        const divCard = document.createElement("div");
        divCard.className = "div-card";


        const nomeEspecialidade = document.createElement("h3");
        nomeEspecialidade.textContent = esp.especialidade;
        nomeEspecialidade.className = "nome-especialidade";

        const descricaoEspecialidade = document.createElement("p");
        descricaoEspecialidade.textContent = esp.descricao;
        descricaoEspecialidade.className = "descricao-especialidade";

        const additionalInformation = document.createElement("div");
        additionalInformation.className = "additional-information";
    
        const numProfissionais = document.createElement("p");
        numProfissionais.textContent = esp.numeroMedicos + " médico(s) disponível(is)";

        const minPreco = document.createElement("p");
        minPreco.textContent = "A partir de R$" + esp.precoMinimo.toFixed(2);


        console.log(esp.numeroMedicos);
        console.log(esp.precoMinimo);

        additionalInformation.appendChild(numProfissionais);
        additionalInformation.appendChild(minPreco);

        divCard.appendChild(nomeEspecialidade);
        divCard.appendChild(descricaoEspecialidade);
        divCard.appendChild(additionalInformation);

        especialidades.appendChild(divCard);

        apoio++
    });
}