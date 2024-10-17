const projectTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");

const projectData = [
    {
        title: "Minha Jornada",
        description: "Minha jornada de três anos na ETEC Fernando Prestes, extensão Fatec, foi uma verdadeira aventura de descobertas, aprendizado e crescimento. Durante esse tempo, participei de palestras envolventes e atividades que estimularam minha mente e ampliaram meus horizontes. Cada interação, cada novo desafio me ajudou a amadurecer e fortalecer o meu intelecto. Foi uma fase repleta de experiências inesquecíveis, nas quais tive o privilégio de colaborar com grandes empresas parceiras como Eduzz, Tegra, Uno, Iochpe e Itix. Agora, através deste portfólio web, convido você a explorar essas memórias de forma dinâmica e interativa. Basta navegar pelo carrossel de imagens para descobrir os projetos que fizeram parte dessa trajetória incrível. Como diria Albert Einstein,'A criatividade é a inteligência se divertindo' — e foi exatamente isso que vivi durante essa fase inesquecível!  Obrigada por acompanhar essa jornada!"
    },
    {
        title: "Título do Projeto 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 2 detalhes..."
    },
    {
        title: "Título do Projeto 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    },
    {
        title: "Título do Projeto 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
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