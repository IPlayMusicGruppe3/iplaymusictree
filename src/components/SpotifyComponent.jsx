import React, { useState, useEffect } from "react";

const CLIENT_ID = "e012db28aeb3453e861fd9d1658c5e58";
const CLIENT_SECRET = "94f487ea6ce64f9eb1c0e77171cad5c7";

const SpotifyComponent = () => {
  const [topTracks, setTopTracks] = useState([]);

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

        // Fetch top tracks using the obtained access token
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
          setTopTracks(data.albums.items);
        } else {
          console.error("Failed to fetch top tracks:", response.status);
        }
      } catch (error) {
        console.error("Error fetching top tracks:", error.message);
      }
    };

    fetchTopTracks();
  }, []);

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
              <iframe
                title={track.name}
                src={`https://open.spotify.com/embed/album/${track.id}`}
                width="300"
                height="380"
                allowtransparency="true"
                allow="encrypted-media"
                className="mr-4"
              ></iframe>
              <div>
                <p className="font-semibold">{track.name}</p>
                <p className="text-gray-600">
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </div>
            <p className="text-gray-600"></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyComponent;
