let menuBtn = document.querySelector('#menubtn')
let menuBtnclass = document.querySelector('.bx-menu')
let rightMenu = document.querySelector('.rightMenu')
menuBtn.addEventListener('click', function () {
    rightMenu.classList.toggle('menulessons')
    // let blockedPage = document.querySelector(".blockedPage")
})

let runCode = document.querySelector('.runCode')
let codeEditors = document.querySelector('#codeEditors')
let runFinishedElement = document.querySelector('.runFinishedElement')
let progress = document.querySelector('.progress')
let enter= document.querySelector('.enter')
enter.style.opacity = '0'
progress.style.opacity= '0'
progress.style.transform = `${'translateY(-30px)'}`
runCode.addEventListener('click', function () {
    progress.style.opacity= '1'
    progress.style.transform = `${'translateY(0px)'}`
    
    runCode.style.transform = `${'translateY(-40px)'}`
    setTimeout(() => {
        runCode.style.transform = `${'translateY(0px)'}`
        runFinishedElement.innerHTML = codeEditors.value;
        runCode.style.opacity = '1'
        progress.style.opacity = '0'
        if(codeEditors.value === ''){
            enter.innerHTML = 'iltimos biror nima kiriting'
            enter.style.opacity ='1'
        }
        else if(codeEditors.value === codeEditors.value){
            enter.style.opacity ='0'
        }
    
    }, 1000);
    runCode.style.opacity= '0'
})

