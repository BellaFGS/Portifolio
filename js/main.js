const projectTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");

const projectData = [
    {
        title: "Título do Projeto 1",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero, recusandae, molestiae facilis sapiente dicta suscipit incidunt illum animi molestias sequi porro tempora explicabo repudiandae doloribus officia. Laborum, quaerat aliquid."
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