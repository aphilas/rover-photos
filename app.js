import express from 'express'
import parser from 'body-parser'
import { apiRouter } from './routes/api.route'

const PORT = process.env.PORT || 5000

const app = express()

app.use(parser.json())
app.use(parser.urlencoded({extended: false}))

// api route
app.use('/api', apiRouter)

// testing page
app.get('/', (req, res) => {
  res.send('Hello from Rover Photos!')
})

app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))