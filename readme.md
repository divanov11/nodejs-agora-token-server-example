# Agora RTC & RTM Token Server Examples

### Getting Started

Install requirements

```
npm install
```

Add in your APP ID and APP certificate within `app.js`

> You can find this information in your Agora console.

```js
const APP_ID = 'YOUR APP ID'
const APP_CERTIFICATE = 'YOUR APP CERTIFICATE'
```


Test RTC and RTM token server by running `nodemon app.js` and then visiting the following routes:

```js
localhost:3000/token-rtc

localhost:300/token-rtm
```
