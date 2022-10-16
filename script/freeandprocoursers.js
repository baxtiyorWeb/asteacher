let menu = document.querySelector('.menu')
let header  = document.querySelector('header')
let close = document.querySelector('.close')
close.addEventListener('click', function(){
    header.style.display = 'none'
})
menu.addEventListener('click', function(){
    header.style.display = 'block'
    header.style.position = 'fixed'
    header.style.zIndex = '888'
})