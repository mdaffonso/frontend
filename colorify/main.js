const hue = 0
const body = document.querySelector('body')
const title = document.querySelector('#title')

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150
    y = y < 1 ? 1 : y
    const h = hue + y * 10
    body.style.backgroundColor = `hsl(${h}, 100%, 70%)`
    title.style.color = `hsl(${h}, 65%, 40%)`
})