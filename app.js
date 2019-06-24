import express from 'express'
import parser from 'body-parser'
import { apiRouter } from './routes/api.route'

const PORT = process.env.PORT || 5000

const app = express()

app.use(parser.json())
app.use(parser.urlencoded({extended: false}))

// static files - 'public' not part of url
app.use(express.static('public'))

// api route
app.use('/api', apiRouter)

// front end
app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))