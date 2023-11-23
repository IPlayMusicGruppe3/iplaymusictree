import React, { useState, useEffect } from "react";

const CLIENT_ID = "e012db28aeb3453e861fd9d1658c5e58";
const CLIENT_SECRET = "94f487ea6ce64f9eb1c0e77171cad5c7";
const REDIRECT_URI = "http://localhost:5173/"; 

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-top-read&show_dialog=true`;

const SpotifyComponent = () => {
  const [token, setToken] = useState("");
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
  
    const getAccessTokenFromUrl = () => {
      const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
          if (item) {
            const parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
        }, {});
      return hash.access_token;
    };

   
    const accessToken = getAccessTokenFromUrl();

    if (accessToken) {

      setToken(accessToken);

   
      fetchTopTracks(accessToken);
    } else {
   
      window.location.href = AUTH_URL;
    }
  }, []);

  const fetchTopTracks = async (accessToken) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/top/tracks?limit=10",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTopTracks(data.items);
      } else {
        console.error("Failed to fetch top tracks:", response.status);
      }
    } catch (error) {
      console.error("Error fetching top tracks:", error.message);
    }
  };

  const handlePlayTrack = (trackUri) => {
   
    console.log("Play track:", trackUri);
  };

  return (
    <div>
      <h1>Top 10 Songs on Spotify</h1>
      <ul>
        {topTracks.map((track) => (
          <li key={track.id}>
            {track.name} -{" "}
            {track.artists.map((artist) => artist.name).join(", ")}
            <button onClick={() => handlePlayTrack(track.uri)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyComponent;
