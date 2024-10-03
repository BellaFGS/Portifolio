const projectTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");

const projectData = [
    {
        title: "Título do Projeto 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 1 detalhes..."
    },
    {
        title: "Título do Projeto 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 2 detalhes..."
    },
    {
        title: "Título do Projeto 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto 3 detalhes..."
    }
];

document.getElementById("projectCarousel").addEventListener('slide.bs.carousel', function (e) {
    const nextIndex = e.to;
    projectTitle.textContent = projectData[nextIndex].title;
    projectDetails.textContent = projectData[nextIndex].description;
});