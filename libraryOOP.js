const util = require('util')

const Library = function(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

Library.prototype.addPlaylist = function(playlistName) {
    this.playlists.push(playlistName);
}

const Playlist = function(playlistName) {
    this.playlistName = playlistName;
    this.tracks = [];
}

Playlist.prototype.addTrack = function(track) {
    this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
    let sum = 0;
    this.tracks.forEach((track) => {
        sum = sum += track.rating;
    });
    const overallRating = Math.round((sum / this.tracks.length) * 10) / 10;
    return overallRating;
}

Playlist.prototype.totalDuration = function() {
    let total = 0;
    this.tracks.forEach((track) => {
        total = total += track.length;
    });
    return total;
}

const Track = function(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}


const newLib = new Library("Music", "Carmen")
const playlist1 = new Playlist("Favourites")
const playlist2 = new Playlist("Movie Songs")
const track1 = new Track("lalala", 5, 60)
const track2 = new Track("Friyay", 4, 100)
const track3 = new Track("Yoooo", 2, 200)
const track4 = new Track("Last One", 3, 300)

newLib.addPlaylist(playlist1)
playlist1.addTrack(track1)
playlist1.addTrack(track2)
playlist1.addTrack(track3)
playlist1.addTrack(track4)

newLib.addPlaylist(playlist2)
playlist2.addTrack(track1)
playlist2.addTrack(track2)
playlist2.addTrack(track3)
playlist2.addTrack(track4)

console.log(util.inspect(newLib, false, null))
console.log('Playlist1 overall rating:', playlist1.overallRating())
console.log('Playlist1 total duration:', playlist1.totalDuration())