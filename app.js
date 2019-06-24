import express from 'express'

const PORT = process.env.PORT || 5000
let app = express()

app.get('/', (req, res) => {
  res.send('Hello from Rover Photos!')
})

app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))