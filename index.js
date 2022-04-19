const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(() => {
  header.innerHTML = `
    <img
    src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb 2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MH  w=1000&q=80"
    alt="">
  `
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, inventore'
  profile_img.innerHTML = `
    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="">
  `
  name.innerHTML = 'John Doe'
  date.innerHTML = 'Nov, 9, 2022'
  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
  animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'))
}, 2500)