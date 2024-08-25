
let scroll = document.getElementById('scroll')
let body = document.querySelector('body')

scroll.addEventListener('click', ()=>{
    scroll.classList.toggle('dark')
    body.classList.toggle('dark')
})