import { getPhotoLinks } from './getPhotoLinks'

const apiController = async (req, res) => {
  const sol = req.body.sol || 0
  const camera = req.body.camera || 'navcam'

  const links = await getPhotoLinks(sol, camera).catch(err => console.log(err))

  res.send(JSON.stringify(links))
}

export { apiController }

  /* 
    request params:

    sol (rotation or day from landing) - 0 ...
    camera - FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM, [PANCAM, MINITES]

  */