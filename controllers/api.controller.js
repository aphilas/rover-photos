const apiController = (req, res) => {
  /* 
    request params:

    sol (rotation or day from landing) - 0 ...
    camera - FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM, [PANCAM, MINITES]

  */

  const sol = req.params.sol || 0
  const camera = req.params.camera || 'navcam'

  res.send(`You have requested for photos from camera ${ camera } and sol ${ sol }`)
}

export { apiController }