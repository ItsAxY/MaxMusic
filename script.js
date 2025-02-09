document.addEventListener("DOMContentLoaded", function () {
    const songList = document.getElementById("song-list");
    const audioPlayer = document.getElementById("audio-player");

    const songs = [
        "song1.mp3",
        "song2.mp3",
        "song3.mp3",
        "song4.mp3",
        "song5.mp3"
    ];

    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        li.addEventListener("click", () => {
            audioPlayer.src = `songs/${song}`;
            audioPlayer.play();
        });
        songList.appendChild(li);
    });
});
