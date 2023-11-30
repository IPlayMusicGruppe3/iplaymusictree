import React, { useState, useEffect } from "react";

const CLIENT_ID = "e012db28aeb3453e861fd9d1658c5e58";
const CLIENT_SECRET = "94f487ea6ce64f9eb1c0e77171cad5c7";

const SpotifyComponent = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchTopTracks = async () => {
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

    
        localStorage.setItem("spotifyAccessToken", accessToken);

        const response = await fetch(
          "https://api.spotify.com/v1/browse/new-releases?limit=10",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const trackIds = data.albums.items.map((album) => album.id).join(",");

          const tracksResponse = await fetch(
            `https://api.spotify.com/v1/albums?ids=${trackIds}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (tracksResponse.ok) {
            const tracksData = await tracksResponse.json();
            setTopTracks(tracksData.albums);
          } else {
            console.error(
              "Failed to fetch track details:",
              tracksResponse.status
            );
          }
        } else {
          console.error("Failed to fetch top tracks:", response.status);
        }
      } catch (error) {
        console.error("Error fetching top tracks:", error.message);
      }
    };

    fetchTopTracks();
  }, []);

  useEffect(() => {
    if (window.Spotify) {
      const newPlayer = new window.Spotify.Player({
        name: "React Spotify Player",
        getOAuthToken: (cb) => {
          cb(localStorage.getItem("spotifyAccessToken"));
        },
      });

      setPlayer(newPlayer);

      newPlayer.addListener("initialization_error", ({ message }) => {
        console.error(`Failed to initialize player: ${message}`);
      });
      newPlayer.addListener("authentication_error", ({ message }) => {
        console.error(`Failed to authenticate: ${message}`);
      });
      newPlayer.addListener("account_error", ({ message }) => {
        console.error(`Failed to validate Spotify account: ${message}`);
      });
      newPlayer.addListener("playback_error", ({ message }) => {
        console.error(`Playback error: ${message}`);
      });

      newPlayer.addListener("player_state_changed", (state) => {
        console.log("Player state changed", state);
      });

      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      newPlayer.connect();

      return () => {
        newPlayer.disconnect();
      };
    }
  }, []);

  const playTrack = (uri) => {
    player && player.togglePlay();
    player && player.queue(uri);
    player && player.setVolume(0.5);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Top 10 Songs on Spotify</h1>
      <ul className="space-y-4">
        {topTracks.map((track) => (
          <li
            key={track.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex items-center">
              <img
                src={track.images[0].url}
                alt={track.name}
                className="mr-4"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <p className="font-semibold">{track.name}</p>
                <p className="text-gray-600">
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </div>
            <button onClick={() => playTrack(track.uri)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyComponent;
