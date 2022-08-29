
export default async function handle(req, res) {
  // * top musicas en deezer
  const topMusic = await fetch(`https://api.deezer.com/editorial/0/charts`)
  const topMusicJson = await topMusic.json()
  // * top albums en deezer
  const topAlbums = await fetch(`https://api.deezer.com/chart/0/albums`)
  const topAlbumsJson = await topAlbums.json()
  // * top album
  const artist = await fetch(`https://api.deezer.com/artist/${topAlbumsJson.data[0].artist.id}`)
  const artistJson = await artist.json()

  res.status(200).json({
    topMusic: topMusicJson.tracks.data,
    topAlbums: topAlbumsJson.data, 
    artist: artistJson,
  })
}