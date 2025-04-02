document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".draggable");
    const dropbox = document.getElementById("dropbox");
    const audioPlayer = document.getElementById("audioPlayer");

    images.forEach(image => {
        image.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("audio", this.dataset.audio);
        });
    });

    dropbox.addEventListener("dragover", function (event) {
        event.preventDefault();
        this.style.borderColor = "blue";
    });

    dropbox.addEventListener("dragleave", function () {
        this.style.borderColor = "#333";
    });

    dropbox.addEventListener("drop", function (event) {
        event.preventDefault();
        this.style.borderColor = "#333";
        
        const audioSrc = event.dataTransfer.getData("audio");
        if (audioSrc) {
            audioPlayer.src = audioSrc;
            audioPlayer.play();
        }
    });
});