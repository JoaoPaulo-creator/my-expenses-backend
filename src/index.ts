import express from 'express'
import router from './routes'

const app = express()

app.use((req, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', '*')
	response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Max-Age', '20')

  next()
})

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log(`🚀 Server is runnig at: http://localhost:3001/`)
})