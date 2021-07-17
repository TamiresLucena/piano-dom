const keys = document.querySelectorAll('.key')

function playNote(event) {
    let key = event.type === 'keydown' ? event.key : event.target.dataset.key
    let audio = document.querySelector(`audio[data-key=${key}]`)

    console.log(event.type, ':', key)
    addPlayingClass(key)
    audio.currentTime = 0
    audio.play()
}

//adiciona classe 'playing' nas teclas pressionadas
function addPlayingClass(key) {
    var element = document.querySelector(`div[data-key=${key}]`)
    element.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')

}

//keydown as telas do teclado físico
window.addEventListener('keydown', playNote)

//click com o mouse e remoção de 'playing'
keys.forEach((key) => {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
})