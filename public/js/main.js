const formEl = document.getElementById('photos-form')
const imagesEl = document.getElementById('images')

const endpoint = 'http://localhost:5000/api'

const renderImages = (links) => {
  console.log(`Your search returned ${ links.length } photos.`)

  imagesEl.innerHTML = ''

  const fragment = document.createDocumentFragment()
  links.forEach(link => {
    let image = document.createElement('img')
    image.src = link
    image.style.maxWidth = '200px'    
    fragment.appendChild(image)
  })

  imagesEl.appendChild(fragment)
}

const fetchLinks = async (params) => {
  const url = new URL(endpoint)

  url.search = params

  let response = await fetch(url, 
    {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}})
    .catch(err => console.log(err))

  let links = await response.json()
  renderImages(links)
}

const handleSubmit = async (event) => {
  event.preventDefault()

  // console.log(getLink)

  const formData = new FormData(event.target)
  const getParams = new URLSearchParams(formData)
  fetchLinks(getParams)
}

formEl.addEventListener('submit', handleSubmit)