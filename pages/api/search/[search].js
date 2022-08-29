
export default async function handle(req, res) {
  const { search }  = req.query
  
  const resArtist = await fetch(`https://api.deezer.com/search/artist?q=${search}&limit=5`)
  const artistJson = await resArtist.json()
  const resTracks = await fetch(`https://api.deezer.com/search/track?q=${search}&limit=20`)
  const tracksJson = await resTracks.json()

  res.status(200).json({
    artists: artistJson.data,
    tracks: tracksJson.data,
  })
}