import express from 'express'

let app = express()

app.get('/', (req, res) => {
  res.send('Hello from Rover Photos!')
})

const port = 3000

app.listen(port)



