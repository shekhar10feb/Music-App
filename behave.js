const music  = document.querySelector('audio');
const img    = document.querySelector('img');
const play   = document.querySelector('#play');
const film   = document.querySelector('#film');
const artist = document.querySelector('#artist');
const title  = document.querySelector('#title');
const prev   = document.querySelector('#prev');
const next   = document.querySelector('#next');
const btn   = document.querySelector('.btn');
const music_container = document.querySelector('.music_container');

// songs description 
const songs = [
    {
        name: 'song-1',
        title: 'Goldn',
        artist: 'Praz Khanal',
        image: 'photo-1'
    },
    {
        name: 'song-2',
        title: 'Powerful Stylish Stomp',
        artist: 'Mark July',
        image: 'photo-2'
    },
    {
        name: 'song-3',
        title: 'Happy Day',
        artist: 'Stock Audios',
        image: 'photo-3'
    },
    {
        name: 'song-4',
        title: 'The Cradle of Your Soul',
        artist: 'Lemon Music Studios',
        image: 'photo-4'
    }
];

let isPlaying = false;

// for play functionality 
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('animate');

    // if the song ended, start the next song 
    music.addEventListener('ended', () => {
        setTimeout(nextSong, 3000);
    });
};

// for pause functionality 
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('animate');
};

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

// changing the song data
const loadSong = (songs) => {
    title.textContent  = songs.title;
    artist.textContent = songs.artist;
    music.src = 'songs/' + songs.name + '.mp3';
    img.src   = 'photos/' + songs.image + '.jpg';
}

let songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

// next function 
next.addEventListener('click', nextSong);

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

// previous function 
prev.addEventListener('click', prevSong);

// day mode and night mode 
btn.addEventListener('click', () => {
    music_container.classList.toggle('dark');
    btn.classList.toggle('light'); 

    if(btn.innerHTML === 'Night Mode') {
        btn.innerHTML = 'Day Mode';
        title.style.color = '#fff';
        prev.style.color = '#fff';
        next.style.color = '#fff';
    } else {
        btn.innerHTML = 'Night Mode';
        title.style.color = '#171717';
        prev.style.color = '#171717';
        next.style.color = '#171717';
    }
});