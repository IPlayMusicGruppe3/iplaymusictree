const clientId = 'b07425f3eb9b439cb9e5f7a8e59828b8'; // Skift dette
const clientSecret = '0d404d236efa47c19511cae4238c6455'; // Skift dette

const token = btoa(`${clientId}:${clientSecret}`);

fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${token}`
  },
  body: 'grant_type=client_credentials'
})
.then(response => response.json())
.then(data => {
  console.log(data); // Her vil du få adgangstokenet, hvis anmodningen lykkedes
})
.catch(error => {
  console.error('Error:', error);
});


// Antag at `accessToken` er tokenen du fik fra den foregående anmodning
const accessToken = 'DIN_ACCESS_TOKEN_HER';

fetch('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
.then(response => response.json())
.then(data => {
  console.log(data); // Data fra Spotify API
})
.catch(error => {
  console.error('Error:', error);
});

