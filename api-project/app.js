require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

let accountSid = process.env.TWILIO_ACCOUNT_SID
let authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

// This is a single page application and it's all rendered in public/index.html
app.use(express.static('public'))
// Parse the body of requests automatically
app.use(bodyParser.json())

app.get('/api/compliments', async (req, res) => {
  // TODO: Get a list of messages sent from a specific number
  try {
    const sentMessages = await client.messages.list()
    // TODO: Gather only the body of those messages for sending to the client
    const compliments = sentMessages.map((message) => message.body)
    res.json(compliments)
  } catch (error) {
    console.log(error)
  }
})

app.post('/api/compliments', async (req, res) => {
  const to = req.body.to
  const from = process.env.TWILIO_PHONE_NUMBER
  const body = `${req.body.sender} says: ${req.body.receiver} is ${req.body.compliment}. See more compliments at ${req.headers.referer}`
  // TODO: Send a message
  res.json({ success: false })
})

app.listen(port, () => console.log(`Prototype is listening on port ${port}!`))
