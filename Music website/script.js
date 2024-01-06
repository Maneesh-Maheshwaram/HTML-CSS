document.addEventListener('DOMContentLoaded', function () {
    // Sample playlist data
    const playlist = [
        { title: 'Song 1', artist: 'Artist 1', audio: '[iSongs.info] 01 - Adiga Adiga.mp3' },
        { title: 'Song 2', artist: 'Artist 2', audio: '[iSongs.info] 01 - Adiga Adiga.mp3' },
        { title: 'Song 3', artist: 'Artist 3', audio: '[iSongs.info] 01 - Adiga Adiga.mp3' },
        // Add more songs as needed
    ];

    const audioPlayer = document.querySelector('audio');
    const albumCover = document.querySelector('.album-cover');
    const songTitle = document.querySelector('.song-info h3');
    const artistName = document.querySelector('.song-info p');
    const playlistItems = document.querySelectorAll('.playlist li');

    let currentSongIndex = 0;

    function loadSong(index) {
        const song = playlist[index];
        audioPlayer.src = song.audio;
        albumCover.style.backgroundImage = `url('images/album-cover-${index + 1}.jpg')`; // Replace with actual image paths
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
    }

    function playPauseSong() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
    }

    // Event listeners
    audioPlayer.addEventListener('ended', nextSong);

    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            audioPlayer.play();
        });
    });

    document.querySelector('.player').addEventListener('click', playPauseSong);
    document.querySelector('.player').addEventListener('contextmenu', (e) => {
        e.preventDefault();
        prevSong();
    });
});
