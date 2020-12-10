<template>
  <div class="Music">
    <section class="player">
      <h2 class="song-title">{{ current.title}}</h2>
      <h3 class="song-artist">by {{current.artist}}</h3>
      <div class="controls">
        <button class="prev" @click="prev">Prev</button>
        <button class="play" v-if="!isPlaying" @click="play">Play</button>
        <button class="pause" v-else @click="pause">Pause</button>
        <button class="next" @click="next">Next</button>
      </div>
    </section>
    <section class="playlist">
      <h3>The Playlist:</h3>
      <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
        {{ song.title }} <p>by {{ song.artist }}</p> 
      </button>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Music',
  data () {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Come Thou Fount Of Every Blesssing',
          artist: 'Mark Geslison',
          almbum: 'Hymns on Guitar',
          duration: '3:15 min',
          src: require('../assets/Instrumental/01 Come Thou Fount Of Every Blesssin.mp3')
        },
        {
          title: 'Press Forward, Saints',
          artist: 'Mark Geslison',
          almbum: 'Hymns on Guitar',
          duration: '2:07 min',
          src: require('../assets/Instrumental/09 Press Forward, Saints.mp3')
        },
        {
          title: 'Hign on the Mpuntain Top',
          artist: 'The Church of Jesus Christ of Latter-Day Saints',
          almbum: 'Hymns',
          duration: '2:31 min',
          src: require('../assets/Hymns/bandera_de_sionmusica_solo.mp3')
        },
        {
          title: 'The Morning Breaks',
          artist: 'The Church of Jesus Christ of Latter-Day Saints',
          almbum: 'Hymns',
          duration: '3:52 min',
          src: require('../assets/Hymns/the-morning-breaks-instrumental-192k-eng.mp3')
        },
        {
          title: 'Love Is Spoken Here',
          artist: 'Clay',
          almbum: 'The R.M. Soundtrack',
          duration: '1:56 min',
          src: require('../assets/Rock/02-Love Is Spoken Here.mp3')
        },
        {
          title: 'Called to Serve',
          artist: 'Edit Nothing',
          almbum: 'The R.M. Soundtrack',
          duration: '2:09 min',
          src: require('../assets/Rock/10-Called To Serve.mp3')
        }
      ],
      player: new Audio()
    }
  },
  methods: {
    play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play()
      this.player.addEventListener('ended', function() {
        this.index++
        if (this.index > this.songs.length - 1) {
        this.index = 0 }
        this.current = this.songs[this.index]
        this.play(this.current)
      }.bind(this))
      this.isPlaying = true
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++
      if (this.index > this.songs.length - 1) {
        this.index = 0
      }
      this.current = this.songs[this.index]
      this.play(this.current)
    },
    prev () {
      this.index--
      if (this.index < 0) {
        this.index = this.songs.length - 1
      }
      this.current = this.songs[this.index]
      this.play(this.current);
    }
  },
  created () {
    this.current = this.songs[this.index]
    this.player.src = this.current.src
    //this.player.play()
  }
}
</script>

<style>
.song-title {
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.song-artist {
  font-style: italic;
  padding: 15px;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}

button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

.play, .pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0 15px;
  border-radius: 8px;
  color: azure;
  background-color: #CC2E5D;
}

.prev, .next {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0 15px;
  border-radius: 6px;
  color: azure;
  background-color: #FF5858;
}

.playlist {
  padding: 20px 30px;
}

.playlist h3 {
  color: #212121;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
}

.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20;
  font-weight: 700;
  cursor: pointer;
}

.playlist .song:hover {
  color: #FF5858;
}

.playlist .song.playing {
  color: aliceblue;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
}

</style>