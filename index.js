let imageCover = document.querySelector('.cover')
let play = document.querySelector('.play')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let cover = document.querySelector('.cover')
let title = document.querySelector('.title')
let audio = document.querySelector('audio')
let widthProgress = document.querySelector('.widthProgress')
let progressContainer = document.querySelector('.progress-container')
let playCotainer = document.querySelector('.playCotainer')


let index = 0


let songs = ['babak amini','ChrisDeBurge','Tom Odell']



playSongs(songs[index])

function playSongs(song){
    title.innerHTML= song
    audio.src = `Music/${song}.mp3`
    cover.src = `cover/${song}.jfif`
}



play.addEventListener('click',function(){
    if(play.children[0].className ==='fa-solid fa-play'){
        // console.log('true');
        imageCover.classList.add('animationPlay')
        play.children[0].classList.remove('fa-play')
        play.children[0].classList.add('fa-pause')
        playCotainer.style.display='block'
        playCotainer.style.transform ='translateY(50%)';
    
        audio.play()
        
    }else if(play.children[0].className ==='fa-solid fa-pause'){
        // console.log('false');
        imageCover.classList.remove('animationPlay')
        play.children[0].classList.remove('fa-pause')
        play.children[0].classList.add('fa-play')
        playCotainer.style.display='none'
        audio.pause()
        
    }
    
})

audio.addEventListener('timeupdate',function(event){
    let currentTime = event.srcElement.currentTime;
    let duration = event.srcElement.duration
    
    //    console.log(currentTime);
    //    console.log(duration);
    
    let totalWidthPlay= Math.floor((currentTime/duration)*100)
    widthProgress.style.width = totalWidthPlay + '%'
    console.log(widthProgress.style.width);
    if(totalWidthPlay===100){
        imageCover.classList.remove('animationPlay')
        play.children[0].classList.remove('fa-pause')
        play.children[0].classList.add('fa-play')
    }
})


function setProgress(e){
    let width = this.clientWidth   
    let clickX = e.offsetX;
    let duration = audio.duration
    console.log(duration);
    
    audio.currentTime = (clickX/width) * duration
}

function nextSong(){
    index++
    if(index > songs.length -1){
        console.log('next');
        index = 0
        console.log(index);
        
    }
    playSongs(songs[index])
    audio.play()
}
function prevSong(){
   index--
   if(index < 0){
    index = songs.length - 1
    console.log('prev');
}
 playSongs(songs[index])
 audio.play()

}




prev.addEventListener('click',prevSong)
next.addEventListener('click',nextSong)
progressContainer.addEventListener('click',setProgress)