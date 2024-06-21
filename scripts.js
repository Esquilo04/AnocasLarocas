// scripts.js

// Função para alternar play/pause do áudio
function togglePlayPause(audioId) {
    var audio = document.getElementById(audioId);
    var button = document.querySelector(`button[data-audio="${audioId}"] svg`);

    if (audio.paused) {
        audio.play();
        button.innerHTML = `
            <path xmlns="http://www.w3.org/2000/svg" d="M14 21V3L5 12l9 9z"/>
        `; // Altera o ícone para pause
    } else {
        audio.pause();
        button.innerHTML = `
            <path xmlns="http://www.w3.org/2000/svg" d="M8 5v14l11-7z"/>
        `; // Altera o ícone para play
    }
}

// Event listeners para atualizar os botões quando o áudio termina
document.querySelectorAll('audio').forEach(function(audio) {
    audio.addEventListener('ended', function() {
        var button = document.querySelector(`button[data-audio="${audio.id}"] svg`);
        button.innerHTML = `
            <path xmlns="http://www.w3.org/2000/svg" d="M8 5v14l11-7z"/>
        `; // Volta o ícone para play
    });
});

// Função para abrir o modal
function openModal(folderId) {
    var modal = document.getElementById("gallery-modal");
    modal.style.display = "block";
    document.getElementById(folderId).style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("gallery-modal");
    modal.style.display = "none";
    var contents = document.getElementsByClassName("modal-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
}

// Adiciona event listeners às pastas para abrir o modal ao clicar
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

// Outras funções e event listeners do seu scripts.js
// ...