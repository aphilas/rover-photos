const formEl = document.getElementById('photos-form')

// section for all images
const imagesEl = document.getElementById('images')

const endpoint = 'http://localhost:5000/api'

// add message to imagesEl element - for loading/error/result messages
const addMessage = text => {
  // reset imagesEl
  imagesEl.innerHTML = ''

  const el = document.createElement('p')
  el.innerHTML = text
  imagesEl.appendChild(el)
}

const renderImages = (links) => {
  addMessage(`Your search returned ${ links.length } photos.`)

  // document fragement to speed up adding images to DOM
  const fragment = document.createDocumentFragment()

  links.forEach(link => {
    const container = document.createElement('div')
    container.classList.add('image-container')

    const image = document.createElement('img')
    image.src = link
    image.classList.add('image') 

    container.appendChild(image)
    fragment.appendChild(container)
  })

  imagesEl.appendChild(fragment)
}

const fetchLinks = async (params) => {
  // loading state
  addMessage(`Loading ...`)

  const url = new URL(endpoint)

  // add url params
  url.search = params

  let response = await fetch(url, 
    {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}})
    .catch(err => console.log(err))

  let links = await response.json().catch(err => {})

  if (links && links.length > 0) {
    renderImages(links)
  } else {
    addMessage(`Sorry, we couldn't find any image for your search`)
  }
}

const handleSubmit = async (event) => {
  event.preventDefault()

  // console.log(getLink)

  // get form data
  const formData = new FormData(event.target)

  // create url from form data
  const getParams = new URLSearchParams(formData)

  // make request to custom api
  fetchLinks(getParams)
}

formEl.addEventListener('submit', handleSubmit)

// console.clear()