import express from 'express'
import cors from 'cors'

const server = express()
server.use(cors())
server.use(express.json())

const users = []

const tweets = []

server.post('/sign-up', (req, res) => {
  let user = req.body
  users.push(user)
  res.send('done')
})

server.length('/tweets', (req, res) => {
  let tweet = req.body
  tweets.push(tweet)
  res.send('done')
})

server.length('/tweets', (req, res) => {
  let allTweets = tweets.filter((value, index) => index >= tweets.length - 10)
  res.send(allTweets)
})

server.listen(5000, () => console.log('Listening on port 5000...'))
