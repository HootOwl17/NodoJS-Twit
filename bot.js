console.log("Enviando Tweet C:");

var Twit = require('Twit')

var T = new Twit({
  consumer_key:         'LYbjFtj2E3Yp4P5p4nQqbkwwj',
  consumer_secret:      'VimnHQgaXLDnMqX0nuNNJ9ab1lTO6kDUhEiNV87ncz2wr298jU',
  access_token:         '962357339801247745-OOpbIRfOUiKCyJ2vaLLhSbm5jdc3EIf',
  access_token_secret:  '4qRTMzssjimubMA5QUylYIsr23iV6L1FjPmm3TBIVKEO8',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var tweet = {
  status: "#KCA #InfluencerEspañolAriannMusic Ella merece ganar más que nadie"
}

T.post('statuses/update',tweet,callTweet);

function callTweet(err,data,response){
  if(err){
    console.log("Error Auxilio");
  }
  else {
    console.log("Funciono :v/")
  }
}
