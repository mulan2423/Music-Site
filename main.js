const express = require("express");
const data = require("./mockdatabase/albums.json");
const app = express();
const port = 3000;
app.use(express.static('public'))
app.get("/", (req, res) => {
  res.send(htmlFormatAlbums());
});

function htmlFormatAlbums() {
  const htmlFormat = data
    .map((item) => {
        console.log(item)
      return `
        <div>
            <img src=${item.image}>
            <h2>${item.title}</h2>
            <h3>${item.release_date}</h3>
            <ul>${htmlFormatSongs(item.songs)}</ul>
            <a 
        </div>
        `;
    })
    .join("");
  return htmlFormat;
}

function htmlFormatSongs(songs) {
  return songs
    .map((song) => {
      return `
        <li>
            <p>${song.title} [duration: ${song.duration}]</p>
        </li>`;
    })
    .join("");
}


app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
app.get("/data", (req, res) => {
  const htmlData = ` <div>
             <h2>Albums</h2>
            <h2> check out the first album</h2>
            <a href="Music of the Sun</a>
         <p> Best Female Pop artist of all time </p>
        </div>`;

  res.send(htmlData);
});
