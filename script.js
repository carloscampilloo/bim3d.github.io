
// Images per project
const projectImages = [
    [ // Project 0
        "portfolio_images/EST_CARPORT_1.png",
        "portfolio_images/EST_CARPORT_2.png",
        "portfolio_images/EST_CARPORT_4.png"
    ],
    [ // Project 1
        "images/project2-1.jpg",
        "images/project2-2.jpg",
        "images/project2-3.jpg"
    ]
];

// Track image index per project
let currentIndexes = [0, 0]; // One index per project

// Update function for a specific project
function updateProjectImage(projectIndex) {
    currentIndexes[projectIndex] = (currentIndexes[projectIndex] + 1) % projectImages[projectIndex].length;

    const imgTag = document.querySelector(`.slider-image[data-project="${projectIndex}"]`);
    imgTag.src = projectImages[projectIndex][currentIndexes[projectIndex]];
}

// Loop: update every 4 seconds per project
setInterval(() => updateProjectImage(0), 4000); // Project 0
setInterval(() => updateProjectImage(1), 4000); // Project 1


// MODAL DE PAGINA INTERACTIVA //
let imagenesProyecto = [];
let indiceImagen = 0;

document.querySelectorAll(".project").forEach(proj => {
  proj.addEventListener("click", () => {
    const titulo = proj.dataset.title;
    const descripcion = proj.dataset.description;
    imagenesProyecto = proj.dataset.images.split(",");
    indiceImagen = 0;

    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalTexto").textContent = descripcion;
    document.getElementById("imagenActual").src = imagenesProyecto[indiceImagen];

    document.getElementById("modalProyecto").style.display = "block";
  });
});

function cerrarModal() {
  document.getElementById("modalProyecto").style.display = "none";
}

function cambiarImagen(direccion) {
  indiceImagen += direccion;
  if (indiceImagen < 0) indiceImagen = imagenesProyecto.length - 1;
  if (indiceImagen >= imagenesProyecto.length) indiceImagen = 0;
  document.getElementById("imagenActual").src = imagenesProyecto[indiceImagen];
}

