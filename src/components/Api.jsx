import { useState, useEffect } from "react";
import "../index.css";

const CLIENT_ID = "0d404d236efa47c19511cae4238c6455";
const CLIENT_SECRET = "b07425f3eb9b439cb9e5f7a8e59828b8";

function Api() {
  const [searchInput, setSearchInput] = useState("");
  const [accesToken, setAccesToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccesToken(data.access_token));
  }, []);

  async function search() {
    console.log("Search for " + searchInput); // SÃ¸g efter kunstner

    // get request using search to get the artist id
    var searchParamters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParamters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log(artistID);

    await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParamters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });

    fetch(
      "https://api.spotify.com/v1/browse/featured-playlists?country=DK&locale=sv_DK",
      searchParamters
    )
      .then((response) => response.json())
      .then((data) => setFeaturedPlaylists(data.playlists.items))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div className="App">
      <div>
        <input
          placeholder="Hvad vil du lytte til?"
          type="input"
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              console.log("Pressed enter");
              search();
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>
      <div>
        {albums.map((album, i) => {
          console.log(album);
          return (
            <div key={i}>
              <img src={album.images[0].url} alt={album.name} />
              <div>{album.name}</div>
            </div>
          );
        })}
      </div>
      <div>
        {featuredPlaylists.map((playlist, i) => (
          <div key={i}>
            <img src={playlist.images[0].url} alt={playlist.name} />
            <div>{playlist.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;