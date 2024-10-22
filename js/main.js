const projectTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");

const projectData = [
    {
        title: "Minha Jornada",
        description: "Nestas imagens vou mostrar a vocês como foi a minha aventura des do 1º ano até o 3º ano de uma forma simples mas também nostalgica ;D"
    },
    {
        title: "Primeiro encontro (25/03/2022)",
        description: " O primeiro encontro do P-tech foi fundamental para delinear a estrutura das futuras palestras e dinâmicas. Em um ambiente colaborativo, discutimos como as palestras seriam direcionadas ao desenvolvimento profissional e à troca de conhecimentos. A proposta incluía convidar especialistas para compartilhar suas experiências e insights, enquanto as dinâmicas seriam interativas, incentivando a participação ativa de todos os presentes. Também decidimos que as sessões focariam em habilidades práticas, como comunicação, liderança e tecnologia. O objetivo era criar um espaço de aprendizado enriquecedor, onde todos pudessem contribuir e evoluir coletivamente."
    },
    {
        title: "Conduta Ética (19/04/2022)",
        description: "A conduta ética no ambiente de trabalho é fundamental para preservar a integridade e a confiança nas relações profissionais. Durante uma dinâmica, discutimos um cenário desafiador: um funcionário de um banco, responsável por transações financeiras, enfrenta a difícil escolha de desviar um centavo de cada conta para cobrir o tratamento médico urgente de um parente. Esse caso destaca o conflito entre valores pessoais e responsabilidades profissionais. Embora a necessidade de ajudar um familiar seja compreensível, desviar fundos representa uma violação ética que pode gerar consequências legais e prejudicar a reputação da instituição. A dinâmica nos fez refletir sobre a importância de manter a ética, mesmo em situações de pressão, e buscar alternativas que respeitem tanto a legislação quanto os princípios éticos."
    },
    {
        title: "Visita técnica na Eduzz (13/05/2022)",
        description: "Um dia de trabalho na EDUZZ é marcado por dinamismo e colaboração. As equipes iniciam o dia com breves reuniões para alinhar tarefas e objetivos. O ambiente é ágil, com grupos interdisciplinares atuando em diversos projetos, que vão desde marketing até o desenvolvimento de plataformas. Ao longo do dia, os colaboradores participam de atividades como sessões de brainstorming, análise de dados e suporte a parceiros. A EDUZZ valoriza a inovação, promovendo o compartilhamento de ideias e o aprendizado contínuo. O clima é leve e descontraído, com áreas de descompressão e interação entre equipes, reforçando um forte senso de comunidade."
    },
    {
        title: "Título do Projeto 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 9",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 13",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
];

document.getElementById("projectCarousel").addEventListener('slide.bs.carousel', function (e) {
    const nextIndex = e.to;
    projectTitle.textContent = projectData[nextIndex].title;
    projectDetails.textContent = projectData[nextIndex].description;
});