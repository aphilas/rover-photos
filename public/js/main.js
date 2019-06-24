const formEl = document.getElementById('photos-form')
const endpoint = 'http://localhost:5000/api'

const fetchLinks = async (params) => {
  const url = new URL(endpoint)

  url.search = params
  console.log(url.toString())

  let response = await fetch(url, 
    {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}})
    .catch(err => console.log(err))
    
  let data = await response.json()

  console.log(data)
}

const handleSubmit = async (event) => {
  event.preventDefault()

  // console.log(getLink)

  const formData = new FormData(event.target)
  const getParams = new URLSearchParams(formData)
  fetchLinks(getParams)
}

formEl.addEventListener('submit', handleSubmit)