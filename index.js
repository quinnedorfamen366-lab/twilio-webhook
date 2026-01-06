const express = require('express');
const { VoiceResponse } = require('twilio').twiml;
const app = express();
app.use(express.urlencoded({ extended: false }));

app.post('/voice', (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say('Connecting your call.');
  twiml.dial().client('spoke_phone_user');
  res.type('text/xml');
  res.send(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Twilio webhook running on port ${PORT}`));
