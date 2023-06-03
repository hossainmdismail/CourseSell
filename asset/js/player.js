const 
container = document.querySelector('.ek_vPlayer'),
mainVideo = container.querySelector('video'), 
PlayProgress = container.querySelector('.ek_vTimeProgressBar'), 
volumes = container.querySelector('.volume'), 
volumeProgress = container.querySelector('.ek_volumeRange'), 
skipForward = container.querySelector('.ek_skipForward'), 
skipBackward = container.querySelector('.ek_skipBackward'), 
playPaus = container.querySelector('.ek_playPause i');
miniScreen = container.querySelector('.ek_miniScreen i');

mainVideo.addEventListener('timeupdate',(e)=>{
    let {currentTime, duration} = e.target;
    let percent = (currentTime / duration) * 100;
    PlayProgress.style.width = `${percent}%`; //Passing percent as progress
});

playPaus.addEventListener('click',playVideo);

function playVideo() {
    //Play video if pasued
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
}

//Skipe 
skipForward.addEventListener('click',()=>{ //skipForward
    mainVideo.currentTime += 5;
});

skipBackward.addEventListener('click',()=>{ //skipBackward
    mainVideo.currentTime -= 5;
});

//volume
volumes.addEventListener('click',()=>{
    if (!volumes.classList.contains('fa-volume-high')) {
        mainVideo.volume = 1;
        volumes.classList.replace('fa-volume-xmark','fa-volume-high');
        volumeProgress.value = 100;
    }else{
        mainVideo.volume = 0.0;
        volumes.classList.replace('fa-volume-high','fa-volume-xmark');
        volumeProgress.value = 0;
    }
});
volumeProgress.addEventListener('input', e =>{
    mainVideo.volume = e.target.value;
    if (e.target.value == 0) {
        volumes.classList.replace('fa-volume-high','fa-volume-xmark');
    }else{
        volumes.classList.replace('fa-volume-xmark','fa-volume-high');
    }

});

//Mini Scrren 
miniScreen.addEventListener('click',()=>{
    mainVideo.requestPictureInPicture();
});

//Play Pause
mainVideo.addEventListener('play',()=>{ //if the video is playing Icon will change
    playPaus.classList.replace('fa-play','fa-pause');
});

mainVideo.addEventListener('pause',()=>{ //if the video is paused  Icon will change
    playPaus.classList.replace('fa-pause','fa-play');
});

