<template>
  <div class="Movies">
    <h2>Johnny Lingo</h2>
    <div class="movie1">
      <iframe class="responsive-iframe" src="https://www.youtube.com/embed/pfahoLfrddU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div><br><br>
    <h2>Freetown</h2>
    <div class="movie2">
      <iframe class="responsive-iframe" src="https://www.youtube.com/embed/Ohm9n-DmTs4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Movies',
  
}
</script>

<style>
h2 {
  color: #CC2E5D;
  padding: 30px;
}
.movie1 {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.movie2 {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>