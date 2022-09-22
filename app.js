const express = require('express')
const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')

const app = express()
const port = 3000


const APP_ID = 'f59a9df61e6149b69c0c3e681f8282ad'
const APP_CERTIFICATE = 'b1ef9658de0d4eb788393157a7f44550'

app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).send('This is my express app')
})


app.get('/token', async (req, res) => {
    let CHANNEL_NAME = 'main'
    let uid = 0
    let role = RtcRole.SUBSCRIBER
    let expireTime = 36000
    let currentTime = Math.floor(Date.now() / 1000)
    let privilagedExpireTime = currentTime + expireTime

    const token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, CHANNEL_NAME, uid, role, privilagedExpireTime)

    res.status(200).send(token)
})

app.get('/token_rtm', async (req, res) => {
    let CHANNEL_NAME = 'main'
    let account = 'dennis'
    let role = RtmRole.SUBSCRIBER
    let expireTime = 36000
    let currentTime = Math.floor(Date.now() / 1000)
    let privilagedExpireTime = currentTime + expireTime

    const token = RtmTokenBuilder.buildToken(APP_ID, APP_CERTIFICATE, account, role, privilagedExpireTime)

    res.status(200).send(token)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })