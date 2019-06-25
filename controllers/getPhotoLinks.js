import fetch from 'node-fetch'

const getPhotoLinks = async (sol, camera) => {
  const endpoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${ sol }&camera=${ camera }&api_key=DEMO_KEY`
  let linksArr = []

  const response = await fetch(endpoint).catch(err => console.log(err))
  const data = await response.json().catch(err => console.log(err))

  if (data.photos) data.photos.forEach(photo => linksArr.push(photo.img_src))

  return linksArr
}

export { getPhotoLinks }