import express from 'express'
import router from './routes'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  next()
})
app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log(`🚀 Server is runnig at: http://localhost:3001/`)
})