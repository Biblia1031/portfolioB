$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop())
    })
})

const items = document.querySelectorAll('.gallery-collection li')
const close = document.querySelector('button')
const popup = document.querySelector('.popup')

items.forEach((el)=>{
    el.addEventListener('mouseenter', () => {
        el.querySelector('video').play()
    })

    el.addEventListener('mouseleave', () => {
        const video = el.querySelector('video')
        video.pause()
        video.currentTime = 0
    })

    el.addEventListener('click', (e) => {
        const title = el.querySelector('h3').innerText
        const text = el.querySelector('p').innerText
        const videosrc = el.querySelector('video').getAttribute('src')

        const popupVideo = popup.querySelector('video')
        popup.querySelector('.txt h2').innerText = title
        popup.querySelector('.txt p').innerText = text
        popupVideo.setAttribute('src', videosrc)
        
        popupVideo.load()
        popup.classList.add('on')
        popupVideo.muted = false 
        popupVideo.volume = 0.5 
        popupVideo.play()
    })
})

close.addEventListener('click', ()=>{
    popup.classList.remove('on')
    const popupVideo = popup.querySelector('video')
    popupVideo.pause()
    popupVideo.currentTime = 0
})



$(document).ready(function(){
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()+95;
        
        if (scrollTop >= 6300) {
            $('header ul li').removeClass('click'); 
            $('header ul li').eq(4).addClass('click');
        } else if (scrollTop >= 5117) {
            $('header ul li').removeClass('click'); 
            $('header ul li').eq(3).addClass('click'); 
        } else if (scrollTop >= 3200) {
            $('header ul li').removeClass('click'); 
            $('header ul li').eq(2).addClass('click'); 
        } else if (scrollTop >= 1100) {
            $('header ul li').removeClass('click'); 
            $('header ul li').eq(1).addClass('click'); 
        } else {
            $('header ul li').removeClass('click'); 
            $('header ul li').eq(0).addClass('click');
        }
    });
    
  
  
  
  
  
  
    // 클릭했을 때 위치 이동, click
    $('header ul li').click(function(){
        $(this).addClass('click').siblings().removeClass('click');
    
        let idx = $(this).index();
        console.log(idx);
    
        if(idx === 1) {
            $('html, body').animate({
                scrollTop: 1900
            }, 1000);
        } else if(idx === 2) {
            $('html, body').animate({
                scrollTop: 4600
            }, 1000);
        } else if(idx === 3) {
            $('html, body').animate({
                scrollTop: 5300
            }, 1500);
        } else if(idx === 4) { 
            $('html, body').animate({
                scrollTop: 6300
            }, 1500);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        }
    });
  
  
  
  })
  document.addEventListener('DOMContentLoaded', function() {
    
    var goTopButton = document.querySelector('.go-top');

    
    goTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});