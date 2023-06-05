const 
container = document.querySelector('.ek_vPlayer'),
mainVideo = container.querySelector('video'), 
PlayProgress = container.querySelector('.ek_vTimeProgressBar'), 
playProgressFull = container.querySelector('.ek_vTimeline'), 
currentTimeInput = container.querySelector('.ek_currentTime'), 
currentTimeDuration = container.querySelector('.ek_duration'), 
volumes = container.querySelector('.volume'), 
volumeProgress = container.querySelector('.ek_volumeRange'), 
skipForward = container.querySelector('.ek_skipForward'), 
skipBackward = container.querySelector('.ek_skipBackward'), 
playPaus = container.querySelector('.ek_playPause i');
miniScreen = container.querySelector('.ek_miniScreen i');
fullScreen = container.querySelector('.ek_fullScreen i');

let formatTime = time => {
    //getting seconds,munite,hourese
    let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    if (hours == 0) {
        return `${minutes}:${seconds}`
    }
    return `${hours}:${minutes}:${seconds}`
}
mainVideo.addEventListener('timeupdate',(e)=>{
    let {currentTime, duration} = e.target;
    let percent = (currentTime / duration) * 100;
    PlayProgress.style.width = `${percent}%`; //Passing percent as progress
    currentTimeInput.innerHTML =formatTime(currentTime);
});
mainVideo.addEventListener('loadeddata' , e =>{
    currentTimeDuration.innerText = formatTime(e.target.duration);
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

//Main Progress
playProgressFull.addEventListener('click',e=>{
    let timelineWidth = e.target.clientWidth;

    mainVideo.currentTime = (e.offsetX / timelineWidth)*mainVideo.duration;
});

draggableProgressBar = e => {
    let timelineWidth = e.target.clientWidth;
    PlayProgress.style.width = `${e.offsetX}px`
    mainVideo.currentTime = (e.offsetX / timelineWidth)*mainVideo.duration;
};

playProgressFull.addEventListener('mousedown',() => {
    playProgressFull.addEventListener('mousemove', draggableProgressBar);
});

container.addEventListener('mouseup',() => {
    playProgressFull.removeEventListener('mousemove', draggableProgressBar);
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

//Full Screen
fullScreen.addEventListener('click',()=>{
    container.classList.toggle('fullscreen');
    if (document.fullscreenElement) {
        fullScreen.classList.replace("fa-compress","fa-expand");
        return container.exitFullscreen;
    }
    fullScreen.classList.replace("fa-expand","fa-compress");
    container.requestFullscreen();

});

//Play Pause
mainVideo.addEventListener('play',()=>{ //if the video is playing Icon will change
    playPaus.classList.replace('fa-play','fa-pause');
});

mainVideo.addEventListener('pause',()=>{ //if the video is paused  Icon will change
    playPaus.classList.replace('fa-pause','fa-play');
});

