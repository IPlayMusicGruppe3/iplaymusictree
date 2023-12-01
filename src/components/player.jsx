import React, { useState, useEffect } from "react";

const CLIENT_ID = "e012db28aeb3453e861fd9d1658c5e58";
const CLIENT_SECRET = "94f487ea6ce64f9eb1c0e77171cad5c7";

const SpotifyPlayer = () => {
  const [track, setTrack] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const tokenResponse = await fetch(
          "https://accounts.spotify.com/api/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            },
            body: "grant_type=client_credentials",
          }
        );

        if (!tokenResponse.ok) {
          console.error("Failed to fetch access token:", tokenResponse.status);
          return;
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const response = await fetch(
          "https://api.spotify.com/v1/tracks/3Qm86XLflmIXVm1wcwkgDK",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTrack(data);
        } else {
          console.error("Failed to fetch track:", response.status);
        }
      } catch (error) {
        console.error("Error fetching track:", error.message);
      }
    };

    fetchTrack();
  }, []);

  useEffect(() => {
    if (window.Spotify && track) {
      const newPlayer = new window.Spotify.Player({
        name: "React Spotify Player",
        getOAuthToken: (cb) => {
          cb(localStorage.getItem("spotifyAccessToken"));
        },
      });

      setPlayer(newPlayer);

      newPlayer.connect();

      return () => {
        newPlayer.disconnect();
      };
    }
  }, [track]);

  const playTrack = () => {
    player && player.togglePlay();
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${track ? track.album.images[0].url : ""})`,
      }}
    >
      {track && (
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white">
          <img
            src={track.album.images[0].url}
            alt={track.name}
            className="w-32 h-32 rounded-full mb-4"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold">{track.name}</h1>
            <p className="text-gray-400">
              {track.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
          <button
            onClick={playTrack}
            className="mt-8 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700"
          >
            Play
          </button>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
