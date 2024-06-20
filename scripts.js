// scripts.js

// Abre o modal
function openModal(folderId) {
    var modal = document.getElementById("gallery-modal");
    modal.style.display = "block";
    document.getElementById(folderId).style.display = "block";
}

// Fecha o modal
function closeModal() {
    var modal = document.getElementById("gallery-modal");
    modal.style.display = "none";
    var contents = document.getElementsByClassName("modal-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
}

// Adiciona event listeners às pastas
document.querySelectorAll('.gallery-folder').forEach(function(folder) {
    folder.addEventListener('click', function() {
        openModal(this.getAttribute('data-folder'));
    });
});

// Fecha o modal ao clicar no "x"
document.querySelector('.close').addEventListener('click', function() {
    closeModal();
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    var modal = document.getElementById("gallery-modal");
    if (event.target == modal) {
        closeModal();
    }
});
