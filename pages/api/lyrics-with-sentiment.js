// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const lyricsFinder = require('lyrics-finder');
var Sentiment = require('sentiment');

export default async function lyrics(req, res) {
    if (req.query && req.query.artist && req.query.song) {
        console.log(JSON.stringify(req.query))
        let lyrics = await lyricsFinder(req.query.artist, req.query.song) || "Not Found!"; 
        var sentiment = new Sentiment();
        var result = sentiment.analyze(lyrics)
        res.status(200).json({ artist: req.query.artist, song: req.query.song, lyrics: lyrics, sentiment: result })
    }
  }
  
